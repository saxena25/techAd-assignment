import { IoHomeOutline } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import { BsChatSquareText } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

import "./Sidebar.css";

function Sidebar() {
  return (
    <>
      <div className="sidebar-wrapper">
        <div className="sidebar">
            <IoHomeOutline className="sidebar-home-icon" />
            <TbGridDots className="sidebar-categories-icon" />
            <BsChatSquareText className="sidebar-chat-icon" />
            <IoPersonOutline className="sidebar-forum-icon" />
            <FaRegBell className="sidebar-notification-icon" />
            <CgProfile className="sidebar-profile-icon" />
        </div>
      </div>
    </>
  )
}

export default Sidebar
