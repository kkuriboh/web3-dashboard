import {
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
	Button,
	AlertDialog,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogContent,
	AlertDialogOverlay,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { memo, useState } from 'react'
import {
	useDeleteGameMutation,
	useSelectGamesQuery,
} from '../generated/graphql'
import { getUser } from '../utils/auth'

function Content() {
	const [isOpen, setIsOpen] = useState(false)
	const onClose = () => setIsOpen(false)

	const user = getUser()
	const router = useRouter()
	const { data, loading, refetch } = useSelectGamesQuery()
	const [deleteGame] = useDeleteGameMutation()

	return (
		<>
			{!data && loading ? (
				<Text>loading...</Text>
			) : (
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
						{data?.games ? (
							data.games.map((game) => (
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
									<Td>{game.description.slice(0, 50)}</Td>
									<Td isNumeric>{game.price}</Td>
									<Td>{game.releaseDate}</Td>
									<Td>{game.OP.name}</Td>
									{game.OP.id === user.id ? (
										<Td>
											<Box display="flex">
												<Text
													cursor="pointer"
													textDecor="underline"
													mr={1}
													onClick={() =>
														router.push(
															`/editGame/${game.id}`
														)
													}
												>
													edit
												</Text>
												<Text
													cursor="pointer"
													textDecor="underline"
													ml={1}
													onClick={() =>
														setIsOpen(true)
													}
												>
													delete
													<AlertDialog
														isOpen={isOpen}
														leastDestructiveRef={
															undefined
														}
														onClose={onClose}
													>
														<AlertDialogOverlay>
															<AlertDialogContent>
																<AlertDialogHeader
																	fontSize="lg"
																	fontWeight="bold"
																>
																	Delete Game
																</AlertDialogHeader>

																<AlertDialogBody>
																	Are you
																	sure? You
																	can't undo
																	this action
																	afterwards.
																</AlertDialogBody>

																<AlertDialogFooter>
																	<Button
																		onClick={
																			onClose
																		}
																	>
																		Cancel
																	</Button>
																	<Button
																		colorScheme="red"
																		onClick={async () => {
																			onClose()
																			const response =
																				await deleteGame(
																					{
																						variables:
																							{
																								where: {
																									id: game.id,
																								},
																							},
																					}
																				)
																			if (
																				response
																					.data
																					?.deleteGame
																					?.id
																			) {
																				refetch()
																			}
																		}}
																		ml={3}
																	>
																		Delete
																	</Button>
																</AlertDialogFooter>
															</AlertDialogContent>
														</AlertDialogOverlay>
													</AlertDialog>
												</Text>
											</Box>
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
			)}
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

export default memo(Content)
