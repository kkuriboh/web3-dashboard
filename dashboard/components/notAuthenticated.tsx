import { Button, Heading, Box } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import Wrapper from './Wrapper'

export default function NotAuthenticated() {
	const router = useRouter()
	return (
		<Wrapper
			variant="small"
			display="flex"
			flexDirection="column"
			alignItems="center"
		>
			<Heading color="red.400">Not authenticated!</Heading>
			<Box display="flex" justifyContent="space-evenly" w="100%">
				<Button
					mt={6}
					colorScheme="twitter"
					onClick={() => router.push('/signin')}
				>
					SignIn
				</Button>
				<Button
					mt={6}
					colorScheme="twitter"
					onClick={() => router.push('/signup')}
				>
					SignUp
				</Button>
			</Box>
		</Wrapper>
	)
}
