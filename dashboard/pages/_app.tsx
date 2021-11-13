import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from '../utils/auth'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AuthProvider>
			<ChakraProvider resetCSS>
				<Component {...pageProps} />
			</ChakraProvider>
		</AuthProvider>
	)
}

export default MyApp
