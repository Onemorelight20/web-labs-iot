import React, { useContext } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FiltersContext } from "../FiltersContextProvider";

export function PriceSelector() {
  const [filtersData, setFiltersData] = useContext(FiltersContext);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setFiltersData((obj) => ({...obj, PRICE_FILTER: newValue}));
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="price-select-label">Price</InputLabel>
        <Select
          labelId="price-select-label"
          id="price-select-label"
          defaultValue=""
          value={filtersData.PRICE_FILTER}
          label="Price"
          onChange={handleChange}
        >
          <MenuItem value={0}>0-100</MenuItem>
          <MenuItem value={1}>101-1000</MenuItem>
          <MenuItem value={2}>1001-10000</MenuItem>
          <MenuItem value={3}>10001-1000000</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
