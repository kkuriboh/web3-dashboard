import type { NextPage } from 'next'
import Head from 'next/head'
import { Formik, Form } from 'formik'
import { Button } from '@chakra-ui/react'
import { Select } from '@chakra-ui/select'
import { useRouter } from 'next/dist/client/router'

import InputField from '../components/InputField'
import { useRegisterMutation } from '../generated/graphql'
import { toErrorMap } from '../utils/toErrorMap'
import { withApollo } from '../utils/withApollo'
import Wrapper from '../components/Wrapper'

const Home: NextPage = () => {
	const router = useRouter()
	const [register, { error }] = useRegisterMutation()

	return (
		<Wrapper>
			<Head>
				<title>dashboard</title>
			</Head>
			<Formik
				initialValues={{
					name: '',
					email: '',
					password: '',
					country: '',
				}}
				onSubmit={async (values, { setErrors }) => {
					const response = await register({
						variables: {
							options: values,
						},
					})
					if (response.data?.register.errors) {
						setErrors(toErrorMap(response.data.register.errors))
					} else if (response.data?.register.user) {
						console.log(response)
						router.push('/')
					}
				}}
			>
				{({ isSubmitting }) => (
					<Form>
						<InputField
							label="Name"
							name="name"
							placeholder="name"
						/>
						<InputField
							label="Email"
							name="email"
							placeholder="email"
						/>
						<InputField
							label="Password"
							name="password"
							placeholder="password"
							type="password"
						/>
						<InputField
							isSelect
							name="country"
							label="Country"
							placeholder="Wonderland"
						/>
						<Button mt={6} type="submit" isLoading={isSubmitting}>
							register
						</Button>
					</Form>
				)}
			</Formik>
		</Wrapper>
	)
}
export default withApollo({ ssr: false })(Home)
