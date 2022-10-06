import React from "react";
import { ThreeDots } from "react-loader-spinner";

export default function() {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#2E3B55"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
}
