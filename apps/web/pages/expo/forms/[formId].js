import React, { useState, useEffect } from "react";
import axios from "axios";
import { API } from "aws-amplify";

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

export default function FormInput({ form }) {
  const [firstName, SetFirstName] = useState("");
  const [insertion, SetInsertion] = useState("");
  const [lastName, SetLastName] = useState("");
  const [email, SetEmail] = useState("");
  const [phone, SetPhone] = useState("");
  const [description, SetDescription] = useState("");
  const [acceptedTerms, SetAcceptedTerms] = useState(false);

  const handleSubmission = async (
    expoId = form.parent,
    input = {
      firstName: firstName,
      insertion: insertion,
      lastName: lastName,
      email: email,
      phone: phone,
      description: description,
      acceptedTerms: acceptedTerms,
    }
  ) => {
    API.post("APIGateway", "/submission", {
      body: {
        expoId,
        input,
      },
    });
  };

  return (
    <div>
      <h1 className="text-4xl font-bold">{form.name}</h1>
      <input
        type="text"
        className="mt-4 w-full p-4 rounded-lg shadow-md"
        onChange={(e) => SetFirstName(e.target.value)}
        placeholder="Voornaam"
      />
      <input
        type="text"
        className="mt-4 w-full p-4 rounded-lg shadow-md"
        onChange={(e) => SetInsertion(e.target.value)}
        placeholder="Tussenvoegsel"
      />
      <input
        type="text"
        className="mt-4 w-full p-4 rounded-lg shadow-md"
        onChange={(e) => SetLastName(e.target.value)}
        placeholder="Achternaam"
      />
      <input
        type="email"
        className="mt-4 w-full p-4 rounded-lg shadow-md"
        onChange={(e) => SetEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="tel"
        className="mt-4 w-full p-4 rounded-lg shadow-md"
        onChange={(e) => SetPhone(e.target.value)}
        placeholder="Telefoonnummer"
      />
      <textarea
        type="text"
        className="mt-4 w-full p-4 rounded-lg shadow-md"
        onChange={(e) => SetDescription(e.target.value)}
        placeholder="Beschrijving"
      />
      <div className="mt-4">
        <input type="checkbox" onChange={(e) => SetAcceptedTerms(e.target.value)} />
        <label className="ml-2">Ik ga akkoord met de algemene voorwaarden</label>
      </div>
      <button
        className="mt-4 w-full bg-indigo-600 text-white p-4 shadow-md rounded-lg disabled:opacity-50"
        onClick={() => handleSubmission()}
        disabled={!acceptedTerms}
      >
        Verstuur
      </button>
    </div>
  );
}
