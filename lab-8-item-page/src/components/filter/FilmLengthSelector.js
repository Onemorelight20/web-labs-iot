import React, { useContext } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FiltersContext } from "../FiltersContextProvider";

export function FilmLengthSelector() {
  const [filtersData, setFiltersData] = useContext(FiltersContext);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setFiltersData((obj) => ({...obj, LENGTH_FILTER: newValue}));
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="film-length-select-label">Film length</InputLabel>
        <Select
          labelId="film-length-select-label"
          id="film-length-select-label"
          defaultValue=""
          value={filtersData.LENGTH_FILTER}
          label="Film length"
          onChange={handleChange}
        >
          <MenuItem value={0}>0-60 min</MenuItem>
          <MenuItem value={1}>61-120</MenuItem>
          <MenuItem value={2}>121-180</MenuItem>
          <MenuItem value={3}>180+</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
