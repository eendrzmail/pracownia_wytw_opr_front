import { IWeather } from '@/types/Weather'
import styles from '../style.module.css'

type Props = {
    data: IWeather['current']
}

const CurrentWeather = ({data}: Props) => {
  return (
    <div className={styles.wrapper}>
        <span>Dzisiaj</span>
        <span> Temperatura: {data.temp_c}°C<br/> </span>
        <span>Odczuwalna: {data.feelslike_c.toString()}</span>
        <span>{data.condition.text}</span>
        <span><img src={data.condition.icon} /></span>
        <span>Wiatr: {data.wind_kph} km/h</span>
        <span>humidity: {data.humidity}</span>
    </div>
  )
}

export default CurrentWeather