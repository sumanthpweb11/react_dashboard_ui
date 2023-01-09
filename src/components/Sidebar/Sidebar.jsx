import React, { useState } from "react";
import "./Sidebar.css";
import { RxVercelLogo } from "react-icons/rx";
import { sidebarData } from "../../data/data";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpaned] = useState(true);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };
  return (
    <>
      <div
        className="bars"
        // style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpaned(!expanded)}
      >
        <UilBars />
      </div>
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        {/*LOGO */}
        <div className="logo">
          <RxVercelLogo />
          <span>TL</span>
        </div>

        {/* MENU */}
        <div className="menu">
          {sidebarData.map((sd, index) => {
            return (
              <div
                key={index}
                className={selected === index ? "menuItem active" : "menuItem"}
                onClick={() => setSelected(index)}
              >
                <sd.icon />
                <span>{sd.heading}</span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
