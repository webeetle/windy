import React from "react";
import "tailwindcss/dist/tailwind.css";

import { WindyProvider, Table } from "../../index.js";

const theme = { table: {} };

const cols = ["nome", "congmome", "età", "rank"];
const data = [
  {
    nome: "John",
    congmome: "Cook",
    età: "33",
    rank: "1",
  },
  {
    nome: "Mik",
    congmome: "One",
    età: "34",
    rank: "2",
  },
  {
    nome: "Nik",
    congmome: "Ciao",
    età: "35",
    rank: "3",
  },
  {
    nome: "Prova",
    congmome: "Cook",
    età: "36",
    rank: "4",
  },
];

export const Basic = () => {
  return (
    <div className="w-2/4">
      <WindyProvider theme={theme}>
        <Table columns={cols} data={data} />
      </WindyProvider>
    </div>
  );
};

export const WithSearch = () => {
  return (
    <div className="w-2/4">
      <WindyProvider theme={theme}>
        <Table columns={cols} data={data} search={true} color="red" />
      </WindyProvider>
    </div>
  );
};
