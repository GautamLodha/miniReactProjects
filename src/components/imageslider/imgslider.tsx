import { useState } from "react";

const ImageSlider = () => {
  const images = [
    "https://picsum.photos/id/10/300/200",
    "https://picsum.photos/id/20/300/200",
    "https://picsum.photos/id/30/300/200",
    "https://picsum.photos/id/40/300/200",
    "https://picsum.photos/id/50/300/200",
    "https://picsum.photos/id/60/300/200",
    "https://picsum.photos/id/70/300/200",
    "https://picsum.photos/id/80/300/200",
    "https://picsum.photos/id/90/300/200",
    "https://picsum.photos/id/100/300/200",
  ];
  const [slider, setImageSlider] = useState<number>(0);
  function handlePrev(){
    setImageSlider((prev)=>(prev - 1 + images.length)%images.length )
  }
  function handleNext(){
    setImageSlider((prev)=>(prev + 1)%images.length )
  }
  return (
    <div className="flex items-center w-screen h-screen gap-4">
      <div>
        <button onClick={handlePrev} className="px-4 py-2 text-white bg-gray-800 rounded">
          prev
        </button>
      </div>

      <div className="flex flex-row gap-4 overflow-hidden">
        {images && images.length > 0
          ? images.map((url, index) => (
             (index === slider) ? <img
                key={index}
                src={url}
                className="object-cover w-48 h-32 rounded"
              />  : null
            ))
          : null}
      </div>

      <div>
        <button onClick={handleNext} className="px-4 py-2 text-white bg-gray-800 rounded">
          next
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
