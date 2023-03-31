import * as React from "react";
import { arrowLeftFill, arrowRightFill } from "../assets";

const CustomLeftArrow = ({ onClick }) => (
  <div className="custom-left-arrow" onClick={() => onClick()}>
    <img src={arrowLeftFill} alt="arrow left" className="w-[35px] h-[35px]" />
  </div>
);
const CustomRightArrow = ({ onClick }) => {
  return <div className="custom-right-arrow" onClick={() => onClick()}><img src={arrowRightFill} alt="arrow right" className="w-[35px] h-[35px]" /></div>
};

const CustomButtonGroup = ({ next, previous, goToSlide, carouselState }) => {
  const { totalItems, currentSlide } = carouselState;
  return (
    <div className="custom-button-group">
      <div>Current slide is {currentSlide}</div>
      <button onClick={() => previous()}>Previous slide</button>
      <button onClick={() => next()}>Next slide</button>
      <button
        onClick={() => goToSlide(Math.floor(Math.random() * totalItems + 1))}
      >
        Go to a random slide
      </button>
    </div>
  );
};
const CustomButtonGroupAsArrows = ({ next, previous }) => {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h4>These buttons can be positioned anywhere you want on the screen</h4>
      <button onClick={previous}>Prev</button>
      <button onClick={next}>Next</button>
    </div>
  );
};

export {
  CustomLeftArrow,
  CustomRightArrow,
  CustomButtonGroup,
  CustomButtonGroupAsArrows,
};