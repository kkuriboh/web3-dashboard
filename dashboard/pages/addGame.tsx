import Head from 'next/head'
import { Formik, Form } from 'formik'
import { Button } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'

import InputField from '../components/InputField'
import { withApollo } from '../utils/withApollo'
import Wrapper from '../components/Wrapper'
import Header from '../components/Header'
import { useCreateGameMutation } from '../generated/graphql'
import { getUser } from '../utils/auth'
import NotAuthenticated from '../components/NotAuthenticated'

function AddGame() {
	const router = useRouter()
	const [addGame] = useCreateGameMutation()
	const user = getUser()

	return (
		<>
			<Header />
			{!user.isAuthenticated ? (
				<NotAuthenticated />
			) : (
				<>
					<Wrapper variant="medium">
						<Head>
							<title>dashboard</title>
						</Head>
						<Formik
							initialValues={{
								name: '',
								category: '',
								description: '',
								developer: '',
								releaseDate: '',
								price: 0,
								image: null,
							}}
							onSubmit={async (values) => {
								await addGame({
									variables: {
										data: {
											OP: { connect: { id: user.id } },
											...values,
										},
									},
								})
								router.push('/')
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
										label="Category"
										name="category"
										placeholder="category"
									/>
									<InputField
										label="Description"
										name="description"
										placeholder="description"
										isTextArea
									/>
									<InputField
										label="Developer"
										name="developer"
										placeholder="developer"
									/>
									<InputField
										label="Release Date"
										name="releaseDate"
										type="date"
									/>
									<InputField
										label="Price"
										name="price"
										placeholder="price"
										type="number"
									/>
									<InputField
										label="Image(optional)"
										name="image"
										placeholder="https://source.unsplash.com/random/800x600"
									/>
									<Button
										mt={6}
										type="submit"
										isLoading={isSubmitting}
									>
										Add
									</Button>
								</Form>
							)}
						</Formik>
					</Wrapper>
				</>
			)}
		</>
	)
}
export default withApollo({ ssr: true })(AddGame)
