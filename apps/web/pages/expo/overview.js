import React, { useEffect } from "react";
import { API } from "aws-amplify";
import Link from "next/link";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { QrPopup } from "../../components/QrPopup";

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

  const createForm = async (ExpoId, FormName) => {
    API.post("APIGateway", `/expo/${ExpoId}/forms`, {
      body: {
        expoId: `${ExpoId}`,
        name: `${FormName}`,
      },
    });
  };

  const getForms = async (id) => {
    API.get("APIGateway", `/expo/${id}/forms`).then((response) => {
      SetForms(response || []);
    });
  };

  useEffect(() => {
    getExpos();
  }, []);

  return (
    <>
      <div>
        <div className="flex flex-row justify-center space-x-1 items-center">
          <button
            className="bg-indigo-600 text-white p-1 shadow-md rounded-lg disabled:opacity-50"
            onClick={() => createExpo()}
            disabled={!expoName}
          >
            Create expo
          </button>
          <input
            type="text"
            className="w-full p-4 rounded-lg shadow-md"
            onChange={(e) => SetExpoName(e.target.value)}
            placeholder="Expo name"
          />
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
              <div className="bg-indigo-600 shadow-md rounded-lg p-4">
                <h1 className="text-white text-2xl font-bold">{expo.title}</h1>
                <p className="text-white text-sm">{expo.pk}</p>
                <div className="flex flex-row  space-x-1 mt-4">
                  {/* NOTE: DELETE */}
                  <button
                    onClick={() => deleteExpo(expo.pk.split("#")[1])}
                    className="bg-black text-white p-4 shadow-md rounded-lg"
                  >
                    <FeatherIcon icon="trash" />
                  </button>
                  {/* NOTE: DASHBOARD */}
                  <Link
                    href={`/expo/dashboard/${expo.pk.split("#")[1]}`}
                    className="bg-black text-white p-4 shadow-md rounded-lg"
                  >
                    <FeatherIcon icon="bar-chart-2" />
                  </Link>
                  {/* NOTE: GET FORMS */}
                  <button
                    onClick={() => getForms(expo.pk.split("#")[1])}
                    className="bg-black text-white p-4 shadow-md rounded-lg"
                  >
                    <FeatherIcon icon="list" />
                  </button>
                </div>
                <div className="flex flex-row justify-center space-x-1 items-center mt-4">
                  {/* NOTE: CREATE FORM */}
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
                {/* container that contains all stands from the selected expo */}
                {forms?.map((form) => {
                  return (
                    <div className="flex flex-row justify-between items-center p-3 my-2 bg-gray-700 rounded-lg">
                      <p className="text-white">{form.name}</p>
                      <div className="flex flex-row space-x-1">
                        <Link
                          href={`/expo/forms/${form.pk.split("#")[1]}`} // this will be the link to the form
                          className="bg-black text-white p-3.5 shadow-md rounded-lg disabled:opacity-50"
                        >
                          <FeatherIcon icon="chevron-right" />
                        </Link>
                        <QrPopup
                          link={`http://localhost:3000/expo/forms/${
                            form.pk.split("#")[1]
                          }`}
                          trigger={
                            <button className="bg-black text-white p-3.5 shadow-md rounded-lg disabled:opacity-50">
                              <FeatherIcon icon="file-text" />
                            </button>
                          }
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
          );
        })}
      </div>
    </>
  );
}
