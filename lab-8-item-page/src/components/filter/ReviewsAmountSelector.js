import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export function ReviewsAmountSelector() {
  const [reviewsAmount, setReviewsAmount] = React.useState();

  const handleChange = (event) => {
    setReviewsAmount(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="reviews-amount-select-label">Reviews</InputLabel>
        <Select
          labelId="reviews-amount-select-label"
          id="reviews-amount-select-label"
          value={reviewsAmount}
          label="Reviews"
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