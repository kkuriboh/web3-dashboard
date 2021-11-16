import Image from 'next/image'
import styled from '@emotion/styled'
import Link from 'next/link'
import { getUser, logout } from '../utils/auth'

export default function Header() {
	const user = getUser()

	return (
		<Container>
			<Image src="/logo1.svg" width={100} height={70} alt="logo" />
			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>

				{!user.isAuthenticated ? (
					<>
						<li>
							<Link href="/signin">SignIn</Link>
						</li>
						<li>
							<Link href="/signup">SignUp</Link>
						</li>
					</>
				) : (
					<li onClick={() => logout()}>
						<Link href="/">Logout</Link>
					</li>
				)}
			</ul>
		</Container>
	)
}

const Container = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	ul {
		list-style: none;
		display: flex;
	}
	li {
		margin: 0 20px;
		color: #ff4499;
	}
`
