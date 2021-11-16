import { Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import { withApollo } from '../../utils/withApollo'
import { getUser } from '../../utils/auth'
import Wrapper from '../../components/Wrapper'

function Dashboard() {
	const router = useRouter()
	const user = getUser()

	return (
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
	)
}

export default withApollo({ ssr: true })(Dashboard)
