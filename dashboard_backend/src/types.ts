import { Response, Request } from 'express'
import { Session } from 'express-session'

export type MyContext = {
	req: Request & { session: Session }
	res: Response
	payload?: { userId: string }
}
