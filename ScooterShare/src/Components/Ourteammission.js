import React from 'react';
import './../Styles/Ourteammission.css';

const teamMembers = [
  { title: 'CEO', name: 'Name Person', imgSrc: '/Assets/ourstorys2img1.jpg' },
  { title: 'CFO', name: 'Name Person', imgSrc: '/Assets/ourstorys2img2.jpg' },
  { title: 'CTO', name: 'Name Person', imgSrc: '/Assets/ourstorys2img3.jpg' },
  { title: 'Operational Manager', name: 'Name Person', imgSrc: '/Assets/ourstorys2img4.jpg' },
  { title: 'Marketing Officer', name: 'Name Person', imgSrc: '/Assets/ourstorys2img5.jpg' },
  { title: 'Distribution Officer', name: 'Name Person', imgSrc: '/Assets/ourstorys2img6.jpg' },
];

const Ourteam = () => {
  return (
    <div className="team-containerm">
      <h1>Our Team</h1>
      <p>The people behind scootershare</p>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.imgSrc} alt={`${member.title}`} />
            <div className="team-info">
              <h2>{member.title}</h2>
              <p>{member.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourteam;
