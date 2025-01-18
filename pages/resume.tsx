import React from "react";

const Resume = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-between container mx-auto py-16 sm:py-24 px-4 sm:px-8 lg:px-12 relative">
      <section className="container mx-auto text-left sm:text-center max-w-3xl pt-[50px]">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          My <span className="highlight bg-clip-text">Resume</span>
        </h1>
        <p className="text-coolGray-400 font-semibold mt-6 leading-relaxed sm:text-lg">
          Here’s a brief overview of my career journey. You can scroll through
          or zoom into the PDF document below to view the full resume.
        </p>
      </section>

      {/* PDF Viewer */}
      <div className="w-full mt-10 flex justify-center items-center">
        <div className="w-full max-w-full sm:max-w-3xl">
          <iframe
            src="/resume.pdf"
            width="100%"
            height="500"
            className="w-full h-[500px]"
            title="PDF Viewer"
          ></iframe>
        </div>
      </div>

      {/* Page Navigation */}
    </div>
  );
};

export default Resume;
