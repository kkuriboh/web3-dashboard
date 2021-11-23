import Head from 'next/head'
import { Formik, Form } from 'formik'
import { Button } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { Box } from '@chakra-ui/layout'

import InputField from '../components/InputField'
import { useRegisterMutation, useLoginMutation } from '../generated/graphql'
import { toErrorMap } from '../utils/toErrorMap'
import { withApollo } from '../utils/withApollo'
import Wrapper from '../components/Wrapper'
import Header from '../components/Header'
import { setUser } from '../utils/auth'

function SignUp() {
	const router = useRouter()
	const [register] = useRegisterMutation()
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
						name: '',
						email: '',
						password: '',
						confirmPassword: '',
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
						} else if (response.data?.register.user?.email) {
							const loginResponse = await login({
								variables: {
									email: values.email,
									password: values.password,
								},
							})
							if (loginResponse.data?.login.errors) {
							} else if (loginResponse.data?.login.user) {
								let i = 0
								loginResponse.data.login.user.postedGames.forEach(
									() => {
										i += 1
									}
								)
								setUser({
									_count: { postedGames: i },
									...loginResponse.data.login.user,
								})
								router.back()
							}
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
								label="Confirm Password"
								name="confirmPassword"
								placeholder="confirm password"
								type="password"
							/>
							<InputField
								isSelect
								name="country"
								label="Country"
								placeholder="Wonderland"
							/>
							<Box
								mt={6}
								display="flex"
								justifyContent="space-between"
								alignItems="center"
							>
								<Button type="submit" isLoading={isSubmitting}>
									SignUp
								</Button>
								<Link href="siginin">
									already have an account?
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
