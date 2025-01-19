import React from "react";
import ContactForm from "../src/components/templates/ContactForm";

const contact = () => {
    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-between container mx-auto py-32 relative 2xl:px-36 px-2">
            <section className="container mx-auto px-8 2xl:px-36 text-center">
                <h1 className="text-3xl sm:text-5xl font-bold">
                    Let's get{" "}
                    <span className="highlight bg-clip-text">in touch</span>
                </h1>
                <p className="text-coolGray-400 font-semibold mt-8 leading-relaxed sm:text-lg">
                    I’m open to hearing about new opportunities. Feel free to
                    reach out to me if you have a question, or just want to say
                    hi!
                </p>
            </section>
            <ContactForm />
        </div>
    );
};

export default contact;
