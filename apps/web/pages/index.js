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
              <h2 className="text-bookmark-blue text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
                Simplify your exhibition data with us
              </h2>
              <p className="text-bookmark-grey text-lg text-center lg:text-left mb-6">
                Credity is a powerful data collection tool that helps you
                collect, analyze and visualize your exhibition data. It helps
                you to make better decisions and improve your exhibition
                performance. It is a powerful tool that helps you to collect,
                analyze and visualize your exhibition data. It helps you to make
                better decisions and improve your exhibition performance.
              </p>
              <div className="flex justify-center flex-wrap gap-6">
              </div>
            </div>
          </div>
        </section>
        {/* TODO: product landing page afmaken */}
      </body>
    </>
  );
}

export default Home;
