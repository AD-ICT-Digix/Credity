import React, { useEffect } from "react";
import { API } from "aws-amplify";
import Link from "next/link";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";

export default function ExpoOverview() {
  const [expos, SetExpos] = React.useState([]);
  const [expoName, SetExpoName] = React.useState("");

  const createExpo = async () => {
    API.post("APIGateway", "/expo", {
      body: {
        title: `${expoName}`,
      },
    });
  };

  const deleteExpo = async (id) => {
    API.del("APIGateway", `/expo/${id}`);
  };

  const getExpos = async () => {
    API.get("APIGateway", "/expo").then((response) => {
      SetExpos(response || []);
    });
  };

  useEffect(() => {
    getExpos();
  }, []);

  return (
    <>
      <div>
        <div className="flex flex-row justify-center space-x-1 items-center">
          <input
            type="text"
            className="w-full p-4 rounded-lg shadow-md"
            onChange={(e) => SetExpoName(e.target.value)}
            placeholder="Expo name"
          />
          <button
            onClick={() => createExpo()}
            className="bg-indigo-600 text-white p-3.5 shadow-md rounded-lg disabled:opacity-50"
            disabled={!expoName}
          >
            <FeatherIcon icon="plus" />
          </button>
          <button
            className="bg-indigo-600 text-white p-3.5 shadow-md rounded-lg disabled:opacity-50"
            onClick={() => getExpos()}
          >
            <FeatherIcon icon="refresh-cw" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
        {expos?.map((expo) => {
          return (
            <div
              className="bg-indigo-600 shadow-md rounded-lg p-4"
              key={expo.pk.split("#")[1]}
            >
              <h1 className="text-white font-bold text-2xl truncate">
                {expo.title}
              </h1>
              <div className="flex flex-row  space-x-1 mt-4">
                <button
                  onClick={() => deleteExpo(expo.pk.split("#")[1])}
                  className="bg-black text-white p-4 shadow-md rounded-lg"
                >
                  <FeatherIcon icon="trash" />
                </button>
                <Link
                  href={`/expo/dashboard/${expo.pk.split("#")[1]}`}
                  className="bg-black text-white p-4 shadow-md rounded-lg"
                >
                  <FeatherIcon icon="bar-chart-2" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
