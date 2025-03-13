/** @format */

export type Location = {
    Key: string
    Type: string
    LocalizedName: string
    Country: { ID: string; LocalizedName: string }
    AdministrativeArea: { ID: string; LocalizedName: string }
}

export type WeatherDay = {
    Weekday: string
    Date: string
    EpochDate?: number
    Temperature: {
        Minimum: Temperature
        Maximum: Temperature
    }
    Day: {
        Icon: number
        IconPhrase?: string
        HasPrecipitation?: boolean
        PrecipitationType?: string
        PrecipitationIntensity?: string
        PrecipitationProbability?: number
    }
    Night: {
        Icon?: number
        IconPhrase?: string
        HasPrecipitation?: boolean
        PrecipitationType?: string
        PrecipitationIntensity?: string
        PrecipitationProbability?: number
    }
}

export type WeatherHour = {
    DateTime: string
    EpochDateTime?: number
    WeatherIcon: number
    IconPhrase?: string
    HasPrecipitation?: boolean
    IsDaylight?: boolean
    Temperature: Temperature
    PrecipitationProbability?: number
    MobileLink?: string
    Link?: string
}

export type WeatherCurrent = {
    LocalObservationDateTime: string
    EpochTime?: number
    WeatherText?: string
    WeatherIcon: number
    HasPrecipitation?: boolean
    PrecipitationType?: string
    IsDayTime?: boolean
    Temperature: {
        Metric: Temperature
        Imperial?: Temperature
    }
    MobileLink?: string
    Link?: string
}

type Temperature = {
    Value: number
    Unit: string
    UnitType: number
}
