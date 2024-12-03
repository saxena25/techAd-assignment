import "./Background.css";
import { VscEdit } from "react-icons/vsc";
import { HiUserCircle } from "react-icons/hi";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { BsBank } from "react-icons/bs";

function Background() {
  return (
    <>
      <div className="background-wrapper">
        <div className="background">
          <div className="bg-top-box">
            <div className="edit-box">
              <VscEdit className="bg-edit-btn" />
            </div>
          </div>
          <div className="bg-lower-box">
            <div className="profile-card">
              <div className="pp-head">
                <HiUserCircle className="profile-card-icon" />
                <h3>Rakesh Raushan</h3>
              </div>
              <div className="profile-card-btn">
                {/* <RiCircleFill /> */}
                <p>Profile</p>
              </div>
              <div className="profile-card-education-btn">
                {/* <RiCircleFill /> */}
                <p>Education</p>
              </div>
              <div className="profile-card-work-btn">
                {/* <RiCircleFill /> */}
                <p>Work Experience</p>
              </div>
            </div>

            <div className="profile">
              <h3>Profile</h3>

              <div className="profile-info-card">
                <div className="personal-info">
                  <div className="personal-info-edit">
                    <p>Edit</p>
                    <VscEdit className="personal-info-edit-btn" />
                  </div>

                  <h3>Personal Information</h3>
                  <div className="first-name">
                    <p>FIRST NAME</p>
                    <p>
                      <strong>Rohan</strong>
                    </p>
                  </div>
                  <div className="last-name">
                    <p>LAST NAME</p>
                    <p>
                      <strong>Rakesh</strong>
                    </p>
                  </div>
                  <div className="age">
                    <p>AGE</p>
                    <p>
                      <strong>105</strong>
                    </p>
                  </div>
                  <div className="gender">
                    <p>GENDER</p>
                    <p>
                      <strong>Male</strong>
                    </p>
                  </div>
                  <div className="address">
                    <p>ADDRESS</p>
                    <p>
                      <strong>Mansarovar Park, Shahdara, Delhi 110032</strong>
                    </p>
                  </div>
                </div>

                <div className="contact-info">
                  <h3>Contact Information</h3>

                  <div className="email">
                    <p>EMAIL</p>
                    <p>
                      <strong>Rakeshkumar420@gmail.com</strong>
                    </p>
                  </div>
                  <div className="phone">
                    <p>PHONE NUMBER</p>
                    <p>
                      <strong>+91 9999999999</strong>
                    </p>
                  </div>
                </div>

                <div className="bio">
                  <h3>Bio</h3>
                  <div className="bio-edit-box">
                    <p>Edit</p>
                    <VscEdit className="bio-edit-btn" />
                  </div>
                  <p>
                    I&#39;m a recent graduate with a passion for data. I&#39;m
                    eager to learn Full Stack Web Development techniques and
                    build a strong foundation in this exciting field. I&#39;m
                    excited to explore the courses offered on Simplitrain and
                    gain the necessary skills to kickstart my Developer career.
                  </p>
                </div>

                <div className="language">
                  <h3>Preferred Language</h3>
                  <div className="language-edit-box">
                    <p>Edit</p>
                    <VscEdit className="language-edit-btn" />
                  </div>
                  <div className="select-language">
                    <p>English</p>
                    <p>Hindi</p>
                  </div>
                </div>

                <div className="topics boxes">
                  <h3>Interested Topics</h3>
                  <div className="topics-edit-box">
                    <p>Edit</p>
                    <VscEdit className="topics-edit-btn" />
                  </div>
                  <div className="all-topics">
                    <p>Web Development</p>
                    <p>Mobile Development</p>
                    <p>Programming Languages</p>
                    <p>Leadership</p>
                    <p>Career Development</p>
                    <p>Digital Marketing</p>
                  </div>
                </div>

                <div className="social boxes">
                  <h3>Social Media</h3>
                  <div className="social-edit-box">
                    <p>Edit</p>
                    <VscEdit className="social-edit-btn" />
                  </div>
                  <div className="social-all-icons">
                    <FaSquareInstagram
                      color="rgba(243, 5, 128, 0.8)"
                      className="instagram-social icons"
                    />
                    <FaXTwitter className="twitter-social icons" />
                    <FaGoogle className="google-social icons" />
                  </div>
                </div>
              </div>
            </div>

            <div className="education-wrapper">
              <div className="education-head head-box">
                <h3>Education</h3>
                <button>ADD</button>
              </div>
              <div className="education">

                <div className="education-card">
                  <div className="education-edit-box">
                    <p>Edit</p>
                    <VscEdit className="topics-edit-btn" />
                  </div>
                  <BsBank className="education-icon" />
                  <div className="education-info">
                    <h4>
                      <b>IASE University</b>
                    </h4>
                    <p>Diploma In Computer Science</p>
                    <p>2015-2018</p>
                  </div>
                </div>

                <div className="education-card">
                  <div className="education-edit-box">
                    <p>Edit</p>
                    <VscEdit className="topics-edit-btn" />
                  </div>
                  <BsBank className="education-icon" />
                  <div className="education-info">
                    <h4>
                      <b>Masai School</b>
                    </h4>
                    <p>Full Stack Web Development</p>
                    <p>2023-2024</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Background;
