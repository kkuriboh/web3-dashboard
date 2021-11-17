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
						<Table variant="simple">
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
									<Th>Actions</Th>
								</Tr>
							</Thead>
							<Tbody>
								{
									data ? (
										data.map((game) => (
											<Tr>
												<Td>{game.id}</Td>
												<Td>{game.name}</Td>
												<Td>{game.developer}</Td>
												<Td>{game.category}</Td>
												<Td>{game.description}</Td>
												<Td isNumeric>{game.price}</Td>
												<Td>{game.releaseDate}</Td>
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
											</Tr>
										))
									) : (
										<p>no data</p>
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

export default withApollo({ ssr: true })(Dashboard)
