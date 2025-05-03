import React from "react";
import { useParams } from "react-router-dom";

const VerseDetail = () => {
  const { id } = useParams();

  return (
    <div className="container text-center mt-5">
      <h2>Verse ID: {id}</h2>
      {/* You can fetch and show full verse details here using the ID */}
    </div>
  );
};

export default VerseDetail;
