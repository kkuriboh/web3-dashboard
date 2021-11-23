import { useRouter } from 'next/router'
import { Heading, Text, Box, IconButton, Button } from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import Image from 'next/image'

import { getUser } from '../../utils/auth'
import { withApollo } from '../../utils/withApollo'
import NotAuthenticated from '../../components/NotAuthenticated'
import { useGetGameWithImageFromUrl } from '../../utils/useGetXFromUrl'
import Wrapper from '../../components/Wrapper'
import Header from '../../components/Header'

function Game() {
	const user = getUser()

	if (!user) {
		return <NotAuthenticated />
	}

	const router = useRouter()
	const data = useGetGameWithImageFromUrl().data?.game

	if (!data) {
		return (
			<Wrapper variant={'small'}>
				<Heading>Something went wrong</Heading>
				<Button mt={4} onClick={() => router.back()}>
					Go back
				</Button>
			</Wrapper>
		)
	}

	return (
		<>
			<Header />
			<Wrapper variant={'large'}>
				<Box
					display="flex"
					justifyContent="space-between"
					alignItems="center"
					mb={4}
					pl={2}
					pr={2}
				>
					<Heading>{data.name}</Heading>
					<Text>OP: {data.OP.name}</Text>
				</Box>
				{data.image ? (
					<Image
						loader={() => data.image!}
						src={data.image}
						alt="image"
						width="100%"
						height="60%"
						layout="responsive"
					/>
				) : null}
				<Text m={4}>{data.description}</Text>
				<Box display="flex" justifyContent="space-between">
					<Box>
						<Text>Category: {data.category}</Text>
						<Text>Developer: {data.developer}</Text>
						<Text>Release date: {data.releaseDate}</Text>
						<Text>Price: {data.price}$</Text>
					</Box>
					{data.OP.id === user.id ? (
						<Box justifyContent="end" display="flex">
							<IconButton
								mr={2}
								aria-label="edit"
								icon={<EditIcon />}
								onClick={() =>
									router.push(
										'/editGame/[id]',
										`/editGame/${data.id}`
									)
								}
							/>
							<IconButton
								ml={2}
								aria-label="delete"
								icon={<DeleteIcon />}
							/>
						</Box>
					) : null}
				</Box>
			</Wrapper>
		</>
	)
}

export default withApollo({ ssr: true })(Game)
