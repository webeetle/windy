import React from "react";
import Select from "./Select";
import "tailwindcss/dist/tailwind.css";

export const Basic = () => {
  return (
    <div className="flex items-center space-x-5">
      <div className="w-72">
        <Select
          color="white"
          rounded="none"
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
    </div>
  );
};

export const Rounded = () => {
  return (
    <div className="flex items-center space-x-5">
      <div className="w-48">
        <Select
          rounded="none"
          color="white"
          rounded="none"
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
      <div className="w-48">
        <Select
          color="blue"
          rounded="sm"
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
      <div className="w-48">
        <Select
          color="purple"
          rounded="md"
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
      <div className="w-48">
        <Select
          color="purple"
          rounded="lg"
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
      <div className="w-48">
        <Select
          color="pink"
          rounded="xl"
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
      <div className="w-48">
        <Select
          color="yellow"
          rounded="full"
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
    </div>
  );
};
