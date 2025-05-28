import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.css';
import DashboardContent from "./dashboardContent";
import AppointmentContent from "./appontmentContent";

function Dashboard() {
    return (
        <div className="container">
  <div class="row align-items-start">
    <div class="col">
      <DashboardContent />
    </div>
    <div class="col">
 <AppointmentContent/>
    </div>
    </div>
    </div>
    )
}

export default Dashboard