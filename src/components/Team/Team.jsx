import { useState } from "react";
import Select from "react-dropdown-select";
import ProfileCard from "../ProfileCard/ProfileCard.jsx";
import "./team.css";

import team from "./teamdata.jsx"; // Import the team data

function Team() {
  const [year, setYear] = useState("2023");

  return (
    <section className="container team-section">
      <h1>OUR AMAZING TEAM</h1>
      <p>
        We are a group of passionate individuals who are dedicated to
        collaborating and creating amazing things together. Our team is
        committed to continuous learning and growth, and we are always looking
        for new ways to improve our skills and knowledge.
      </p>
      <div className="dropdown-container">
        <span> Year : </span>
        <Select
          className="dropdown"
          options={[
            { value: "2023", label: "2023" },
            { value: "2024", label: "2024" },
            // { value: "2025", label: "2025" },
          ]}
          values={[{ value: "2023", label: "2023" }]}
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
          />
        ))}
      </div>
    </section>
  );
}
export default Team;
