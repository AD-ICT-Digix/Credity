import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Form } from "../../../components";

// get a single form by id and pass it to the Form component as a prop called "form"
export async function getStaticProps({ params }) {
  console.log("params", params);
  let form = await axios.get(
    `https://api.credity.nahnova.tech/form/${params.formId}`
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
  const router = useRouter();
  return (
    // the formdata contians: updatedAt, createdAt, sk, pk, name, type,
    <div>
      <h1 className="text-2xl font-bold leading-7 text-white sm:text-3xl sm:truncate">
        {form.name}
      </h1>
	  <Form	/>
    </div>
  );
}
