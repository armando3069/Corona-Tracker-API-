import "./App.css";
import axios from "axios";
import Card from "../src/components/cards/card";
//import Chart from '../src/components/Chart/chart';
import {
  Container,
  InputLabel,
  MenuItem,
  FormControl,
  Select
} from "@mui/material";
import React, { useState, useEffect } from "react";

function App() {
  const [date, setTemp] = useState([]);
  const [countries, setCountries] = useState("");

  useEffect(() => {
    axios
      .get(`https://covid19.mathdro.id/api/countries/${countries} `)
      .then((res) => {
        const obj = {
          confirm: res.data.confirmed.value,
          recuperat: res.data.recovered.value,
          morti: res.data.deaths.value,
          name: res.data.name
        };

        setTemp(obj);
      });
  });

  const handleChange = (event) => {
    const nval = event.target.value;
    setCountries(nval);
  };

  return (
    <div>
      <Container maxWidth="md">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Tara</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={countries}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={"moldova"}>Moldova</MenuItem>
            <MenuItem value={"romania"}>Romania</MenuItem>
            <MenuItem value={"usa"}> Usa</MenuItem>
            <MenuItem value={"ukraine"}>Ucrania</MenuItem>
            <MenuItem value={"italy"}>Italia</MenuItem>
            <MenuItem value={"germany"}>Germnia</MenuItem>
          </Select>
        </FormControl>
        <Card
          confirm={date.confirm}
          morti={date.morti}
          recuperat={date.recuperat}
        />
      </Container>
    </div>
  );
}

export default App;
