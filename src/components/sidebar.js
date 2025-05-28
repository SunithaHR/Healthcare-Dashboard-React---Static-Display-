import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import { MdDashboard, MdOutlineTimeline } from "react-icons/md";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { FaCalendarAlt } from "react-icons/fa";
import { FiPlusSquare } from "react-icons/fi";
import { IoChatbubbleEllipses, IoSettings } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";

function SideBar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const generalNav = [
        { name: "Dashboard", icon: <MdDashboard /> },
        { name: "History", icon: <HiMiniArrowsUpDown /> },
        { name: "Calender", icon: <FaCalendarAlt /> },
        { name: "Appointments", icon: <FiPlusSquare /> },
        { name: "Statistics", icon: <MdOutlineTimeline /> }
    ];

    return (
        <>
            {/* Toggle Button for Mobile */}
            <Button
                variant="none"
                className="d-md-none position-fixed top-0 start-0 m-3 z-3"
                onClick={handleShow}
            >
                ☰
            </Button>

            {/* Sidebar for Desktop */}
            <div className="mx-3 bg-f6faff rounded-start-4 d-none d-md-block">
                <div className="p-4 bg-f6faff rounded-start-4">
                    <h3><span className="text-38d7e0">Health</span><span className="text-231a5c">care.</span></h3>
                    <div className="fs-6 text-secondary mt-5">General</div>
                    {generalNav.map((data, index) => (
                        <Navbar key={index}>
                            <Container>
                                <Navbar.Brand className={`fs-14 ${data.name === "Dashboard" ? "text-a0a2bb" : "text-secondary"}`}>
                                    <span>{data.icon}</span><span className="ms-2">{data.name}</span>
                                </Navbar.Brand>
                            </Container>
                        </Navbar>
                    ))}
                    <div className="fs-6 text-secondary mt-5">Tools</div>
                    <Navbar><Container><Navbar.Brand className="text-secondary fs-14"><IoChatbubbleEllipses className="me-2" />Chat</Navbar.Brand></Container></Navbar>
                    <Navbar><Container><Navbar.Brand className="text-secondary fs-14"><IoIosCall className="me-2" />Support</Navbar.Brand></Container></Navbar>
                    <Navbar className="pt-5"><Container><Navbar.Brand className="text-secondary fs-14"><IoSettings className="me-2" />Settings</Navbar.Brand></Container></Navbar>
                </div>
            </div>

            {/* Mobile Offcanvas Sidebar */}
            <Offcanvas show={show} onHide={handleClose} className="bg-f6faff">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <span className="text-38d7e0">Health</span><span className="text-231a5c">care.</span>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="fs-6 text-secondary">General</div>
                    {generalNav.map((data, index) => (
                        <Navbar key={index}>
                            <Container>
                                <Navbar.Brand className={`fs-14 ${data.name === "Dashboard" ? "text-a0a2bb" : "text-secondary"}`}>
                                    <span>{data.icon}</span><span className="ms-2">{data.name}</span>
                                </Navbar.Brand>
                            </Container>
                        </Navbar>
                    ))}
                    <div className="fs-6 text-secondary mt-4">Tools</div>
                    <Navbar><Container><Navbar.Brand className="text-secondary fs-14"><IoChatbubbleEllipses className="me-2" />Chat</Navbar.Brand></Container></Navbar>
                    <Navbar><Container><Navbar.Brand className="text-secondary fs-14"><IoIosCall className="me-2" />Support</Navbar.Brand></Container></Navbar>
                    <Navbar className="pt-4"><Container><Navbar.Brand className="text-secondary fs-14"><IoSettings className="me-2" />Settings</Navbar.Brand></Container></Navbar>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default SideBar;

