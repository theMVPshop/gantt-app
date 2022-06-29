import axios from "axios";
import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader"
import "../Loader/Loader.css"


const url = "https://gantt-server.herokuapp.com/tasks/";

const Loader = (props) => {

  
  useEffect(() => {
    console.log('this is loading', props.loading)
  }, [props.loading]);

  let [color] = useState("#353144");

    return (
      <div className="spinnerHolder">
        <div id="button" onClick={props.fetchData} disabled={props.loading}>
          <ClipLoader className="loader" color={color} loading={props.loading} size={50}  />
        </div>
      </div>
   );
 };

export default Loader;
