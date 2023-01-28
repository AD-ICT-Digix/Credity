import React, { useEffect } from "react";
import Link from "next/link";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { API, Auth } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator } from "@aws-amplify/ui-react";

Auth.configure({
  identityPoolId: "eu-west-1:7d8d1ae9-7e22-4d8e-a40e-12133d8f4db0",
  region: "eu-west-1",
  userPoolId: "eu-west-1_lPwBdbSuG",
  userPoolWebClientId: "4c6s6lo0sb50qmug1os8c61s1t",
});

API.configure({
  endpoints: [
    {
      name: "APIGateway",
      endpoint: "https://api.credity.nahnova.tech",
      custom_header: async () => {
        return {
          Authorization: `Bearer ${(await Auth.currentSession())
            .getIdToken()
            .getJwtToken()}`,
        };
      },
    },
  ],
});

const Expo = () => {
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
        <h1 className="text-4xl font-bold mb-4">All Expositions</h1>
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

export default withAuthenticator(Expo);
