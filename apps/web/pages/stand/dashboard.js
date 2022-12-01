import React from "react";

import { Card, Drawer, Header } from "../../components";

export default function StandDashboard() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <main className="">
      <Header setIsOpen={setIsOpen} />
      <div className="flex flex-col w-full h-screen">
        <h1 className="text-6xl font-bold text-center text-white">
          Welcome to{" "}
          <span className="text-indigo-500">Credity</span>
        </h1>
        <h2 className="text-2xl font-bold text-center text-white">
            Stand Dashboard
          </h2>
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
