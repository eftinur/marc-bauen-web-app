import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/UserContext/UserContext";
import useTitle from "../../Hooks/useTitle";

const MyReviews = () => {
  useTitle('My review')
  const { user } = useContext(AuthContext);
  console.log(user);

  return <div className="min-h-screen">
    
  </div>;
};

export default MyReviews;
