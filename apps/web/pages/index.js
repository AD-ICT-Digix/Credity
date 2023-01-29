import React from "react";

function Home() {
  return (
    <>
      <head>
        <title>Credity Landing Page</title>
      </head>
      <body className="font-Poppins">
        <section className="relative">
          <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
            <div className="flex flex-1 flex-col items-center lg:items-start">
              <h1 className="text-bookmark-blue text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
                Simplify your exhibition data with us
              </h1>
              <p className="text-bookmark-grey text-lg text-center lg:text-left mb-6">
                Credity is a powerful data collection tool that helps you
                collect, analyze and visualize your exhibition data. It helps
                you to make better decisions and improve your exhibition
                performance. It is a powerful tool that helps you to collect,
                analyze and visualize your exhibition data. It helps you to make
                better decisions and improve your exhibition performance.
              </p>
              <div className="flex justify-center flex-wrap gap-6"></div>
            </div>
          </div>
        </section>
        <section className="relative">
          {/* H2 WITH THE TITLE HOW DOES CREDITY WORK */}
          <h2 className="text-bookmark-blue text-3xl md:text-4 lg:text-4xl text-center lg:text-left">
            How does Credity work?
          </h2>
          <iframe
            className="
        w-full
        h-screen
        lg:h-128
        border-none
        mt-4
        mb-20
        lg:mb-0"
            src="https://scribehow.com/embed/Vercel_Workflow__19P6UIlKQlaS7H-yrxbbFg"
            allowfullscreen
            frameborder="0"
          ></iframe>
        </section>
      </body>
    </>
  );
}

export default Home;
