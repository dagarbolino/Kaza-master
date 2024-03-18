import React from 'react';


function TitleDetail({ data }) {


  return (

    <div className="title">
      <h2>{data.title}</h2>
      <p>{data.location}</p>
    </div>

  );


}




export default TitleDetail;
