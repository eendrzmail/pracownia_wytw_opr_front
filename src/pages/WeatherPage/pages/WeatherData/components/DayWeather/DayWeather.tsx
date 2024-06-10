import { Forecastday, IWeather } from '@/types/Weather'
import styles from '../style.module.css'

type Props = {
    data: Forecastday
}

const DayWeather = ({
    data
}: Props) => {
  return (
    <div className={styles.wrapper}>
        {data.date}
        <span> Temperatura: {data.day.avgtemp_c}°C<br/> </span>
        <span>{data.day.condition.code}</span>
        <span><img src={data.day.condition.icon} /></span>
        <span>Wiatr: {data.day.maxwind_kph} km/h</span>
        <span>humidity: {data.day.avghumidity}</span>
    </div>
  )
}

export default DayWeather