import { useRouter } from 'next/router'
import { useGameQuery, useGameWithImageQuery } from '../generated/graphql'

export function useGetGameFromUrl() {
	const router = useRouter()
	const id =
		typeof router.query.id === 'string' ? parseInt(router.query.id) : -1
	return useGameQuery({
		skip: id === -1,
		variables: {
			where: { id },
		},
	})
}
export function useGetGameWithImageFromUrl() {
	const router = useRouter()
	const id =
		typeof router.query.id === 'string' ? parseInt(router.query.id) : -1
	return useGameWithImageQuery({
		skip: id === -1,
		variables: {
			where: { id },
		},
	})
}
