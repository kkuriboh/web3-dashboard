import { Box } from '@chakra-ui/layout'
import React from 'react'

export default function Wrapper({ ...props }) {
	return (
		<Box
			as="main"
			maxW="800px"
			mx="auto"
			px={[4, 6, 8]}
			py={[4, 6, 8]}
			width="100%"
		>
			{props.children}
		</Box>
	)
}
