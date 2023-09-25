import React from "react";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata> {
  return {
    title: params.title,
    alternates: {
      canonical: `https://seo-app.com/${params.title}`,
    },
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
