import {
	Button,
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
	Text,
	Box,
	Heading,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { withApollo } from '../utils/withApollo'
import { getUser } from '../utils/auth'
import Header from '../components/Header'
import {
	useDeleteGameMutation,
	useSelectGamesQuery,
} from '../generated/graphql'
import styled from '@emotion/styled'
import { useState } from 'react'

function Dashboard() {
	const router = useRouter()
	const user = getUser()

	if (!user.isAuthenticated) {
		router.push('/signin')
	}

	const [deleteGame] = useDeleteGameMutation()
	const [data, setData] = useState(useSelectGamesQuery().data?.games)

	function handleData(newData: typeof data) {
		setData(newData)
	}

	return (
		<>
			<Header />
			<Box
				p={12}
				as="div"
				display="flex"
				flexDirection="row"
				justifyContent="space-around"
				h="80vh"
			>
				<Box>
					<Heading fontSize="medium">User: {user.name}</Heading>
					<Heading fontSize="medium">Email: {user.email}</Heading>
					<Heading fontSize="medium">
						Posted Games: {user._count.postedGames}
					</Heading>
				</Box>
				<Box
					as="div"
					display="flex"
					flexDirection="column"
					alignItems="center"
					justifyContent="center"
					w="min-content"
				>
					<Table variant="simple" position="relative">
						<TableCaption>games list</TableCaption>
						<Thead>
							<Tr>
								<Th>ID</Th>
								<Th>Name</Th>
								<Th>Developer</Th>
								<Th>Category</Th>
								<Th>Description</Th>
								<Th isNumeric>Price</Th>
								<Th>Release Date</Th>
								<Th>OP</Th>
								<Th>Actions</Th>
							</Tr>
						</Thead>
						<Tbody>
							{data ? (
								data.map((game) => (
									<Tr key={game.id}>
										<Td>{game.id}</Td>
										<Td>
											<Link
												href={`/game/[id]`}
												as={`/game/${game.id}`}
												key={game.id}
											>
												{game.name}
											</Link>
										</Td>
										<Td>{game.developer}</Td>
										<Td>{game.category}</Td>
										<Td>{game.description}</Td>
										<Td isNumeric>{game.price}</Td>
										<Td>{game.releaseDate}</Td>
										<Td>{game.OP.name}</Td>
										{game.OP.id === user.id ? (
											<Td
												display="flex"
												flexDirection="column"
												alignItems="flex-end"
											>
												<Link
													href="/editGame/[id]"
													as={`/editGame/${game.id}`}
													key={game.id}
												>
													edit
												</Link>
												<Text
													cursor="pointer"
													textDecor="underline"
													onClick={async () => {
														const response =
															await deleteGame({
																variables: {
																	where: {
																		id: game.id,
																	},
																},
															})
														if (
															response.data
																?.deleteGame?.id
														) {
															handleData(
																useSelectGamesQuery()
																	.data?.games
															)
														}
													}}
												>
													delete
												</Text>
											</Td>
										) : (
											<Td>not OP</Td>
										)}
									</Tr>
								))
							) : (
								<NoData>
									<p>No data</p>
								</NoData>
							)}
						</Tbody>
						<Tfoot>
							<Tr>
								<Th>ID</Th>
								<Th>Name</Th>
								<Th>Developer</Th>
								<Th>Category</Th>
								<Th>Description</Th>
								<Th isNumeric>Price</Th>
								<Th>Release Date</Th>
								<Th>OP</Th>
								<Th>Actions</Th>
							</Tr>
						</Tfoot>
					</Table>
					<Button mt={4} onClick={() => router.push('/addGame')}>
						Add game
					</Button>
				</Box>
			</Box>
		</>
	)
}

const NoData = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0;
	left: 0;
	p {
		font-size: 2rem;
		font-weight: bold;
		color: black;
		z-index: 4;
	}
	::after {
		content: '';
		position: absolute;
		z-index: 1;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(220, 220, 220, 0.98);
		filter: blur(0.6rem);
	}
`

export default withApollo({ ssr: true })(Dashboard)
