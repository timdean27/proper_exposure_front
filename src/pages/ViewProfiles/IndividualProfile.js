import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const IndividualProfile = ({SampleProfile}) => {
    console.log(SampleProfile)
    const { id } = useParams()
    console.log(id)
    let showProfile = SampleProfile.find(profile=> profile.id === id)
    console.log("showProfile", showProfile.id)



    const loadedMarketing = () => {
      return (
        <div key={showProfile.id}>
          <p>{showProfile.name}</p>
        </div>
      );
    };
  
      const loadingMarketing = () => {
        return <h1>Loading.........</h1>;
      }

  return (
    <div>
    <h1>What What</h1>
    <p>{SampleProfile ? loadedMarketing() : loadingMarketing()}</p>
    </div>
  )
}

export default IndividualProfile