import React from "react";
import Badge from "./Badge";
import "tailwindcss/dist/tailwind.css";

export const Basic = () => {
  return (
    <div className="flex items-center space-x-5">
      <Badge
        text="Hello"
        color="gray"
        shadow="none"
        onClick={() => alert("Clicked")}
        pointer
      />
      <Badge text="Hello" color="red" shadow="none" />
      <Badge text="Hello" color="yellow" shadow="none" />
      <Badge text="Hello" color="green" shadow="none" />
      <Badge text="Hello" color="blue" shadow="none" />
      <Badge text="Hello" color="indigo" shadow="none" />
      <Badge text="Hello" color="purple" shadow="sm" />
      <Badge text="Hello" color="pink" shadow="md" />
      <Badge text="Hello" color="purple" shadow="lg" />
      <Badge text="Hello" color="pink" shadow="full" disabled />
    </div>
  );
};

export const Size = () => {
  return (
    <div className="flex items-center space-x-5">
      <Badge
        text="Hello"
        color="gray"
        shadow="none"
        onClick={() => alert("Clicked")}
        pointer
        size="xs"
      />
      <Badge text="Hello" color="red" shadow="sm" size="sm" />
      <Badge text="Hello" color="yellow" shadow="md" size="md" />
      <Badge text="Hello" color="green" shadow="lg" size="lg" />
    </div>
  );
};
