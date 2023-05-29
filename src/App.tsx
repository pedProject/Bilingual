import type { FC } from "react";

import Table from "./components/UI/Table/Table";

export const App: FC = (): JSX.Element => {
  const columns = [
    { id: "id", label: "#", align: "left" },
    { id: "name", label: "User Name", align: "left" },
    { id: "age", label: "Date of Submition", align: "left" },
    { id: "city", label: "Test name", align: "left" },
    { id: "status", label: "Status", align: "left" },
    { id: "score", label: "Score", align: "left" },
    { id: "icon", label: "", align: "left" }
  ];

  const data = [
    {
      id: "1",
      name: "Kubanov Farid",
      age: "08:15  20.11.2021 ",
      city: "Test number 1",
      status: "Not evaluated",
      score: "0",
      icon: <div>beka</div>
    },
    {
      id: "2",
      name: "Azatov Ulan",
      age: "14:02  25.10.2021",
      city: "Test number 2",
      status: "Not evaluated",
      score: "0"
    },
    {
      id: "3",
      name: "Maratova Aijan",
      age: "11:25 27.09.2021",
      city: "Test number 1",
      status: "Evaluated",
      score: "7"
    },
    {
      id: "3",
      name: "Bekova Aliza",
      age: "11:25  27.09.2021",
      city: "Test number 3",
      status: "Evaluated",
      score: "7"
    }
  ];
  return (
    <>
      <div>
        <h1>MyApp</h1>
        <Table columns={columns} data={data} />
      </div>
    </>
  );
};
