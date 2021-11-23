import type { NextPage } from 'next'
import { Button, Box } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import Header from '../components/Header'
import Wrapper from '../components/Wrapper'
import { withApollo } from '../utils/withApollo'
import { getUser } from '../utils/auth'
import NotAuthenticated from '../components/NotAuthenticated'

const Home: NextPage = () => {
	const router = useRouter()
	const user = getUser()
	return (
		<>
			<Header />
			<Wrapper
				variant="large"
				display="flex"
				justifyContent="space-evenly"
			>
				<Box display="flex" flexDirection="column" alignItems="center">
					{user.isAuthenticated ? (
						<>
							<p>{user.name}</p>
							<Button
								mt={6}
								onClick={() => router.push('/dashboard')}
							>
								dashboard
							</Button>
						</>
					) : (
						<NotAuthenticated />
					)}
				</Box>
			</Wrapper>
		</>
	)
}
export default withApollo({ ssr: false })(Home)
