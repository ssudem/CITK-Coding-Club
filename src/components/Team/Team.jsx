import { useState } from "react";
import Select from "react-dropdown-select";
import ProfileCard from "../ProfileCard/ProfileCard.jsx";
import "./team.css";

import team from "./teamdata.jsx"; // Import the team data
import personPlaceHolder from "../../assets/PlaceHolder/person-placeholder.avif";

function Team() {
  const [year, setYear] = useState("2024");

  const options = Object.keys(team).map((key) => ({
    value: key,
    label: key,
  }));

  return (
    <section className="team-section">
      <div className="container team-section-inner">
        <h1 data-aos="zoom-in-down" data-aos-duration="500">
          OUR AMAZING TEAM
        </h1>
        <p data-aos="zoom-out-down" data-aos-duration="800">
          We are a group of passionate individuals who are dedicated to
          collaborating and creating amazing things together. Our team is
          committed to continuous learning and growth, and we are always looking
          for new ways to improve our skills and knowledge.
        </p>
        <div className="dropdown-container">
          <span data-aos="zoom-in"> Year : </span>
          <Select
            className="dropdown"
            options={options}
            values={[{ value: year, label: year }]}
            placeholder={year}
            searchable={false}
            // onChange={(info) => console.log(info[0].value)}
            onChange={(info) => setYear(info[0].value)}
          />
        </div>

        <div className="team-container">
          {team[year]?.map((member, index) => (
            <ProfileCard
              key={member.name + index}
              image={member.image}
              name={member.name}
              title={member.title}
              socialmedia={member.socialmedia}
              personPlaceHolder={personPlaceHolder}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Team;
