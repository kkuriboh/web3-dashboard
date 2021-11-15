import { Response } from 'express'

export function sendRefreshToken(res: Response, token: string) {
	res.cookie('jidr', token, {
		expires: new Date(Date.now() + 60 * 60 * 24 * 7),
		httpOnly: true,
		path: '/refresh_token',
		sameSite: 'strict',
	})
}

export function sendAccessToken(res: Response, token: string) {
	res.cookie('jida', token, {
		expires: new Date(Date.now() + 60 * 60 * 24 * 7),
		httpOnly: true,
		path: '/refresh_token',
		sameSite: 'strict',
	})
}
