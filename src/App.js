import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css'
import SideBar from "./components/sidebar";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <div className="m-16 rounded-5 bg-white shadow d-flex">
      <SideBar />
      <Dashboard/>
    </div>
  );
}

export default App;
