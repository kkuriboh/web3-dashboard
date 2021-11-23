import { Button, Heading } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { Formik, Form } from 'formik'

import NotAuthenticated from '../../components/NotAuthenticated'
import { getUser } from '../../utils/auth'
import { useGetGameFromUrl } from '../../utils/useGetXFromUrl'
import { withApollo } from '../../utils/withApollo'
import Header from '../../components/Header'
import Wrapper from '../../components/Wrapper'
import InputField from '../../components/InputField'
import { useUpdateGameMutation } from '../../generated/graphql'

function EditGame() {
	const router = useRouter()
	const user = getUser()
	const [update] = useUpdateGameMutation()
	if (!user) {
		return <NotAuthenticated />
	}
	const game = useGetGameFromUrl().data?.game
	if (!game) {
		return <p>Loading...</p>
	}
	return (
		<>
			<Header />
			{!user.isAuthenticated ? (
				<NotAuthenticated />
			) : (
				<>
					<Wrapper variant="medium">
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
								const response = await update({
									variables: {
										data: {
											name: { set: values.name },
											category: { set: values.category },
											description: {
												set: values.description,
											},
											developer: {
												set: values.developer,
											},
											price: { set: values.price },
											releaseDate: {
												set: values.releaseDate,
											},
											image: values.image,
										},
										where: {
											id: game.id,
										},
									},
								})
								if (response.data?.updateGame?.id === game.id) {
									router.push('/')
								} else {
									return (
										<Wrapper variant={'small'}>
											<Heading>
												Something went wrong
											</Heading>
											<Button
												onClick={() =>
													window.location.reload()
												}
											>
												wanna try again?
											</Button>
										</Wrapper>
									)
								}
							}}
						>
							{({ isSubmitting }) => (
								<Form>
									<Heading>Update Game: {game.name}</Heading>
									<InputField
										label="Name"
										name="name"
										placeholder={game.name}
									/>
									<InputField
										label="Category"
										name="category"
										placeholder={game.category}
									/>
									<InputField
										label="Description"
										name="description"
										placeholder={game.description}
										isTextArea
									/>
									<InputField
										label="Developer"
										name="developer"
										placeholder={game.developer}
									/>
									<InputField
										label="Release Date"
										name="releaseDate"
										type="date"
									/>
									<InputField
										label="Price"
										name="price"
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
										Update
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

export default withApollo({ ssr: false })(EditGame)
