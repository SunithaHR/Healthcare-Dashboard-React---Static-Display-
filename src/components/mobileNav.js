import React, { useState, useEffect } from "react";
import { FaBars, FaSignOutAlt, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./styles/MobileNavbar.css";
import { CgProfile } from "react-icons/cg";
import { selectEmail } from "./features/user/userSlice";
import { useSelector } from "react-redux";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import companylogo from "./img/Fortune_Logo__Gold__10.12.23_page-0001-removebg.png";

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { MdDashboard } from "react-icons/md";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { FaCalendarAlt } from "react-icons/fa";
import { FiPlusSquare } from "react-icons/fi";
import { MdOutlineTimeline } from "react-icons/md";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { IoSettings } from "react-icons/io5";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const email = useSelector(selectEmail);
  const [employeeData, setEmployeeData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://app.fortuneone.in/api/get_employee_data.php",
          {
            company_mail: email,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.data.success) {
          setEmployeeData(response.data.employee);
        } else {
          setError(response.data.message || "Failed to fetch employee data");
        }
      } catch (error) {
        setError("Failed to fetch employee data");
      }
    };

    if (email) {
      fetchData();
    }
  }, [email]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="d-flex pb-2">
      <div className={`mobile-navbar ${isOpen ? "open" : ""} `}>
        <div className="d-flex align-items-center justify-content-between">
          <div className="menu-toggle" onClick={toggleSidebar}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        <div className={`sidebar ${isOpen ? "open" : ""}`}>
          <div className="menu-items">
            {menuItem.map((item, index) => (
              <div key={index}>
                {item.action ? (
                  <div
                    className="link"
                    onClick={() => {
                      item.action();
                      handleMenuItemClick();
                    }}
                  >
                    <div className="icon-class fs-16">{item.icon}</div>
                    <div>{item.name}</div>
                  </div>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? "link fs-16 active" : "link fs-16"
                    }
                    onClick={handleMenuItemClick}
                  >
                    <div className="icon-class">{item.icon}</div>
                    <div>{item.name}</div>
                  </NavLink>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;