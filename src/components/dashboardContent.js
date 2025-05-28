import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.css';
import '../styles/mediaquery.css';
import { IoSearch } from "react-icons/io5";
import { IoNotificationsSharp } from "react-icons/io5";
import Muscular from '../assets/muscular-system.png';
import { GiLeg } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import Card from "./imagecard";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Lungs from '../assets/lung-card.png'
import Teeth from '../assets/tooth.png';
import Bone from '../assets/bone.png';
import { FaArrowRightLong } from "react-icons/fa6";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    {
        day: "Mon",
        appt1: 20,
        appt2: 35,
        appt3: 10,
    },
    {
        day: "Tues",
        appt1: 30,
        appt2: 25,
        appt3: 15,
    },
    {
        day: "Wed",
        appt1: 18,
        appt2: 22,
        appt3: 8,
    },
    {
        day: "Thurs",
        appt1: 25,
        appt2: 20,
        appt3: 12,
    },
    {
        day: "Fri",
        appt1: 40,
        appt2: 30,
        appt3: 18,
    },
    {
        day: "Sat",
        appt1: 28,
        appt2: 20,
        appt3: 14,
    },
    {
        day: "Sun",
        appt1: 22,
        appt2: 26,
        appt3: 10,
    },
];


function DashboardContent() {

    const card = [
        { image: Lungs, name: "Lungs", color: "danger" },
        { image: Teeth, name: "Teeth", color: "success" },
        { image: Bone, name: "Bone", color: "warning" },
    ]


    return (
        <div className="mt-4 mx-3 position-relative mw-50">
            <div>
                <div className="pos-abs-left">
                    <IoSearch />
                </div>
                <input type="search" placeholder="Search" className="form-control border border-2 rounded p-1 ps-2rem w-100" />
                <div className="pos-abs-right">
                    <IoNotificationsSharp className="icon-3835a0" />
                </div>
            </div>

            <div className="my-4 d-flex justify-content-between">
                <h2 className="text-2d2f6c">Dashboard</h2>
                <select className="border-0 fs-12 text-979bc2">
                    <option>This Week</option>
                </select>
            </div>

            <div className="row gap-4">
                <div className="position-relative col-md-6">
                    <div className="d-flex pos-abs-bottom-285">
                        <div className="bg-05e0f1 rounded-3 p-2 d-inline-flex">
                            <GiLeg className="icon-6dc194 mt-1 me-1" /> <span className="text-0585be">Healthly Leg</span>
                        </div>
                        <div className="highlight-box ms-2"></div>
                    </div>
                    <div className="bg-f5faff rounded-3 p-3 px-5 ms-4rem">
                        <img src={Muscular} alt="muscular system" width={150} height={280} />
                    </div>
                    <div className="d-flex pos-abs-bottom-430">
                        <div className="highlight-box me-2"></div>
                        <div className="bg-3936ad rounded-3 p-2 d-inline-flex">
                            <FaHeart className="text-danger mt-1 me-1" /> <span className="text-white">Healthly Heart</span>
                        </div>

                    </div>
                </div>

                <div className="ms-5 mms-5 me-2 col-md-4" >
                    {card.map((data, index) => (
                        <div className={`bg-f5faff rounded-3 py-2 px-3 ${index !== 0 ? 'mt-2' : ""}`}>
                            <div key={index}>
                                <div className="d-flex">
                                    <img src={data.image} width={30} height={30} />
                                    <h6 className="ms-2">{data.name}</h6>
                                </div>
                                <div className="mt-2">
                                    <p className="fs-12 text-secondary">Date : 26 Oct 2021</p>
                                    <ProgressBar now={60} variant={data.color} className="h-10px" />
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="border-0 fs-12 text-979bc2 text-end">Details <FaArrowRightLong /></div>
                </div>
            </div>

            <div className="bg-f5faff rounded-3 mt-2 mb-2 p-3">
                <div className="d-flex justify-content-between">
                    <h6 className="text-2d2f6c">Activity</h6>
                    <span className="fs-12 text-secondary">3 appointment on this week</span>
                </div>
                <ResponsiveContainer height={150}>
                    <BarChart data={data} barGap={4}>
                        <CartesianGrid vertical={false} strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis hide />
                        <Tooltip />
                        <Bar dataKey="appt1" fill="#05e0f1" barSize={6} radius={3} />
                        <Bar dataKey="appt2" fill="#6c63ff" barSize={6} radius={3} />
                        <Bar dataKey="appt3" fill="#d3d3d3" barSize={6} radius={3} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default DashboardContent