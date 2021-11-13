import type { NextPage } from 'next'
import { Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import Header from '../components/Header'
import Wrapper from '../components/Wrapper'
import { withApollo } from '../utils/withApollo'

const Home: NextPage = () => {
	const router = useRouter()
	return (
		<>
			<Header />

			<Wrapper
				variant="large"
				display="flex"
				justifyContent="space-evenly"
			>
				<Button onClick={() => router.push('/signin')}>SignIn</Button>
				<Button onClick={() => router.push('/signup')}>SignUp</Button>
			</Wrapper>
		</>
	)
}
export default withApollo({ ssr: false })(Home)
