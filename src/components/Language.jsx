import { useState } from "react";
import { Image } from "react-bootstrap";

const Language = ({ name, img, options }) => {
  const [showImage, setShowImage] = useState(true);

  console.log(showImage);
  return (
    <div
      className="p-4 rounded-2 h-100 lang-card"
      onClick={() => setShowImage(!showImage)}
    >
      {showImage && (
        <div>
          <Image className="lang-logo" src={img} width="70%"></Image>
          <h3 className="display-6">{name}</h3>
        </div>
      )}

      {!showImage && (
        <ol className="h-100 d-flex flex-column justify-content-center">
          {options.map((item, i) => {
            return (
              <li key={i} className="h5 text-start">
                {item}
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
};

export default Language;
