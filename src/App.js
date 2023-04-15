import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts";
import { AdminRouter, WebRouter } from "./routes";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AdminRouter />
        <WebRouter />
      </BrowserRouter>
    </AuthProvider>
  );
}
