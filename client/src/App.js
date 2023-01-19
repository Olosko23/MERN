import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DataListing from "./pages/DataListing";
import DataDetail from "./pages/DataDetail";
import DataCreate from "./pages/DataCreate";
import DataEdit from "./pages/DataEdit";

function App() {
  return (
    <div className="">
      <h2>Olosko CRUD CRUD CRUD</h2>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DataListing />} />
          <Route path="/data/detail/:dataid" element={<DataDetail />} />
          <Route path="/data/create" element={<DataCreate />} />
          <Route path="/data/edit/:dataid" element={<DataEdit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
