import React from "react";
import Select from "./Select";
import "tailwindcss/dist/tailwind.css";

export const Basic = () => {
  return (
    <div className="flex items-center space-x-5">
      <Select
        onSelect={(value) => alert(value)}
        options={[
          { name: "Wade Cooper" },
          { name: "Arlene Mccoy" },
          { name: "Devon Webb" },
          { name: "Tom Cook" },
          { name: "Tanya Fox" },
          { name: "Hellen Schmidt" },
        ]}
      />
    </div>
  );
};
