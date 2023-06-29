import { NextResponse } from "next/server"

export function GET(req: Request,res: Response) {
  const users = [
    {id: 1, name: 'Wellington'},
    {id: 2, name: 'Kamyla'},
    {id: 3, name: 'ZéTelo'},
    {id: 4, name: 'Danniel'}
  ]

  return NextResponse.json(users)
}

