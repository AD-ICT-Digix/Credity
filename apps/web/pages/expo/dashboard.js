import React from "react";

import { Card, Drawer, Header, LineChart } from "../../components";

export default function ExpoDashboard() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <> 
      <main className="">
        <Header setIsOpen={setIsOpen} />
        <div className="flex flex-col w-full h-screen">
          <LineChart />
        </div>
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen} title="recent check ins">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Drawer>
      </main>
    </>
  );
}
