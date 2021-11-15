import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
// import AuthProvider from '../utils/auth'
// import { client } from '../utils/withApollo'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<SessionProvider session={pageProps.session}>
			<ChakraProvider resetCSS>
				<Component {...pageProps} />
			</ChakraProvider>
		</SessionProvider>
	)
}

export default MyApp
