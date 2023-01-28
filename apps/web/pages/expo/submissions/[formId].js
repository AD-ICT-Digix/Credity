import React, { useState, useEffect } from "react";
import axios from "axios";
import { API } from "aws-amplify";
import { useQRCode } from "next-qrcode";

import { StatCard } from "../../../components";

// get a single form by id and pass it to the Form component as a prop called "form"
export async function getStaticProps({ params }) {
  console.log("params", params);
  let form = await axios.get(
    `https://api.credity.nahnova.tech/expo/${params.expoId}/form/${params.formId}`
  );
  form = JSON.parse(JSON.stringify(form.data));
  return {
    props: {
      form,
    },
  };
}

export async function getStaticPaths() {
  return {
    // don't do anything here for now to speed up build
    paths: [],
    fallback: "blocking",
  };
}

export default function FormSubmissions({ form }) {
  const [submissions, SetSubmissions] = React.useState([]);
  const { Image } = useQRCode();

  const getSubmissionsOfForm = async (expoId, formId) => {
    API.get("APIGateway", `/expo/${expoId}/forms/${formId}/submissions`).then(
      (response) => {
        SetSubmissions(response || []);
      }
    );
  };

  const exportJsonSubmissionToCSV = () => {
    let csv =
      "Submission ID,First Name,Insertion,Last Name,Email,Phone,Description,Accepted Terms,Creation Date";
    submissions.forEach((submission) => {
      csv += `
      ${submission.pk.split("#")[1]},${submission.input.firstName},${
        submission.input.insertion
      },${submission.input.lastName},${submission.input.email},${
        submission.input.phone
      },${submission.input.description},${submission.input.acceptedTerms},${
        submission.creationDate
      }`;
    });
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("hidden", "");
    a.setAttribute("href", url);
    a.setAttribute("download", "submissions.csv");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  useEffect(() => {
    getSubmissionsOfForm(form.parent, form.pk.split("#")[1]);
    console.log("submissions", submissions);
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Analytics: {form.name}</h1>
      {/* grid div that contains stat cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <StatCard
          title="Total Submissions"
          value={submissions.length}
          icon="file-text"
        />
        {/* button that exports data to csv */}
        <button
          className="bg-zinc-500 hover:bg-zinc-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            exportJsonSubmissionToCSV();
          }}
        >
          Export to CSV
        </button>
        {/* button that downloads qr code */}
        <button className="bg-zinc-500 hover:bg-zinc-600 text-white font-bold py-2 px-4 rounded">
          <Image
            id="qr-code"
            className="w-32 h-32"
            text={`https://credity.vercel.app/expo/submissions/${
              form.pk.split("#")[1]
            }`}
          />
          Download QR Code by right clicking on the image and selecting Save
          Image As
        </button>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
        <table className="w-full text-sm text-left text-zinc-500 dark:text-zinc-400">
          <thead className="text-xs text-zinc-700 uppercase bg-zinc-50 dark:bg-zinc-700 dark:text-zinc-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Submission ID
              </th>
              <th scope="col" className="px-6 py-3">
                First Name
              </th>
              <th scope="col" className="px-6 py-3">
                Insertion
              </th>
              <th scope="col" className="px-6 py-3">
                Last Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Accepted Terms
              </th>
              <th scope="col" className="px-6 py-3">
                Creation Date
              </th>
            </tr>
          </thead>
          {submissions.map((submission) => {
            return (
              <tbody key={submission.pk.split("#")[1]}>
                <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-zinc-900 whitespace-nowrap dark:text-white"
                  >
                    {submission.pk.split("#")[1]}
                  </th>
                  <td className="px-6 py-4 text-zinc-500 dark:text-zinc-400">
                    {submission.input.firstName}
                  </td>
                  <td className="px-6 py-4 text-zinc-500 dark:text-zinc-400">
                    {submission.input.insertion}
                  </td>
                  <td className="px-6 py-4 text-zinc-500 dark:text-zinc-400">
                    {submission.input.lastName}
                  </td>
                  <td className="px-6 py-4 text-zinc-500 dark:text-zinc-400">
                    {submission.input.email}
                  </td>
                  <td className="px-6 py-4 text-zinc-500 dark:text-zinc-400">
                    {submission.input.phone}
                  </td>
                  <td className="px-6 py-4 text-zinc-500 dark:text-zinc-400">
                    {submission.input.description}
                  </td>
                  <td className="px-6 py-4 text-zinc-500 dark:text-zinc-400">
                    {submission.input.acceptedTerms}
                  </td>
                  <td className="px-6 py-4 text-zinc-500 dark:text-zinc-400">
                    {submission.createdAt}
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
