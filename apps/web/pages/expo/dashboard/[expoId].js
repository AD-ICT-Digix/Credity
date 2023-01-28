import React, { useEffect } from "react";
import axios from "axios";
import { API } from "aws-amplify";
import { QrPopup } from "../../../components/QrPopup";
import Link from "next/link";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";

export async function getStaticProps({ params }) {
  console.log("params", params);
  let expo = await axios.get(
    `https://api.credity.nahnova.tech/expo/${params.expoId}`
  );
  expo = JSON.parse(JSON.stringify(expo.data));
  return {
    props: {
      expo,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export default function Expo({ expo }) {
  const [forms, SetForms] = React.useState([]);
  const [formName, SetFormName] = React.useState("");

  const [submissions, SetSubmissions] = React.useState([]);

  const createForm = async (expoId, formName) => {
    API.post("APIGateway", `/expo/${expoId}/forms`, {
      body: {
        expoId: `${expoId}`,
        name: `${formName}`,
      },
    });
  };

  const getForms = async (id) => {
    API.get("APIGateway", `/expo/${id}/forms`).then((response) => {
      SetForms(response || []);
    });
  };

  useEffect(() => {
    getForms(expo.pk.split("#")[1]);
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold">{expo.title}</h1>
      <div className="flex flex-row justify-center space-x-1 items-center mt-4">
        <input
          type="text"
          className="w-full p-4 rounded-lg shadow-md"
          onChange={(e) => SetFormName(e.target.value)}
          placeholder="Add a stand"
        />
        <button
          onClick={() => createForm(expo.pk.split("#")[1], formName)}
          className="bg-indigo-600 text-white p-3.5 shadow-md rounded-lg disabled:opacity-50 hover:bg-black"
          disabled={!formName}
        >
          <FeatherIcon icon="plus" />
        </button>
        <button
          className="bg-indigo-600 text-white p-3.5 shadow-md rounded-lg disabled:opacity-50 hover:bg-black"
          onClick={() => getForms(expo.pk.split("#")[1])}
        >
          <FeatherIcon icon="refresh-cw" />
        </button>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
        <table className="w-full text-sm text-left text-zinc-500 dark:text-zinc-400">
          <thead className="text-xs text-zinc-700 uppercase bg-zinc-50 dark:bg-zinc-700 dark:text-zinc-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Stand Name
              </th>
              <th scope="col" className="px-6 py-3">
                Stand ID
              </th>
              <th scope="col" className="px-6 py-3">
                Creation Date
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          {forms.map((form) => {
            return (
              <tbody key={form.pk.split("#")[1]}>
                <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-zinc-900 whitespace-nowrap dark:text-white"
                  >
                    {form.name}
                  </th>
                  <td className="px-6 py-4 text-zinc-500 dark:text-zinc-400">
                    {form.pk.split("#")[1]}
                  </td>
                  <td className="px-6 py-4 text-zinc-500 dark:text-zinc-400">
                    {form.createdAt}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex flex-row space-x-1">
                      <QrPopup
                        link={`https://credity.vercel.app/expo/forms/${
                          form.pk.split("#")[1]
                        }`}
                        trigger={
                          <button className="bg-black text-white p-3.5 shadow-md rounded-lg disabled:opacity-50 hover:bg-indigo-600">
                            QR Code
                          </button>
                        }
                      />
                      <Link
                        href={`/expo/forms/${form.pk.split("#")[1]}`} // this will be the link to the form
                        className="bg-black text-white p-3.5 shadow-md rounded-lg disabled:opacity-50 hover:bg-indigo-600"
                      >
                        <FeatherIcon icon="list" />
                      </Link>
                      <Link
                        href={`/expo/submissions/${form.pk.split("#")[1]}`}
                        className="bg-black text-white p-3.5 shadow-md rounded-lg disabled:opacity-50 hover:bg-indigo-600"
                      >
                        <FeatherIcon icon="bar-chart-2" />
                      </Link>
                    </div>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}
