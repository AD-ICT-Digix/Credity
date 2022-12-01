import React from "react";

export default function Home() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
      <div className="flex flex-col w-full h-screen">
        <h1 className="text-6xl font-bold text-center text-white">
          Welcome to{" "}
          <span className="text-indigo-500">Credity</span>
        </h1>
        <h2 className="text-2xl font-bold text-center text-white">
          The tool for your event
        </h2>
      </div>
  );
}
