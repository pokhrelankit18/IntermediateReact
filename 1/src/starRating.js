//Importing useState hook
import { useState } from "react";

//Styling Elements
const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

//Styling Elements
const StarContainerStyle = {
  display: "flex",
};

//Main fuction handeled by the StarRating component of star rating that accepts props that was passed to them from index.js file.
export default function StarRating({
  maxRating = 5,
  color = "#fcc419",
  size = 48,
  messages = [],
  defaultRating = 0,
}) {
  //Two states are declared one to set rating of the stars when clicked and one to set rating i.e. temporary rating when hovering the star buttons.
  //Both are set to zero as that is their initial rating

  const [rating, setRating] = useState(defaultRating<=maxRating ? defaultRating : 0);
  const [temprating, setTempRating] = useState(0);

  //Handle Rating function set the rating setRating state to the rating passed under the argument rating that it accepts and is being called in this same component
  function handleRating(rating) {
    setRating(rating);
  }

  //Styling Elements
  const textStyle = {
    lineHeight: "1",
    margin: "0 ",
    color,
    fontSize: `${size / 1.5}px`,
  };

  return (
    <div style={containerStyle}>
      <div style={StarContainerStyle}>
        {/* The main part of the code is this lines and lets study them throughtly
        1) Array.from will create an array with the length specified and then it accepts a function with two argument one is the initial element which in this case is _ and another is its index i.e "i".
        3) The function will run to its every index i.e finally to maxrating which was passed to if as a props and execute the action specified into the function and here we are just print our component n number of time.
        4) Easy Example
            Create an array with a mapping function
        const arrMapped = Array.from({ length: 5 }, (_, index) => index * 2);
        console.log(arrMapped); // Output: [0, 2, 4, 6, 8] 
        5) Now here is star component and let's study its feature 
        i) Key props is being passed to its function that will just number the times the component will iterate
        ii) onRate props is passing the handleRating function which is passing i+1 argument that will be stored in rating variable in above function but we are not specifing when will onRate works and for now we know is onRate is capable of changing the rating of the stars.
        full is a varible that will check both rating and temprating varibles and give us respective value of them as a boolean. First it checks the variable temprating if it has falsy value or not if it has falsy value then it will set the full as the boolean by checking the rating varible being greater than or equal to the item clicked and do same for temprating if not zero.
        onHoverIn and onHoverOut are two props that will set the varible of state TempRating to the value as the index of the array i.e Star component as the mouse goes by that and again set that index to zero when passed out to it.
        */}

        {Array.from({ length: maxRating }, (_, i) => (
          <span>
            <Star
              key={i}
              onRate={() => handleRating(i + 1)}
              full={temprating ? temprating >= i + 1 : rating >= i + 1}
              onHoverIn={() => setTempRating(i + 1)}
              onHoverOut={() => setTempRating(0)}
              color={color}
              size={size}
            />
          </span>
        ))}
      </div>
      {/* This paragraph tag will just display initial rating when clicked or the rating when hoverd and "" empty string when both are false */}
      <p style={textStyle}>
        {messages.length === maxRating
          ? messages[temprating ? temprating - 1 : rating - 1 || ""]
          : temprating || rating || ""}
        {/* Why rating-1? 
      Because when displaying the message we took them as and array so to access array value we need to start with index zero but however we just changed that value to i+1 so we need to decrease it by one.  */}
      </p>
    </div>
  );
}

//This is called inside the main component that accepts four props
// onRate is a function that till now can handle the state of rating but don't know when to execute so we prescriped that it should work onclick so on onRate will work each time the element is clicked for each star and onMouseEnter and onMouseLeave are two event listener that will get triggered each time the mouse passes one star element and leave that star element
// full will now just give us the boolean in which the both state varible are in at the moment and display full or empty star based on the index we are hoving our mouse .
function Star({ onRate, full, onHoverIn, onHoverOut, color, size }) {
  //Styling Elements
  const starStyle = {
    width: `${size}px`,
    height: `${size}px`,
    display: "block",
    cursor: "pointer",
  };
  return (
    <span
      role="button"
      style={starStyle}
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={color}
          stroke={color}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      )}
    </span>
  );
}
