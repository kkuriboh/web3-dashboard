import { Response } from 'express'

export default function sendRefreshToken(res: Response, token: string) {
	res.cookie('jid', token, {
		httpOnly: true,
		path: '/refresh_token',
		sameSite: 'strict',
	})
}
