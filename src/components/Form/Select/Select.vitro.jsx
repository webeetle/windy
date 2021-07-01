import React from "react";
import Select from "./Select";
import "tailwindcss/dist/tailwind.css";

import { WindyProvider } from "../../../index.js";

const theme = { select: {} };

export const Basic = () => {
  return (
    <div className="flex items-center space-x-5">
      <WindyProvider theme={theme}>
        <div className="w-72">
          <Select
            onSelect={({ value }) => console.log(`Selected : ${value}`)}
            selected={"Tom Cook"}
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
      </WindyProvider>
    </div>
  );
};

export const Rounded = () => {
  return (
    <div className="flex items-center space-x-5">
      <WindyProvider theme={theme}>
        <div className="w-48">
          <Select
            shadow="none"
            color="white"
            rounded="none"
            onSelect={({ value }) => console.log(`Selected : ${value}`)}
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
            onSelect={({ value }) => console.log(`Selected : ${value}`)}
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
            onSelect={({ value }) => console.log(`Selected : ${value}`)}
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
            onSelect={({ value }) => console.log(`Selected : ${value}`)}
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
            onSelect={({ value }) => console.log(`Selected : ${value}`)}
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
            onSelect={({ value }) => console.log(`Selected : ${value}`)}
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
      </WindyProvider>
    </div>
  );
};
