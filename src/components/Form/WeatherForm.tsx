import React, { ChangeEvent, useState } from 'react'
import { Input } from '../ui/input';
import { Button } from '../ui/button';

type Props = {
    type: number;
    onSubmit: (values: any) => void;
}

const WeatherForm = ({
    type,
    onSubmit
}: Props) => {
  const [formValues, setFormValues] = useState({});

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
          <Input placeholder="Miasto" name="city" onChange={handleChange} />

        {type == 2 && (
            <Input placeholder="Data" name="date" onChange={handleChange} />
        )}

        {type == 3 && (
            <Input
                type="number"
                placeholder="Ilośc dni"
                name="days"
                onChange={handleChange}
            />
        )}

        <Button type="submit" onClick={onSubmit}>Sprawdź</Button>
    </div>
  )
}

export default WeatherForm