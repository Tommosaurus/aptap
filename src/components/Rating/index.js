import React from "react";
import ReactStars from "react-rating-stars-component";



export default function Rating({value}) {

    const data = {
        size: 30,
        color: "blue",
        value: {value},
        edit: false,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
      };

  return (
    <div className="App">
            <ReactStars {...data} />
      
    </div>
  );
}
