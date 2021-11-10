import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider resetCSS>
			<Component {...pageProps} />
		</ChakraProvider>
	)
}

export default MyApp
