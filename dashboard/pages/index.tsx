import { Button, Box, Heading } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import { withApollo } from '../utils/withApollo'
import { getUser } from '../utils/auth'
import Header from '../components/Header'
import Content from '../components/Content'
import isServer from '../utils/isServer'

function Dashboard() {
	const router = useRouter()
	const user = getUser()

	if (!user.isAuthenticated && !isServer()) {
		router.push('/signin')
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
			>
				<Box>
					<Heading fontSize="medium" fontWeight="medium">
						User: {user.name}
					</Heading>
					<Heading fontSize="medium" fontWeight="medium">
						Email: {user.email}
					</Heading>
					<Heading fontSize="medium" fontWeight="medium">
						Posted games: {user._count.postedGames}
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
					<Content />
					<Button mt={4} onClick={() => router.push('/addGame')}>
						Post game
					</Button>
				</Box>
			</Box>
		</>
	)
}
export default withApollo({ ssr: true })(Dashboard)
