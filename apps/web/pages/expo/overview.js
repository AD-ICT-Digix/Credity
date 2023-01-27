import React, { useEffect } from "react";
import { API } from "aws-amplify";
import Link from "next/link";
import { useRouter } from "next/router";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";

export default function ExpoOverview() {
  const [expos, SetExpos] = React.useState([]);
  const createExpo = async () => {
    API.post("APIGateway", "/expo", {
      body: {
        title: "Expo name", // TODO: Make this dynamic (input)
      },
    });
  };

  const deleteExpo = async (id) => {
    API.del("APIGateway", `/expo/${id}`);
  };

  const getExpos = async () => {
    API.get("APIGateway", "/expo").then((response) => {
      SetExpos(response);
    });
  };

  const getExpo = async (id) => {
    API.get("APIGateway", `/expo/${id}`);
  };

  useEffect(() => {
    getExpos();
  }, []);

  return (
    <>
      <main className="">
        <div>
          <div className="flex flex-row justify-center space-x-1 items-center">
            <button
              className="bg-indigo-600 text-white p-4 rounded-lg shadow-md"
              onClick={() => createExpo()}
            >
              Create expo
            </button>
          </div>
          {/* <button
            onClick={() => getExpo("b4e8e066-3182-421f-b29a-13ac09fb7be8")}
          >
            Get expo (b4e8e066-3182-421f-b29a-13ac09fb7be8)
          </button> */}
        </div>
        <div className="flex flex-row flex-wrap justify-center items-center">
          {expos?.map((expo) => {
            return (
              <div key={expo.id} className="w-1/3 p-4">
                <div className="bg-indigo-600 shadow-md rounded-lg p-4">
                  <h1 className="font-bold text-xl mb-2">{expo.title}</h1>
                  <p>{expo.pk}</p>
                  <div className="flex flex-row  space-x-1 mt-4">
                    <button
                      onClick={() =>
                        deleteExpo(
                          expo.pk.split("#")[1]
                        )
                      }
                      className="bg-black text-white p-4 shadow-md rounded-lg"
                    >
                      <FeatherIcon icon="trash" />
                    </button>
                    <Link
                      href={`/expo/dashboard/${expo.id}`}
                      className="bg-black text-white p-4 shadow-md rounded-lg"
                    >
                      <FeatherIcon icon="bar-chart-2" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
