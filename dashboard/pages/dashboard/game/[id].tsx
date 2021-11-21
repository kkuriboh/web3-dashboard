import { useRouter } from 'next/router'

import { getUser } from '../../../utils/auth'
import { withApollo } from '../../../utils/withApollo'
import NotAuthenticated from '../../../components/notAuthenticated'

function Game() {
	const user = getUser()
	const router = useRouter()
	if (!user) {
		return <NotAuthenticated />
	}
	return <div>adasda</div>
}

export default withApollo({ ssr: true })(Game)
