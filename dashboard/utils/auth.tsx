import { createContext, useEffect, useState } from 'react'
import { setCookie, parseCookies } from 'nookies'
import { useRouter } from 'next/router'
import { useGetUserByIdQuery, useLoginMutation } from '../generated/graphql'

type AuthContextType = {
	isAuthenticated: boolean
	user: User | null
	login: (data: loginData) => Promise<void>
}

type loginData = {
	email: string
	password: string
}

type User = {
	name?: string
	email: string
	password?: string
	country?: string
}

//termporary functions
// function loginRequest({ email, password }: loginData) {
// 	return {
// 		token: '123',
// 		user: {
// 			email: 'jonny@mail.com',
// 			password: '1234',
// 		},
// 	}
// }
async function returnUserInfo() {
	return {
		name: 'John Doe',
		email: 'jonny@mail.com',
		password: '1234',
		country: 'USA',
	}
}

export function AuthProvider({ ...props }) {
	const AuthContext = createContext({} as AuthContextType)
	const router = useRouter()
	const [user, setUser] = useState<User | null>(null)
	const isAuthenticated = !!user
	const [loginfn] = useLoginMutation()

	useEffect(() => {
		const { jid: token } = parseCookies()
		if (token) {
			returnUserInfo().then((user) => {
				setUser(user)
			})
		}
	}, [])

	async function login({ email, password }: loginData) {
		const { data } = await loginfn({
			variables: {
				email,
				password,
			},
		})
		if (data) {
			setCookie(undefined, 'jid', data.login.accessToken!, {
				maxAge: 60 * 60 * 24,
			})
			setUser(data.login.user)
			router.push('/')
		}
	}

	return (
		<AuthContext.Provider value={{ user, isAuthenticated, login }}>
			{props.children}
		</AuthContext.Provider>
	)
}
