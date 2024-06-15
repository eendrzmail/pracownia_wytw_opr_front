import { IWeather } from '@/types/Weather'
import CurrentWeather from './components/CurrentWeather/CurrentWeather'
import DayWeather from './components/DayWeather/DayWeather'
import styles from './WeatherData.module.css'

type Props = {
    data?: IWeather | void
}

const WeatherData = ({
    data
}: Props) => {
  return (
    <>
        {!!data && (
            <div className={styles.wrapper}>
                {data.current && (
                    <CurrentWeather data={data.current} />
                )}

                {(data.forecast?.forecastday || []).map(day => (
                    <DayWeather data={day} key={day.date} />
                ))}
            </div>
        )}
    </>
  )
}

export default WeatherData