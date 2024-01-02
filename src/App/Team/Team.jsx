import React from "react";
import RecipeReviewCard from "../../Components/Card/Card";
import { partners } from "./PartnerList";
import "./Team.css";
import { keyManagementProfileList } from "./KeyManagementProfileList";

const Team = () => {
  return (
    <div id="team" className="team-list--wrapper">
      <div>
        <span className="title">Our Partners</span>
        <div className="team-list">
          {partners.map((partner) => {
            return <RecipeReviewCard partner={partner} />;
          })}
        </div>
      </div>
      <div>
        <span className="title">KEY MANAGEMENT TEAM PROFILES</span>
        <div className="team-list">
          {keyManagementProfileList.map((item) => {
            return <RecipeReviewCard partner={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
