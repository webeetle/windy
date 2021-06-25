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
          shadow="none"
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
          shadow="sm"
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
          shadow="md"
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
          shadow="lg"
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
          shadow="xl"
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
          shadow="xl"
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
