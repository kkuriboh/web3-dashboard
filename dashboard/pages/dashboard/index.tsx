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

import { withApollo } from '../../utils/withApollo'
import { getUser } from '../../utils/auth'
import Wrapper from '../../components/Wrapper'
import Header from '../../components/Header'
import { useSelectGamesQuery } from '../../generated/graphql'
import styled from '@emotion/styled'

function Dashboard() {
	const router = useRouter()
	const user = getUser()
	const data = useSelectGamesQuery().data?.selectGames

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
				{user.isAuthenticated ? (
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
												<Td>{game.name}</Td>
												<Td>{game.developer}</Td>
												<Td>{game.category}</Td>
												<Td>{game.description}</Td>
												<Td isNumeric>{game.price}</Td>
												<Td>{game.releaseDate}</Td>
												<Td>{game.OP.id}</Td>
												{game.OP.id === user.id ? (
													<Td
														display="flex"
														flexDirection="column"
														alignItems="flex-end"
													>
														<Text
															cursor="pointer"
															textDecor="underline"
														>
															edit
														</Text>
														<Text
															cursor="pointer"
															textDecor="underline"
														>
															delete
														</Text>
													</Td>
												) : null}
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
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
	position: absolute;
	background-color: #999;
	top: 0;
	left: 0;
	mix-blend-mode: saturation;
	color: black;
	/* filter: blur(4px); */
`

export default withApollo({ ssr: true })(Dashboard)
