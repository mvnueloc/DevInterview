import React from "react";

const CardCategoria = (props) => {
  return (
    <div className={`w-5/6 lg:w-[388px] transition-opacity duration-200`}>
      <div
        className={`bg-gradient-to-b from-[#1FA7D2] to-[#295C82] text-white rounded-md px-6 py-8 cursor-pointer ${
          props.disabled ? "opacity-50 cursor-not-allowed" : ""
        }  hover:scale-105 transition duration-200`}
        onClick={!props.disabled ? props.onSelect : undefined}>
        <h2 className="text-xl lg:text-2xl font-semibold">{props.categoria}</h2>
        <p className="text-xs font-extralight mt-4">{props.enfoque} </p>
        <div className="mt-7 flex justify-end space-x-2">
          {props.icons.map((icon, index) => (
            <img
              key={index}
              src={`/src/components/icons/${props.categoria}/${icon}.png`}
              alt={icon}
              className="w-auto h-6 md:h-8"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardCategoria;