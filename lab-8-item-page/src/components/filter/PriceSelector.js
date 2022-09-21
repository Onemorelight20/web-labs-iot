import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export function PriceSelector() {
  const [price, setPrice] = React.useState();

  const handleChange = (event) => {
    setPrice(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="price-select-label">Price</InputLabel>
        <Select
          labelId="price-select-label"
          id="price-select-label"
          value={price}
          label="Price"
          onChange={handleChange}
        >
          <MenuItem value={[0, 100]}>0-100</MenuItem>
          <MenuItem value={[101, 1000]}>101-1000</MenuItem>
          <MenuItem value={[1001, 10000]}>1001-10000</MenuItem>
          <MenuItem value={[10001, 1000000]}>10001-1000000</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
