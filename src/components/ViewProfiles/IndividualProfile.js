import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const IndividualProfile = ({SampleProfile}) => {
    console.log(SampleProfile)
    let { id } = useParams();
    let ShowProfile = SampleProfile.filter((profile)=>profile.id === id)
  return (
    <div>{ShowProfile.name}</div>
  )
}

export default IndividualProfile