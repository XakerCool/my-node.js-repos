import { users } from './auth.controller.js'

export const usersListController = (req, res) => {
  return res.json({ users })
}