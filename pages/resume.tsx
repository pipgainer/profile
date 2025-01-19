import React from "react";

const Resume = () => {
    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-between container mx-auto py-16 sm:py-24 px-4 sm:px-8 lg:px-12 relative">
            <section className="container mx-auto px-8 2xl:px-36 text-center pt-10">
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
                    <object data="/resume.pdf" type="application/pdf" width="100%" height={600}>
                        <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>
                    </object>
                </div>
            </div>

            {/* Page Navigation */}
        </div>
    );
};

export default Resume;
