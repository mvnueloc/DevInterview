import React from "react";

const Preview = () => {
  return (
    <div className="flex justify-center">
      <img
        src="/images/preview.png"
        alt="Imagen de muestra de la aplicacion."
        className="w-5/6 lg:w-[550px] h-auto  rounded-xl border-2 border-gray-100/[0.5]"
      />
    </div>
  );
};

export default Preview;
