import { createContext, useEffect, useState } from 'react'
import { setCookie, parseCookies } from 'nookies'
import { useRouter } from 'next/router'

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
	name: string
	email: string
	password: string
	country: string
}

//termporary functions
function loginRequest({ email, password }: loginData) {
	return {
		token: '123',
		user: {
			name: 'John Doe',
			email: 'jonny@mail.com',
			password: '1234',
			country: 'USA',
		},
	}
}
async function returnUserInfo() {
	return {
		name: 'John Doe',
		email: 'jonny@mail.com',
		password: '1234',
		country: 'USA',
	}
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: any) {
	const router = useRouter()
	const [user, setUser] = useState<User | null>(null)
	const isAuthenticated = !!user

	useEffect(() => {
		const { dashboardToken: token } = parseCookies()
		if (token) {
			returnUserInfo().then((user) => {
				setUser(user)
			})
		}
	}, [])

	async function login({ email, password }: loginData) {
		const { token, user } = await loginRequest({
			email,
			password,
		})
		setCookie(undefined, 'dashboardToken', token, {
			maxAge: 60 * 60 * 24,
		})
		setUser(user)
		router.push('/')
	}

	return (
		<AuthContext.Provider value={{ user, isAuthenticated, login }}>
			{children}
		</AuthContext.Provider>
	)
}
