import { User } from '../generated/graphql'

type UserType = User & {
	isAuthenticated: boolean
}
let user: UserType = {
	isAuthenticated: false,
	id: 0,
	email: '',
	name: '',
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
