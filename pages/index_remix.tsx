/** @format */
import axios, { AxiosResponse } from 'axios'
import { useState } from 'react'

// import WeatherService from '../services/weather.service'
// import http from '../http-common'

import { WeatherCurrent, Location, WeatherHour, WeatherDay } from './types'

// primary background color: gray-700
// primary text color: gray-200
// secondary background color: gray-600

function getHourFromDate(date: string) {
    const hour = new Date(date).getHours()
    if (hour === 0) {
        return '12am'
    } else if (hour < 12) {
        return `${hour}am`
    } else if (hour === 12) {
        return '12pm'
    } else {
        return `${hour - 12}pm`
    }
}

function getWeekdayFromDate(date: string): string {
    const weekday = new Date(date).getDay()
    switch (weekday) {
        case 0:
            return 'Sun'
        case 1:
            return 'Mon'
        case 2:
            return 'Tue'
        case 3:
            return 'Wed'
        case 4:
            return 'Thu'
        case 5:
            return 'Fri'
        case 6:
            return 'Sat'
        default:
            return '???'
    }
}

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

export default function IndexRemix() {
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
    const [hourlyWeather, setHourlyWeather] = useState<WeatherHour[]>([])
    const [dailyWeather, setDailyWeather] = useState<WeatherDay[]>([])

    const [locationInput, setLocationInput] = useState<string>('')

    const getLocation = async () => {
        const options = {
            method: 'GET',
            url: 'https://dataservice.accuweather.com/locations/v1/cities/autocomplete',
            params: {
                apikey: 'zFCZuhthsAW0V2YMisJwFqGGB1KLoAva',
                q: locationInput,
                language: 'en-CA',
            },
        } as GetLocationProps

        return await axios
            .get<GetLocationProps, AxiosResponse<Location[]>>(options.url, {
                params: options.params,
            })
            .then(response => {
                if (response.data.length <= 0) throw new Error('No locations found')
                return response.data[0]
            })
            .catch(error => {
                throw new Error(error.message)
            })
    }

    const getCurrentWeather = async (locationid: string) => {
        if (!locationid) throw new Error('No location selected')

        const params = {
            apikey: 'zFCZuhthsAW0V2YMisJwFqGGB1KLoAva',
            language: 'en-CA',
        }

        const url = `https://dataservice.accuweather.com/currentconditions/v1/${locationid}`

        return await axios
            .get<{ params: { apikey: string; language: string } }, AxiosResponse<WeatherCurrent[]>>(
                url,
                { params },
            )
            .then(response => {
                return response.data[0]
            })
            .catch(error => {
                throw new Error(error.message)
            })
    }

    const getHourlyWeather = async (locationid: string) => {
        if (!locationid) throw new Error('No location selected')

        const params = {
            apikey: 'zFCZuhthsAW0V2YMisJwFqGGB1KLoAva',
            language: 'en-CA',
            metric: true,
        }

        const url = `https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${locationid}`

        return await axios
            .get<{ params: { apikey: string; language: string } }, AxiosResponse<WeatherHour[]>>(
                url,
                {
                    params,
                },
            )
            .then(response => {
                return response.data
            })
            .catch(error => {
                throw new Error(error.message)
            })
    }

    const getDailyWeather = async (locationid: string) => {
        if (!locationid) throw new Error('No location selected')

        const params = {
            apikey: 'zFCZuhthsAW0V2YMisJwFqGGB1KLoAva',
            language: 'en-CA',
            metric: true,
        }

        const url = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationid}`

        return await axios
            .get<
                { params: { apikey: string; language: string } },
                AxiosResponse<{ DailyForecasts: WeatherDay[] }>
            >(url, {
                params,
            })
            .then(response => {
                return response.data.DailyForecasts
            })
            .catch(error => {
                throw new Error(error.message)
            })
    }

    const onClickHandler = async () => {
        // TODO: change this function to use the weather service
        // const { locations, errors } = await WeatherService.getLocationKey('ottawa')
        try {
            const locationData = await getLocation()
            setLocation(locationData)

            getCurrentWeather(locationData.Key).then(currWeather => {
                setCurrentWeather(currWeather)
            })

            getHourlyWeather(locationData.Key).then(hourlyWeather => {
                setHourlyWeather(hourlyWeather)
            })

            getDailyWeather(locationData.Key).then(dailyWeather => {
                dailyWeather = dailyWeather.map(day => {
                    day.Weekday = getWeekdayFromDate(day.Date)
                    return day
                })
                setDailyWeather(dailyWeather)
            })
        } catch (error) {
            console.error(error)
        }
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
                            {hourlyWeather
                                .filter((_, index) => !(index % 2))
                                .map((weather: WeatherHour, index: number) => (
                                    <div className='' key={index}>
                                        <WeatherCard
                                            text={getHourFromDate(weather.DateTime)}
                                            temperature={weather.Temperature.Value}
                                        />
                                    </div>
                                ))}
                        </div>

                        <div className='mx-auto flex gap-x-3'>
                            {dailyWeather.map((weather: WeatherDay, index: number) => (
                                <div className='' key={index}>
                                    <WeatherCard
                                        text={
                                            index === 0
                                                ? 'Today'
                                                : index === 1
                                                ? 'Tomorrow'
                                                : `${weather.Weekday}`
                                        }
                                        temperature={weather.Temperature.Maximum.Value}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}