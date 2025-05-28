import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.css';
import { FaPlus } from "react-icons/fa6";
import AppointmentCard from "./appointmentCard";
import Calender from "./calender";


function AppointmentContent() {
    const todayAppointment = [
        { title: "Dentist", icon: "🦷", time: "09:00 - 11:00", name: "Dr. Cameron Williamson", textColor: "text-white", backgroundcolor: "#3734a9", width: "w-50" },
        { title: "Physiotherapy Appoinment", icon: "💪", time: "01:00 - 12:00", name: "Dr. Kevin Djones", textColor: "#7a77a5", backgroundcolor: "#dde2f9", width: "w-50" },
    ]

    const thursdayAppointment = [
        { title: "Health checkup complete", icon: "💉", time: "11:00 AM", textColor: "#7a77a5", backgroundcolor: "#dde2f9", width: "w-50" },
        { title: "Ophthalmologist", icon: "👁", time: "12:00 PM", textColor: "#7a77a5", backgroundcolor: "#dde2f9", width: "w-50" },
    ]

    const satAppointment = [
        { title: "Cardiologist", icon: "❤️", time: "12:00 AM", textColor: "#7a77a5", backgroundcolor: "#dde2f9", width: "w-30" },
        { title: "Neurologist", icon: "🧑🏾‍⚕️", time: "16:00 PM", textColor: "#7a77a5", backgroundcolor: "#dde2f9", width: "w-30" },
    ]

    return (
        <div className="bg-f6faff rounded-end-4">
            <div className="d-flex justify-content-end pt-4">
                <div className="bg-3936ad rounded-3 p-1 d-inline-flex">
                    &#128102;
                </div>
                <div className="bg-3936ad rounded-3 p-2 ms-2 d-inline-flex">
                    <FaPlus className="text-white" />
                </div>
            </div>

            {/* calender */}
            <Calender />

            {/* Appoinment */}
            <div className="row g-3 mx-2 mt-2">
                {todayAppointment.map((data, index) => (
                    <div key={index} className={`col-12 col-md-6 col-sm-4`}>
                        <AppointmentCard

                            title={data.title}
                            time={data.time}
                            name={data.name}
                            icon={data.icon}
                            textColor={data.textColor}
                            background={data.backgroundcolor}

                        />
                    </div>
                ))}
            </div>

            <div className="mt-1">
                <h4 className="mx-4">The Upcoming Schedule</h4>

                <div>
                    <h6 className="text-secondary mx-4">On Thursday</h6>
                    <div className="row g-3 mx-2 mt-2">
                        {thursdayAppointment.map((data, index) => (
                            <div key={index} className={`col-12 col-md-6 col-sm-4`}>
                                <AppointmentCard
                                    title={data.title}
                                    time={data.time}
                                    name={data.name}
                                    icon={data.icon}
                                    textColor={data.textColor}
                                    background={data.backgroundcolor}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h6 className="text-secondary mt-1 mx-4">On Saturday</h6>
                    <div className="row g-3 mx-2 mt-2 pb-3">
                        {satAppointment.map((data, index) => (
                            <div key={index} className={`col-md-4 col-sm-4`}>
                            <AppointmentCard
                                title={data.title}
                                time={data.time}
                                name={data.name}
                                icon={data.icon}
                                textColor={data.textColor}
                                background={data.backgroundcolor}
                            />
                            </div>
                        ))}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default AppointmentContent;