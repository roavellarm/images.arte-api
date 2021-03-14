/* eslint-disable no-var */
/* eslint-disable import/no-mutable-exports */
import { Response } from 'express'
import { IUser } from 'interfaces'

export var user: IUser | null = null
export var res: Response | null = null

export function setCurrentUser(_currentUser: any, _response: Response | null) {
  user = _currentUser
  res = _response
}
