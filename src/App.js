import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserTable from "./Components/Table/Table";
import UserDetails from "./Components/UserDetails.js/Details";
function App() {
  return (
    <Routes>
      <Route path="/" element={<UserTable />} />
      <Route path="/user/:id" element={<UserDetails />} />
    </Routes>
  );
}

export default App;
