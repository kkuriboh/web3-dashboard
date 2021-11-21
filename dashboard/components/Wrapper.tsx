import { Box, BoxProps } from '@chakra-ui/layout'
import React from 'react'

type WrapperProps = BoxProps & {
	variant: 'small' | 'medium' | 'large'
}

export default function Wrapper({ variant, ...props }: WrapperProps) {
	return (
		<Box
			maxW={
				variant === 'small'
					? '25rem'
					: variant === 'medium'
					? '37.5rem'
					: variant === 'large'
					? '50rem'
					: undefined
			}
			mx="auto"
			px={[4, 6, 8]}
			py={[4, 6, 8]}
			width="100%"
			{...props}
		>
			{props.children}
		</Box>
	)
}
