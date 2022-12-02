import React from "react";

import { Card, Drawer, Header, LineChart } from "../../components";

export default function StandDashboard() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <main className="">
      <Header setIsOpen={setIsOpen} />
      <div className="flex flex-col w-full h-screen">
          <LineChart />
      </div>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
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
  );
}
