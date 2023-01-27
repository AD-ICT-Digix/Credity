import React, { useEffect } from "react";
import { API } from "aws-amplify";
import Link from "next/link";
import { useRouter } from "next/router";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";

export default function ExpoOverview() {
  const [expos, SetExpos] = React.useState([]);
  const [expoName, SetExpoName] = React.useState("");
  const [forms, SetForms] = React.useState([]);
  const [formName, SetFormName] = React.useState("");

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

  const getExpo = async (id) => {
    API.get("APIGateway", `/expo/${id}`);
  };

  const createForm = async (ExpoId, FormName) => {
    API.post("APIGateway", "/form", {
      body: {
        expoId: `${ExpoId}`,
        name: `${FormName}`,
      },
    });
  };

  const getForms = async () => {
    API.get("APIGateway", "/form").then((response) => {
      SetForms(response || []);
    });
  };

  useEffect(() => {
    getExpos();
  }, []);

  return (
    <>
      <div>
        {/* Create Expo Button */}
        <div className="flex flex-row justify-center space-x-1 items-center">
          <button
            className="bg-indigo-600 text-white p-1 shadow-md rounded-lg disabled:opacity-50"
            onClick={() => createExpo()}
            disabled={!expoName}
          >
            Create expo
          </button>
          {/* Name Expo Input */}
          <input
            type="text"
            className="w-full p-4 rounded-lg shadow-md"
            onChange={(e) => SetExpoName(e.target.value)}
            placeholder="Expo name"
          />
          {/* Refresh Button */}
          <button
            className="bg-indigo-600 text-white p-3.5 shadow-md rounded-lg disabled:opacity-50"
            onClick={() => getExpos()}
          >
            <FeatherIcon icon="refresh-cw" />
          </button>
        </div>
        {/* TODO: add this call to dashboard page */}
        {/* <button
          className="bg-indigo-600 text-white p-1 shadow-md rounded-lg disabled:opacity-50"
          onClick={() => getExpo("0145b28e-c0c8-44f3-9379-e9d725f59ed5")}
        >
          Get Expo (b4e8e066-3182-421f-b29a-13ac09fb7be8)
        </button> */}
      </div>
      <div className="flex flex-row flex-wrap justify-center">
        {expos?.map((expo) => {
          return (
            <div className="w-96 m-4">
              <div className="bg-indigo-600 shadow-md rounded-lg p-4">
                <h1 className="text-white text-2xl font-bold">{expo.title}</h1>
                <p className="text-white text-sm">{expo.pk}</p>
                <div className="flex flex-row  space-x-1 mt-4">
                  <button
                    onClick={() => deleteExpo(expo.pk.split("#")[1])}
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
                  <button
                    onClick={() => getForms()}
                    className="bg-black text-white p-4 shadow-md rounded-lg"
                  >
                    <FeatherIcon icon="file-text" />
                  </button>
                </div>
                <div className="flex flex-row justify-center space-x-1 items-center mt-4">
                  <input
                    type="text"
                    className="w-full p-4 rounded-lg shadow-md"
                    onChange={(e) => SetFormName(e.target.value)}
                    placeholder="Add a stand"
                  />
                  <button
                    onClick={() => createForm(expo.pk.split("#")[1], formName)}
                    className="bg-black text-white p-3.5 shadow-md rounded-lg disabled:opacity-50"
                    disabled={!formName}
                  >
                    <FeatherIcon icon="plus" />
                  </button>
                </div>
                {/* list of stands under card */}
                {forms?.map((form) => {
                  return (
                    <div className="flex flex-row justify-between items-center mt-4 bg-black rounded-lg">
                      <p className="text-white p-4">{form.name}</p>
                      <Link
                        href={`/expo/forms/${form.pk.split("#")[1]}`} // this will be the link to the form
                        className="bg-black text-white p-3.5 shadow-md rounded-lg disabled:opacity-50"
                      >
                        <FeatherIcon icon="chevron-right" />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
