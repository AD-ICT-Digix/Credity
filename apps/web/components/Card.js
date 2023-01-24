import React from "react";
import Image from 'next/image'; //fixes the image issue
import { faker } from "@faker-js/faker";

export const Card = () => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const avatar = faker.image.avatar();
  const email = faker.internet.email();
  return (
    <div className="border-indigo-500 border-2 shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full h-12 w-12">
          <img src={avatar} alt="avatar" width="350" height="350" />
        </div>
        <div className="flex-1 space-y-2">
          <div className="h-4 w-3/4">
            <p>{firstName} {lastName}</p>
          </div>
          <div className="space-y-2">
            <div className="h-4">
              <p>{email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
