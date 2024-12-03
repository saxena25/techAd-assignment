//react icons
import { CiSearch } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import { BsChatSquareText } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

import "./Navbar.css";


function Navbar() {
  return (
    <>
      <div className="navbar-wrapper">
        <div className="navbar">
            <div className="nav-left-box">
                <h2>SimpliTrain</h2>
                <div className="nav-search-box">
                    <input type="text" placeholder="What would you like to learn?" className="nav-search" />
                    <CiSearch className="search-icon" />
                </div>
            </div>
            <div className="nav-right-box">
                <div className="nav-home">
                    <IoHomeOutline className="home-icon" />
                    <p>Home</p>
                </div>
                <div className="nav-categories">
                    <TbGridDots className="categories-icon" />
                    <p>Categories</p>
                </div>
                <div className="nav-chat">
                    <BsChatSquareText className="chat-icon" />
                    <p>Chat</p>
                </div>
                <div className="nav-forum">
                    <IoPersonOutline className="forum-icon" />
                    <p>Forum</p>
                </div>
                <div className="nav-notification">
                    <FaRegBell className="notification-icon" />
                    <p>Notification</p>
                </div>
                <div className="menu">
                    <CgProfile className="profile-icon" />
                    <IoMenu className="menu-icon" />
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
