import Head from 'next/head'
import { Formik, Form } from 'formik'
import { Button } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { Box } from '@chakra-ui/layout'

import InputField from '../components/InputField'
import { useLoginMutation } from '../generated/graphql'
import { toErrorMap } from '../utils/toErrorMap'
import { withApollo } from '../utils/withApollo'
import Wrapper from '../components/Wrapper'
import Header from '../components/Header'
import { getUser, setUser } from '../utils/auth'
import isServer from '../utils/isServer'

function SignIn() {
	const router = useRouter()
	const user = getUser()
	if (user.isAuthenticated && isServer()) {
		router.push('/')
	}
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
							if (response.data?.login.errors) {
								setErrors(
									toErrorMap(response.data.login.errors)
								)
							} else if (response.data?.login.user) {
								let i = 0
								response.data.login.user.postedGames.forEach(
									() => {
										i += 1
									}
								)
								setUser({
									_count: { postedGames: i },
									...response.data.login.user,
								})
								router.back()
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
								<Link href="/signup">
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
export default withApollo({ ssr: false })(SignIn)
