import { useState } from 'react'

import Wrapper from '../components/Wrapper'
// import InputField from '../components/InputField'

export default function Test() {
	function handleChange(e: string) {
		setDate(e)
		console.log({ date })
	}
	const [date, setDate] = useState('')
	return (
		<Wrapper variant={'small'}>
			<input
				name="date"
				type="date"
				onChange={(e) => handleChange(e.target.value)}
			/>
		</Wrapper>
	)
}
