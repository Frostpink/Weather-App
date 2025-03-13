import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { q } = req.query

  if (!q) {
    return res.status(400).json({ name: 'No location provided' })
  }

  const apikey = process.env.API_KEY
  if (!apikey) {
    return res.status(500).json({ name: 'Internal error' })
  }

  const list = await fetch(
    `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apikey}&language=en-CA&q=${q}`,
    {
      method: 'GET',
    }
  ).then(res => res.json())

  res.status(200).json(list)
}
