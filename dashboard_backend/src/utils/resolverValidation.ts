import { gameInput } from '../resolvers/game'
import { userInput } from '../resolvers/user'

export function validateUserForm(params: userInput) {
	const emailReg =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

	const emailParts = params.email.split('@')

	if (!params.name) {
		return [
			{
				field: 'name',
				message: 'please insert a valide username',
			},
		]
	} else if (params.name.length > 64) {
		return [
			{
				field: 'name',
				message: 'your username is too long',
			},
		]
	}
	if (!emailReg.test(params.email) || emailParts[0].length > 64) {
		return [
			{
				field: 'email',
				message: 'please insert a valid email',
			},
		]
	}
	if (!params.password) {
		return [
			{
				field: 'password',
				message: 'please insert a valid password',
			},
		]
	}
	if (params.country === 'Wonderland') {
		return [
			{
				field: 'country',
				message: 'please select a valid country',
			},
		]
	} else if (!params.country) {
		return [
			{
				field: 'country',
				message: 'something went wrong',
			},
		]
	}
	return null
}

export function validateGameForm(params: gameInput) {
	if (!params.name) {
		return [
			{
				field: 'name',
				message: 'please insert a valide username',
			},
		]
	} else if (params.name.length > 64) {
		return [
			{
				field: 'name',
				message: 'your username is too long',
			},
		]
	}
	if (!params.category) {
		return [
			{
				field: 'category',
				message: 'please insert a valid category',
			},
		]
	}
	if (!params.description) {
		return [
			{
				field: 'description',
				message: 'please insert a valid desciption',
			},
		]
	}
	if (!params.developer) {
		return [
			{
				field: 'developer',
				message: 'please insert a valid developer',
			},
		]
	}
	if (!params.releaseDate) {
		return [
			{
				field: 'releaseDate',
				message: 'something went wrong',
			},
		]
	}
	if (!params.price) {
		return [
			{
				field: 'price',
				message: 'please insert a valid price',
			},
		]
	}
	return null
}
