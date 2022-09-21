import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export function FilmLengthSelector() {
  const [filmLength, setFilmLength] = React.useState();

  const handleChange = (event) => {
    setFilmLength(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="film-length-select-label">Film length</InputLabel>
        <Select
          labelId="film-length-select-label"
          id="film-length-select-label"
          value={filmLength}
          label="Film length"
          onChange={handleChange}
        >
          <MenuItem value={[0, 60]}>0-60 min</MenuItem>
          <MenuItem value={[61, 120]}>61-120</MenuItem>
          <MenuItem value={[121, 180]}>121-180</MenuItem>
          <MenuItem value={[180, 1200]}>180+</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
