import { createContext } from 'react'

import { User } from '../generated/graphql'

type UserType = User & {
	isAuthenticated: boolean
}
type PostedGamesType = {
	id: number
	name: string
}
let user: UserType = {
	isAuthenticated: true,
	id: 4,
	email: 'aaa',
	name: 'Augusto',
	country: 'BR',
	_count: { postedGames: 0 },
	postedGames: [],
}

const AuthContext = createContext({})

export default function AuthProvider({ children }: any) {
	return <AuthContext.Provider value={}>{children}</AuthContext.Provider>
}
