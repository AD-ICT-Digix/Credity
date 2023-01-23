import React from "react";


export const ForgotPassword = () => {
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-indigo-600 ">
                   We'll e-mail you a one-time login code.
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-indigo-600 bg-white border rounded-md focus:border-indigo-600 focus:ring-indigo-600 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    
                    <a
                        href="#"
                        className="text-xs text-indigo-600 hover:underline"
                    >
                        Want to log in? Click here
                    </a>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                            Send E-mail
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    No account yet?{" "}
                    <a
                        href="#"
                        className="font-medium text-indigo-600 hover:underline"
                    >
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
}

