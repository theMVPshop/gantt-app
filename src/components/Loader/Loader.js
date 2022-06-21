import axios from "axios";
import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader"
import "../Loader/Loader.css"


const url = "https://gantt-server.herokuapp.com/tasks/";

 const Loader = (props) => {
  
  

  useEffect(() => {
    console.log('this is loading', props.loading)
  }, [props.loading]);

    return (
      <div id="button" onClick={props.fetchData}>
    <ClipLoader className="loader" loading={props.loading} size={50} />
     </div>
   );
 };

export default Loader;
