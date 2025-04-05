import React, { useEffect, useState } from "react";
import { wallpapers } from "../utils/constants";

const ImageSlider = () => {
  const [activeImage, setActiveImage] = useState(0);

  const handleNextClick = () => {
    setActiveImage((activeImage + 1) % wallpapers.length);
  };

  const handlePrevClick = () => {
    setActiveImage(!activeImage ? wallpapers.length - 1 : activeImage - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextClick();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);

  return (
    <div className="flex justify-center">
      <button className="p-4 font-bold" onClick={handlePrevClick}>
        Prev
      </button>
      {wallpapers.map((url, i) => (
        <img
          key={url}
          src={url}
          className={
            "w-[700px] h-[500px] object-contain " +
            (activeImage === i ? "block" : "hidden")
          }
          alt="wallpaper"
        />
      ))}

      <button className="p-4 font-bold" onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
};

export default ImageSlider;
