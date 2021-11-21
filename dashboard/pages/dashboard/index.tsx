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
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { withApollo } from '../../utils/withApollo'
import { getUser } from '../../utils/auth'
import Wrapper from '../../components/Wrapper'
import Header from '../../components/Header'
import { useSelectGamesQuery } from '../../generated/graphql'
import styled from '@emotion/styled'

function Dashboard() {
	const router = useRouter()
	const user = getUser()
	const data = useSelectGamesQuery().data?.games

	return (
		<>
			<Header />
			<Wrapper
				variant="large"
				display="flex"
				flexDirection="column"
				alignItems="center"
				justifyContent="center"
				h="100vh"
			>
				{!user.isAuthenticated ? (
					<>
						<p>not logged</p>
						<Button mt={4} onClick={() => router.push('/')}>
							Home
						</Button>
					</>
				) : (
					<>
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
								{
									data ? (
										data.map((game) => (
											<Tr key={game.id}>
												<Td>{game.id}</Td>
												<Td>
													<Link
														href={`/dashboard/game/[id]`}
														as={`/dashboard/game/${game.id}`}
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
															href="/dashboard/editGame/[id]"
															as={`/dashboard/editGame/${game.id}`}
															key={game.id}
														>
															edit
														</Link>
														<Text
															cursor="pointer"
															textDecor="underline"
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
									)

									/* <Tr>
									<Td>inches</Td>
									<Td>millimetres (mm)</Td>
									<Td isNumeric>25.4</Td>
								</Tr>
								<Tr>
									<Td>feet</Td>
									<Td>centimetres (cm)</Td>
									<Td isNumeric>30.48</Td>
								</Tr>
								<Tr>
									<Td>yards</Td>
									<Td>metres (m)</Td>
									<Td isNumeric>0.91444</Td>
								</Tr> */
								}
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
						<p>dashboard</p>
						<Button
							mt={4}
							onClick={() => router.push('/dashboard/addGame')}
						>
							Add game
						</Button>
					</>
				)}
			</Wrapper>
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
	/* filter: blur(4px); */
`

export default withApollo({ ssr: true })(Dashboard)
