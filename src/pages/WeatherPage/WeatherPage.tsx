import { Input } from "@/components/ui/input";
import styles from "./WeatherPage.module.css";
import {
  ChangeEvent,
  useCallback,
  useMemo,
  useState,
} from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { HttpClient } from "@/http/AxiosAbstract";
import DataLoader from "@/components/DataLoader/DataLoader";
import WeatherData from "./pages/WeatherData/WeatherData";

type Props = {};

const WeatherPage = (props: Props) => {
  const [mode, setMode] = useState(1);
  const [formValues, setFormValues] = useState({
    city: "",
    date: '',
    days: ''
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevState) => ({ ...prevState, [name]: value }));
  };

  // const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
  //     event.preventDefault()
  //     console.log(event)
  // },[])

  const queryFn = useMemo(
    () => {
        switch(mode) {
            case 1:
                return () => HttpClient.getCurrentWeather(formValues.city)
            case 2:
                return () => HttpClient.getFutureWeather(formValues.city, formValues.date);
            case 3:
                return () => HttpClient.getForecast(formValues.city, formValues.days);
            case 4:
                return () => HttpClient.getWeatherHistory(formValues.city, formValues.date);
            default: 
              return () => Promise.resolve()
        }
    },
    [formValues, mode]
  )

  const {data,refetch,...queryData} = useQuery({
    queryKey: [mode,queryFn, formValues],
    queryFn: queryFn,
    enabled: false,
  })

  const handleFetch = useCallback(
    () => {
      refetch()
    },
    [refetch]
  )

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <Tabs defaultValue="1">
          <TabsList className={styles.top}>
            <TabsTrigger value="1" onClick={() => setMode(1)}>
              Obecnie
            </TabsTrigger>
            <TabsTrigger value="2" onClick={() => setMode(2)}>
              Konkretna Data
            </TabsTrigger>
            <TabsTrigger value="3" onClick={() => setMode(3)}>
              Dni
            </TabsTrigger>
            <TabsTrigger value="4" onClick={() => setMode(4)}>
              Historia
            </TabsTrigger>
          </TabsList>

          <div className={styles.space}></div>

          <Input placeholder="Miasto" name="city" onChange={handleChange} />

          {/* <TabsContent className="w-[300px]" value="1"></TabsContent> */}

          <TabsContent  value="2">
            <Input placeholder="Data" name="date" onChange={handleChange} />
          </TabsContent>

          <TabsContent value="3">
            <Input
              type="number"
              placeholder="Ilośc dni"
              name="days"
              onChange={handleChange}
            />
          </TabsContent>

          <TabsContent  value="4">
            <Input placeholder="Data" name="date" onChange={handleChange} />
          </TabsContent>

        </Tabs>
            <Button type="submit" onClick={handleFetch}>Sprawdź</Button>
      </form>

      <div id="page" className={styles.page}>
        <DataLoader {...queryData} refetch={refetch}>
            <WeatherData data={data} key={mode}/>
        </DataLoader>
      </div>
    </div>
  );
};

export default WeatherPage;
