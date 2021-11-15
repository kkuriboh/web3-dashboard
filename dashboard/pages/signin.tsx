import Head from 'next/head'
import { Formik, Form } from 'formik'
import { Button } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { Box } from '@chakra-ui/layout'

import InputField from '../components/InputField'
import { useLoginMutation, useRegisterMutation } from '../generated/graphql'
import { toErrorMap } from '../utils/toErrorMap'
import { withApollo } from '../utils/withApollo'
import Wrapper from '../components/Wrapper'
import Header from '../components/Header'

function SignUp() {
	const router = useRouter()
	const [login] = useLoginMutation()

	return (
		<>
			<Header />
			<Wrapper variant="medium">
				<Head>
					<title>dashboard</title>
				</Head>
				<Formik
					initialValues={{
						email: '',
						password: '',
					}}
					onSubmit={async (values, { setErrors }) => {
						try {
							const response = await login({
								variables: values,
							})
							// const response = await {}
							if (response.data?.login.errors) {
								setErrors(
									toErrorMap(response.data.login.errors)
								)
							} else if (response.data?.login.user) {
								console.log(response)
								router.push('/')
							}
						} catch (error) {
							console.log({ error })
						}
					}}
				>
					{({ isSubmitting }) => (
						<Form>
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
							<Box
								mt={6}
								display="flex"
								justifyContent="space-between"
								alignItems="center"
							>
								<Button type="submit" isLoading={isSubmitting}>
									SignIn
								</Button>
								<Link href="siginin">
									don't have an account?
								</Link>
							</Box>
						</Form>
					)}
				</Formik>
			</Wrapper>
		</>
	)
}
export default withApollo({ ssr: false })(SignUp)
