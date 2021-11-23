import type { AppProps } from 'next/app'
import { ColorModeScript, ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider resetCSS>
			<Head>
				<title>web3 dashboard</title>
			</Head>
			<ColorModeScript initialColorMode="dark" />
			<Component {...pageProps} />
		</ChakraProvider>
	)
}

export default MyApp
