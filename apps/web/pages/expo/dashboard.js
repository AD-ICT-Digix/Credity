import React from "react";
import { faker } from "@faker-js/faker";

import { Card, Drawer, Header, LineChart, StatCard,} from "../../components";

export default function ExpoDashboard() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <main className="">
        <Header setIsOpen={setIsOpen} title='Expo Dashboard' latestUsers='1'/>
        <div className="flex flex-row w-full space-x-4 mb-8">
        <StatCard title='Active Users' value={faker.datatype.number({ min: 0, max: 50000 })} icon='user-check'/>
        <StatCard title='Left Users' value={faker.datatype.number({ min: 0, max: 50000 })} icon='user-minus'/>
        <StatCard title='Liked' value={faker.datatype.number({ min: 0, max: 50000 })} icon='thumbs-up'/>
        <StatCard title='Disliked' value={faker.datatype.number({ min: 0, max: 50000 })} icon='thumbs-down'/>
        </div>
        <div className="flex flex-col w-full">
          <LineChart />
        </div>
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen} title="Recents">
          <Card />
        </Drawer>
      </main>
    </> 
  );
}
