import React from "react";
import "tailwindcss/dist/tailwind.css";

import { WindyProvider, Table } from "../../index.js";

const theme = { table: {} };

const cols = [
  { label: "nome", value: "nome", ordered: false },
  { label: "cognome", value: "cognome", ordered: false },
  { label: "età", value: "età", ordered: false },
  { label: "rank", value: "rank", ordered: true },
];
const data = [
  {
    nome: "John",
    cognome: "Cook",
    età: "33",
    rank: "1",
  },
  {
    nome: "Mik",
    cognome: "One",
    età: "34",
    rank: "2",
  },
  {
    nome: "Nik",
    cognome: "Ciao",
    età: "35",
    rank: "3",
  },
  {
    nome: "Prova",
    cognome: "Cook",
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