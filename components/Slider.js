import React, { useState } from "react";
const Slider = ({ images }) => {
  // takes in images as props
  const [index, setIndex] = useState(0); // create state to keep track of images index, set the default index to 0

  const slideRight = () => {
    setIndex((index + 1) % images.length); // increases index by 1
  };

  const slideLeft = () => {
    const nextIndex = index - 1;
    if (nextIndex < 0) {
      setIndex(images.length - 1); // returns last index of images array if index is less than 0
    } else {
      setIndex(nextIndex);
    }
  };

  return (
    images.length > 0 && (
      <div className="justify-self-start lg:justify-self-end flex flex-wrap">
        <div className="flex items-center mt-14 px-10 -ml-9 mb-16 lg:-mr-24">
          <img
            className="arrow relative pb-2 inline-block -mr-5 z-10 rotate-180"
            src="/images/arrow.svg"
            alt="logo"
            width="50"
            onClick={slideLeft}
          />

          <img
            className="relative picture2 rounded-full z-0 inline-block"
            src={images[index]}
            alt="main image"
          />
          <img
            className="arrow relative pb-2 inline-block -ml-5 z-10"
            src="/images/arrow.svg"
            alt="logo"
            width="50"
            onClick={slideRight}
          />
        </div>
      </div>
    )
  );
};

export default Slider;
