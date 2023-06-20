import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div>
      Home
      <Link href="/about">About</Link>
    </div>
  );
};

export default HomePage;
