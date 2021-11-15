type User = {
	isAuthenticated: boolean
	id: number
	email: string
	name: string
	password: string
	country: string
}
let user: User = {
	isAuthenticated: false,
	id: 0,
	email: '',
	name: '',
	password: '',
	country: '',
}

export function getUser() {
	return user
}

export function setUser(newUser: User) {
	user = newUser
	return user
}
