import React from "react";
import "./Footer.css"; // Assuming the styles are in Footer.css


const teamMembers = [
  {
    name: "Mannu Jha",
    role: "Project Manager",
    info: "Specialized in DataStructure and Algorithms",
    isHead: true,
    photo: "/Profile.png",
  },
  {
    name: "Sumit Kumar",
    role: "FullStack Developer",
    info: "Expert in Node.js and React.",
    isHead: false,
    photo: "/images/jane.jpg",
  },
  {
    name: "Vikas Kumar",
    role: "FullStack Developer",
    info: "Specialized in Node.js and Database",
    isHead: false,
    photo: "/Profile.png",
  },
  {
    name: "Yashika Solanki",
    role: "Designer",
    info: "Creates stunning user interfaces And Prentation",
    isHead: false,
    photo: "/images/alice.jpg",
  },
];

const Footer = ({ teamMembers }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="team-title">Meet Our Team</h2>
        <div className="team-list">
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
            
              <div className="member-info">
                <p className="member-name">{member.name}</p>
                <p className="member-role">
                  {member.role}{" "}
                  {member.isHead && <span className="head"> - Head</span>}
                </p>
                <p>{member.info}</p>
                {member.isHead && <div className="head-badge">Team Head</div>}
              </div>
            </div>
          ))}
        </div>
        <div className="footer-bottom">© 2024 Team. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
