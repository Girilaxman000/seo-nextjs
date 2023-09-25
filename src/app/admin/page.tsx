import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  robots: {
    index: false,
    nocache: true,
  },
};
const admin = () => {
  return <div>admin</div>;
};

export default admin;
