import React from "react";
import { API } from "aws-amplify";
// export async function getStaticProps({ params }) {
//   console.log("params", params);
//   let form = await axios.get(
//     `https://api.credity.nahnova.tech/expo/${params.expoId}/form/${params.formId}`
//   );
//   form = JSON.parse(JSON.stringify(form.data));
//   return {
//     props: {
//       form,
//     },
//   };
// }
// FIXME: Error no current user 
export async function getStaticProps({ params }) {
  console.log("params", params);
  let expo = await API.get("APIGateway", `/expo/${params.expoId}`);
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
  return (
    <div>

    </div>
  );
}
