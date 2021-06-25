import React from "react";
import Select from "./Select";
import "tailwindcss/dist/tailwind.css";

export const Basic = () => {
  return (
    <div className="flex items-center space-x-5">
      <div className="w-72">
        <Select
          rounded="none"
          onSelect={({ value }) => alert(value)}
          options={[
            { label: "Wade Cooper", value: "Wade Cooper" },
            { label: "Arlene Mccoy", value: "Arlene Mccoy" },
            { label: "Devon Webb", value: "Devon Webb" },
            { label: "Tom Cook", value: "Tom Cook" },
            { label: "Tanya Fox", value: "Tanya Fox" },
            { label: "Hellen Schmidt", value: "Hellen Schmidt" },
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
          onSelect={({ value }) => alert(value)}
          options={[
            { label: "Wade Cooper", value: "Wade Cooper" },
            { label: "Arlene Mccoy", value: "Arlene Mccoy" },
            { label: "Devon Webb", value: "Devon Webb" },
            { label: "Tom Cook", value: "Tom Cook" },
            { label: "Tanya Fox", value: "Tanya Fox" },
            { label: "Hellen Schmidt", value: "Hellen Schmidt" },
          ]}
        />
      </div>
      <div className="w-48">
        <Select
          shadow="sm"
          color="blue"
          rounded="sm"
          onSelect={({ value }) => alert(value)}
          options={[
            { label: "Wade Cooper", value: "Wade Cooper" },
            { label: "Arlene Mccoy", value: "Arlene Mccoy" },
            { label: "Devon Webb", value: "Devon Webb" },
            { label: "Tom Cook", value: "Tom Cook" },
            { label: "Tanya Fox", value: "Tanya Fox" },
            { label: "Hellen Schmidt", value: "Hellen Schmidt" },
          ]}
        />
      </div>
      <div className="w-48">
        <Select
          shadow="md"
          color="purple"
          rounded="md"
          onSelect={({ value }) => alert(value)}
          options={[
            { label: "Wade Cooper", value: "Wade Cooper" },
            { label: "Arlene Mccoy", value: "Arlene Mccoy" },
            { label: "Devon Webb", value: "Devon Webb" },
            { label: "Tom Cook", value: "Tom Cook" },
            { label: "Tanya Fox", value: "Tanya Fox" },
            { label: "Hellen Schmidt", value: "Hellen Schmidt" },
          ]}
        />
      </div>
      <div className="w-48">
        <Select
          shadow="lg"
          color="indigo"
          rounded="lg"
          disabled={true}
          onSelect={({ value }) => alert(value)}
          options={[
            { label: "Wade Cooper", value: "Wade Cooper" },
            { label: "Arlene Mccoy", value: "Arlene Mccoy" },
            { label: "Devon Webb", value: "Devon Webb" },
            { label: "Tom Cook", value: "Tom Cook" },
            { label: "Tanya Fox", value: "Tanya Fox" },
            { label: "Hellen Schmidt", value: "Hellen Schmidt" },
          ]}
        />
      </div>
      <div className="w-48">
        <Select
          shadow="xl"
          color="pink"
          rounded="xl"
          onSelect={({ value }) => alert(value)}
          options={[
            { label: "Wade Cooper", value: "Wade Cooper" },
            { label: "Arlene Mccoy", value: "Arlene Mccoy" },
            { label: "Devon Webb", value: "Devon Webb" },
            { label: "Tom Cook", value: "Tom Cook" },
            { label: "Tanya Fox", value: "Tanya Fox" },
            { label: "Hellen Schmidt", value: "Hellen Schmidt" },
          ]}
        />
      </div>
      <div className="w-48">
        <Select
          shadow="xl"
          color="yellow"
          rounded="full"
          onSelect={({ value }) => alert(value)}
          options={[
            { label: "Wade Cooper", value: "Wade Cooper" },
            { label: "Arlene Mccoy", value: "Arlene Mccoy" },
            { label: "Devon Webb", value: "Devon Webb" },
            { label: "Tom Cook", value: "Tom Cook" },
            { label: "Tanya Fox", value: "Tanya Fox" },
            { label: "Hellen Schmidt", value: "Hellen Schmidt" },
          ]}
        />
      </div>
    </div>
  );
};
