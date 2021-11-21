import { User } from '../generated/graphql'

type UserType = User & {
	isAuthenticated: boolean
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

export function getUser() {
	return user
}

export function setUser(newUser: User) {
	user = {
		isAuthenticated: true,
		...newUser,
	}
}

export function logout() {
	user.isAuthenticated = false
}
