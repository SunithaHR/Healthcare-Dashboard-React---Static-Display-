import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/calender.css';

const weekData = [
    {
        day: "Mon", date: 25, slots: ["10:00", "11:00", "12:00"]
    },
    {
        day: "Tues", date: 26, slots: ["08:00", "09:00", "10:00"]
    },
    {
        day: "Wed", date: 27, slots: ["12:00", "-", "13:00"]
    },
    {
        day: "Thurs", date: 28, slots: ["10:00", "11:00", "-"]
    },
    {
        day: "Fri", date: 29, slots: ["14:00", "-", "16:00"]
    },
    {
        day: "Sat", date: 30, slots: ["12:00", "14:00", "15:00"]
    },
    {
        day: "Sun", date: 31, slots: ["09:00", "10:00", "11:00"]
    }
]

function Calender() {

    const [selectedDay, setSelectedDay] = useState("Tues");
    const [selectedSlot, setSelectedSlot] = useState("09:00");

    const featuredSlots = [
        { day: "Thurs", time: "11:00" },
        { day: "Sat", time: "12:00" },
        { day: "Sun", time: "09:00" }
    ];

    const isFeaturedSlot = (day, time) => {
        return featuredSlots.some(slot => slot.day === day && slot.time === time);
    };


    return (
        <div >
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h5>October 2021</h5>
                <div className="arrows">
                    <span className="me-3">&#8592;</span>
                    <span>&#8594;</span>
                </div>
            </div>

            <div className="calendar-week">
                {weekData.map((dayItem) => (
                    <div key={dayItem.date} className={`calendar-day ${selectedDay === dayItem.day ? "active-day" : ""}`} onClick={() => setSelectedDay(dayItem.day)}>
                        <div className="text-center fw-bold">{dayItem.day}</div>
                        <div className="text-center mb-2">{dayItem.date}</div>
                        {dayItem.slots.map((slot) => (
                            <div
                                key={slot}
                                className={`slot 
  ${selectedDay === dayItem.day && selectedSlot === slot ? "selected-slot" : ""}
  ${isFeaturedSlot(dayItem.day, slot) ? "featured-slot" : ""}`}

                                onClick={() => {
                                    setSelectedDay(dayItem.day);
                                    setSelectedSlot(slot);
                                }}
                            >
                                {slot}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Calender;