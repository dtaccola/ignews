import { NextApiRequest, NextApiResponse } from "next"


export default (request: NextApiRequest, response: NextApiResponse) => {
  console.log(request.query)
  // const id = request.query

  const users = [
    { id: 1, name: 'Daniel'},
    { id: 2, name: 'Dani'},
    { id: 3, name: 'Dan'},
  ]

  return response.json(users)
}