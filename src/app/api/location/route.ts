import { type NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  const q = searchParams.get('q')

  if (!q) {
    return Response.json({ name: 'No location provided' }, {status: 400})
  }

  const apikey = process.env.API_KEY
  if (!apikey) {
    return Response.json({ name: 'Internal error' }, {status: 500})
  }

  const list = await fetch(
    `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apikey}&language=en-CA&q=${q}`,
    {
      method: 'GET',
    }
  ).then(res => res.json())

  return Response.json(list, {status: 200})
}
