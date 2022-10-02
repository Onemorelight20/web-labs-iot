import React, { useContext } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FiltersContext } from "../FiltersContextProvider";

export function ReviewsAmountSelector() {
  const [filtersData, setFiltersData] = useContext(FiltersContext);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setFiltersData((obj) => ({ ...obj, REVIEWS_FILTER: newValue }));
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="reviews-amount-select-label">Reviews</InputLabel>
        <Select
          labelId="reviews-amount-select-label"
          id="reviews-amount-select-label"
          defaultValue=""
          value={filtersData.REVIEWS_FILTER}
          label="Reviews"
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
