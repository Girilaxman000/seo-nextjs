import React from "react";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata> {
  return {
    title: params.title,
    description: "dynamic routes",
  };
}

const about = () => {
  return (
    <div className="h-full text-center">
      <h1>This is about page</h1>
    </div>
  );
};

export default about;
