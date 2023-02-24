import React from "react";
import "./Lesson.css";

const LessonCard = (data) => {
  return (
    <div className="cards">
      <div className="img-div">
        <img src={data.image} alt="" className="img" />
      </div>
      <div className="name-div">
        <p className="p">Lesson Name : <span>{data.name}</span></p>
        <p className="p">Lesson Hour : <span className="span">{data.hour}</span></p>
      </div>
    </div>
  );
};

export default LessonCard;
