/** @format */
import axios, { AxiosResponse } from 'axios'
import { useState } from 'react'

// import WeatherService from '../services/weather.service'
// import http from '../http-common'

import { WeatherCurrent, Location, WeatherHour, WeatherDay } from './types'
import Icons, { SearchIcon } from '../components/icons'

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

function WeatherCard({
    text,
    temperature,
    icon,
}: {
    text: string
    temperature: number
    icon: number
}) {
    // TODO: change the text-[9px] to something better
    return (
        <div className='rounded-lg bg-gray-600 p-2 text-center text-xs font-semibold text-gray-200 shadow-md'>
            <p>{text}</p>
            <p className='flex justify-center py-3'>
                <Icons className='h-8 w-8 fill-gray-200' iconNumber={icon} />
            </p>
            <p>{temperature} °C</p>
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
            <div className='flex h-screen w-full flex-col justify-evenly overflow-hidden bg-gray-700'>
                <div className='absolute inset-x-0 top-7 flex px-10'>
                    <div className='delay-0 flex w-full flex-row items-center rounded-lg bg-gray-600 px-4 transition-all duration-500 focus-within:ring-2'>
                        <p className='mr-3'>
                            <SearchIcon className='fill-gray-200' />
                        </p>
                        <input
                            placeholder='Search city'
                            value={locationInput}
                            onChange={e => setLocationInput(e.target.value)}
                            onKeyDown={e => {
                                if (e.key === 'Enter') {
                                    e.preventDefault()
                                    onClickHandler()
                                }
                            }}
                            className='my-2 w-full border-none bg-transparent text-sm font-semibold text-gray-200 outline-none focus:outline-none'
                        />
                        <button
                            className='rounded bg-pink-500 px-3 py-0.5 align-top font-semibold text-gray-200'
                            onClick={onClickHandler}
                        >
                            Search
                        </button>
                    </div>
                </div>

                {location && (
                    <div className='mx-auto flex flex-col text-center text-gray-200'>
                        <div className='flex flex-row items-center'>
                            <p>
                                <Icons
                                    className='h-20 w-20 fill-gray-200'
                                    iconNumber={currentWeather.WeatherIcon}
                                />
                            </p>
                            <div className=''>
                                <p className='text-3xl font-bold'>Today</p>
                                <p className='text-xs font-semibold'>
                                    {new Date(currentWeather.LocalObservationDateTime)
                                        .toDateString()
                                        .replace(/(\w+)\s(\w+)\s(\w+)\s(\w+)/, '$1, $2 $3')}
                                </p>
                            </div>
                        </div>
                        <p className='text-6xl font-semibold'>
                            {currentWeather.Temperature.Metric.Value} °C
                        </p>
                        <p className='text-xs font-semibold'>
                            {location
                                ? `${location.LocalizedName}, ${location.AdministrativeArea.LocalizedName}`
                                : 'no location'}
                        </p>
                    </div>
                )}

                <div className='flex flex-col gap-y-8'>
                    <div className='mx-auto flex gap-x-2'>
                        {hourlyWeather
                            .filter((_, index) => !(index % 2))
                            .map((weather: WeatherHour, index: number) => (
                                <div className='' key={index}>
                                    <WeatherCard
                                        text={getHourFromDate(weather.DateTime)}
                                        temperature={weather.Temperature.Value}
                                        icon={weather.WeatherIcon}
                                    />
                                </div>
                            ))}
                    </div>

                    <div className='mx-auto flex gap-x-2'>
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
                                    icon={weather.Day.Icon}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
