import React from "react";
import { useEffect, useState } from "react";

export const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [agree, setAgree] = useState(false);

  const canBeSubmitted = () => {
    const isValid =
      firstName.trim().length && // TextInput
      lastName.trim().length && // TextInput
      email.trim().length && // email
      agree; // checkbox for terms

    if (isValid) {
      document.getElementById("submitButton").removeAttribute("disabled");
    } else {
      document.getElementById("submitButton").setAttribute("disabled", true);
    }
    console.log({ firstName, lastName, email, agree });
  };

  useEffect(() => canBeSubmitted());

  return (
  <div className="min-w-3xl flex-auto m-0 border-4 border-indigo-500 p-2 rounded-lg">
    <form>
      <div className="relative z-0 mb-3 w-full group">
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
          placeholder=" "
          required
        />
        <label
          for="firstName"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Voornaam
        </label>
      </div>

      <div className="relative z-0 mb-3 w-full group">
        <input
          type="text"
          name="insertion"
          id="insertion"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
          placeholder=" "
        />
        <label
          for="insertion"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Tussenvoegsel
        </label>
      </div>

      <div className="relative z-0 mb-3 w-full group">
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
          placeholder=" "
          required
        />
        <label
          for="lastName"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Achternaam
        </label>
      </div>

      <div className="relative z-0 mb-3 w-full group">
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
          placeholder=" "
          required
        />
        <label
          for="floating_email"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          E-mail
        </label>
      </div>

      <div className="relative z-0 mb-3 w-full group">
        <input
          type="tel"
          name="floating_phone"
          id="floating_phone"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
          placeholder=" "
        />
        <label
          for="floating_phone"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Telefoonnummer{" "}
        </label>
      </div>

      <div className="relative z-0 mb-3 w-full group">
        <textarea
          name="description"
          id="description"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
          placeholder=" "
        />
        <label
          for="description"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Heeft u een opmerking......
        </label>
      </div>
      <div className="flex items-center mb-2">
        <input  
          type="checkbox"
          name="agree"
          id="agree"
          onClick={(e) => setAgree(e.target.checked)} 
          className="w-4 h-4 text-indigo-600 bg-gray-100 rounded border-gray-300 focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label for="link-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-indigo-600 dark:text-indigo-500 hover:underline">terms and conditions</a>.</label>
      </div>
      <div className="relative z-0 mb-3 w-full group">
        <button
          type="submit"
          id="submitButton"

          className="disabled:opacity-25 text-white bg-gradient-to-r from-indigo-400 to-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
)
}


