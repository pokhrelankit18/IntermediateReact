import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
import App from "./App copy";
// import StarRating from "./starRating";
const root = ReactDOM.createRoot(document.getElementById("root"));

// function Test()
// {
  
// const [MovieRating,onMovieRating] = useState(0)

//   return( 
//   <div>
//   <StarRating color="red" setMovieRating={onMovieRating}/>
//   <p>The movie was rated {MovieRating} stars.</p>
//   </div>
//   )
// }


root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      defaultRating={3}
      maxRating={5}
      color="red"
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating maxRating={10} color="green" defaultRating={3} />
    <StarRating maxRating={7} color="#ff8930" size="90" defaultRating={4} />
    <Test/> */}
  </React.StrictMode>
);
