import {
	FormControl,
	FormLabel,
	Input,
	FormErrorMessage,
	Select,
} from '@chakra-ui/react'
import { useField } from 'formik'
import { InputHTMLAttributes } from 'react'

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> &
	InputHTMLAttributes<HTMLSelectElement> & {
		label: string
		name: string
		selectLabel?: string
		selectName?: string
		isSelect?: boolean
	}

export default function InputField({
	label,
	size: _,
	selectLabel,
	selectName,
	isSelect,
	...props
}: InputFieldProps) {
	const [field, { error }] = useField(props)
	return (
		<FormControl isInvalid={!!error}>
			<FormLabel mt={4} htmlFor={field.name}>
				{label}
			</FormLabel>
			{isSelect ? (
				<Select {...field} {...props} id={field.name}>
					<option value="Brazil">Brazil</option>
					<option value="US">US</option>
					<option value="CA">CA</option>
				</Select>
			) : (
				<Input {...field} {...props} id={field.name} />
			)}
			{error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
		</FormControl>
	)
}
