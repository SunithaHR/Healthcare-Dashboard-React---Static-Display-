import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.css';


function AppointmentCard({ title, icon, time, name, textColor, background}) {
    return (
        <div className={`rounded-4 p-2 px-3`} style={{backgroundColor:background}}>
            <div className="d-flex justify-content-between">
                <h6 className={`${textColor}`}>{title}</h6>
                <div>{icon}</div>
            </div>
            <div>
            <p className={`${textColor} fs-12 p-0`}>{time}</p>
            <p className={`${textColor} fs-12 p-0`}>{name !== '' ? name : ""}</p>
            </div>
        </div>
    )
}

export default AppointmentCard;