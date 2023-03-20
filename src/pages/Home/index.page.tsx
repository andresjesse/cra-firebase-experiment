import React from "react";
import { Routes } from "../Router";

export default function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <a href={Routes.LOGIN}>Login</a>
    </div>
  );
}
