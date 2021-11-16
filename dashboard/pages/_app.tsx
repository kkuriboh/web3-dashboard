import type { AppProps } from 'next/app'
import { ColorModeScript, ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider resetCSS>
			<ColorModeScript initialColorMode="dark" />
			<Component {...pageProps} />
		</ChakraProvider>
	)
}

export default MyApp
