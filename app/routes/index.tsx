/** @format */
import axios, { AxiosResponse } from 'axios'
import { useState } from 'react'

// import WeatherService from '../services/weather.service'
// import http from '../http-common'

import { WeatherCurrent, Location } from './types'

// primary background color: gray-700
// primary text color: gray-200
// secondary background color: gray-600

function WeatherCard({ text, temperature }: { text: string; temperature: number }) {
    // TODO: change the text-[9px] to something better
    return (
        <div className='rounded-lg bg-gray-600 p-2 text-center text-xs font-semibold text-gray-200 shadow-md'>
            <p>{text}</p>
            <p className='py-3'>ICON</p>
            <p>{temperature} dC</p>
        </div>
    )
}

export default function Index() {
    type GetLocationProps = {
        method: string
        url: string
        params: { apikey: string; q: string; language: string }
    }

    const [currentWeather, setCurrentWeather] = useState<WeatherCurrent>({
        LocalObservationDateTime: '2022-04-18T00:00:00-04:00',
        WeatherIcon: 34,
        Temperature: {
            Metric: {
                Value: 1.2,
                Unit: 'C',
                UnitType: 17,
            },
        },
    })

    const [location, setLocation] = useState<Location | null>(null)

    const [locationInput, setLocationInput] = useState<string>('')

    const onClickHandler = async () => {
        // TODO: change this function to use the weather service
        // const { locations, errors } = await WeatherService.getLocationKey('ottawa')

        const options = {
            method: 'GET',
            url: 'http://dataservice.accuweather.com/locations/v1/cities/autocomplete',
            params: {
                apikey: '***REMOVED***',
                q: locationInput,
                language: 'en-CA',
            },
        } as GetLocationProps

        axios
            .get<GetLocationProps, AxiosResponse<Location[]>>(options.url, {
                params: options.params,
            })
            .then(response => {
                if (response.data.length <= 0) throw new Error('No locations found')
                setLocation(response.data[0])
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <>
            <div className='flex h-screen w-screen flex-col bg-gray-700'>
                <div className='flex justify-center px-10'>
                    <div className='delay-0 flex w-full flex-row items-center rounded-lg bg-gray-600 px-4 transition-all duration-500 focus-within:ring-2'>
                        <p className=''>S</p>
                        <input
                            placeholder='Search city'
                            value={locationInput}
                            onChange={e => setLocationInput(e.target.value)}
                            className='my-2 w-full border-none bg-transparent text-sm outline-none focus:outline-none'
                        />
                        <button className='' onClick={onClickHandler}>
                            *
                        </button>
                    </div>
                </div>

                <div className='flex flex-col items-center text-gray-200'>
                    <div className='flex flex-row items-center'>
                        <p>ICON</p>
                        <div className='text-center'>
                            <p className='text-3xl font-bold'>Today</p>
                            <p className='text-xs font-semibold'>
                                {new Date(currentWeather.LocalObservationDateTime)
                                    .toDateString()
                                    .replace(/(\w+)\s(\w+)\s(\w+)\s(\w+)/, '$1, $2 $3')}
                            </p>
                        </div>
                    </div>
                    <p className='text-6xl font-semibold'>
                        {currentWeather.Temperature.Metric.Value}
                    </p>
                    <p className='text-xs font-semibold'>
                        {location
                            ? `${location.LocalizedName}, ${location.AdministrativeArea.LocalizedName}`
                            : 'no location'}
                    </p>
                </div>

                <div>
                    <div className='flex flex-col  gap-y-6'>
                        <div className='mx-auto flex gap-x-3'>
                            {[...Array(5)].map((_, i) => (
                                <div className='' key={i}>
                                    <WeatherCard text='12 AM' temperature={26} />
                                </div>
                            ))}
                        </div>

                        <div className='mx-auto flex gap-x-3'>
                            {[...Array(4)].map((_, i) => (
                                <div className='' key={i}>
                                    <WeatherCard text='Tomorrow' temperature={26} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
