import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { locationid } = req.query

  if (!locationid) {
    return res.status(400).json({ name: 'No location provided' })
  }

  const apikey = process.env.API_KEY
  if (!apikey) {
    return res.status(500).json({ name: 'Internal error' })
  }

  const data = await fetch(
    `https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${locationid}?apikey=${apikey}&language=en-CA&metric=true`,
    {
      method: 'GET',
    }
  ).then(res => res.json())

  res.status(200).json(data)
}
