import React from "react";
import "tailwindcss/dist/tailwind.css";

import { WindyProvider, Table } from "../../index.js";

const theme = { table: {} };

const cols = [
  {
    label: "Render Custom",
    value: "actions",
    renderComponent: (row, value) => (
      <div>
        {row.data.nome} - {row.data.eta} anni
      </div>
    ),
    ordered: false,
  },
  { label: "nome", value: "nome", ordered: false },
  { label: "cognome", value: "cognome", ordered: true },
  { label: "età", value: "eta", ordered: true },
  { label: "rank", value: "rank", ordered: true },
];
const data = [
  {
    nome: "John",
    cognome: "Cook",
    eta: "33",
    rank: "1",
  },
  {
    nome: "Mik",
    cognome: "One",
    eta: "34",
    rank: "2",
  },
  {
    nome: "Nik",
    cognome: "Ciao",
    eta: "35",
    rank: "3",
  },
  {
    nome: "Prova",
    cognome: "Cook",
    eta: "36",
    rank: "4",
  },
  {
    nome: "Jiik",
    cognome: "Book",
    eta: "36",
    rank: "4",
  },
];

export const Basic = () => {
  return (
    <div className="w-3/4">
      <WindyProvider theme={theme}>
        <Table columns={cols} data={data} />
      </WindyProvider>
    </div>
  );
};

export const WithSearch = () => {
  return (
    <div className="w-3/4">
      <WindyProvider theme={theme}>
        <Table
          columns={cols}
          data={data}
          search={true}
          color="red"
          paged={true}
          pageSize={2}
        />
      </WindyProvider>
    </div>
  );
};
