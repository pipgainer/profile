import Image from "next/image";
import { Inter } from "next/font/google";
import FullScreenModal from "../src/components/templates/FullScreenModal";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main>
            <section className="flex min-h-screen items-center justify-between container mx-auto relative 2xl:px-36 px-8">
                <div className="lg:w-1/2">
                    <div className="gradient-border w-fit rounded-full  p-4 lg:hidden relative highlight mb-10 mt-[120px]">
                        <Image
                            width={200}
                            height={200}
                            alt="Random Programmer Image"
                            className="rounded-full object-fill"
                            src="/profile-picture.jpg"
                        />
                    </div>
                    <h1 className="font-bold leading-loose text-white">
                        <span className="md:text-6xl text-4xl">
                            Hey there, I’m
                        </span>
                        <br />
                        <span className="bg-clip-text highlight md:text-6xl text-5xl">
                            Abhishek Powade.
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mt-8">
                        With 3 years of experience in mobile and web application development, I specialize in building high-performance, user-friendly applications that seamlessly integrate technology and design. Passionate about innovation, I continuously explore new tools and frameworks to enhance functionality, optimize performance, and stay ahead in the ever-evolving tech landscape.
                    </p>
                </div>
                <div className="gradient-border p-4 hidden lg:block relative highlight rounded-xl">
                    <Image
                        width={400}
                        height={400}
                        alt="Random Programmer Image"
                        className="object-fill rounded-xl"
                        src="/profile-picture.jpg"
                    />
                </div>
            </section>
            <div className="absolute left-0 bottom-14 right-0 justify-between 2xl:px-36 px-8 animate-bounce text-sm text-coolGray-500 hidden lg:flex select-none">
                <div>
                    <div className="text-coolGray-400 transform rotate-90 -translate-x-1/3">
                        scroll down
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="inline-block ml-1"
                        >
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </div>
                </div>
                <div>
                    <div className="text-coolGray-400 transform rotate-90 translate-x-1/3">
                        scroll down
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="inline-block ml-1"
                        >
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </div>
                </div>
            </div>
            <section className="flex px-8 text-coolGray-400 flex-col min-h-screen container mx-auto relative 2xl:px-36">
                <div>
                    <h2 className="text-4xl font-semibold mt-10 lg:mt-0">About Me</h2>
                    <section>
                        <p className="text-coolGray-400 mt-6 text-xl">
                            Hey! I’m Abhishek, a <span className="text-green-400">26-year-old</span> software developer passionate about coding, building, and deploying high-quality applications.
                        </p>
                        <div className="text-coolGray-400 text-xl">
                            <p className="mt-4 text-xl">
                                I thrive on challenges and constantly seek opportunities to expand my skill set. With <span className="text-green-400">3 years of experience in mobile and web application development</span>, I focus on building seamless, user-centric digital experiences. Currently, I’m working at <span className="text-green-400">Courseplay</span>, developing impactful solutions that enhance learning through technology.
                            </p>
                            <p className="mt-4 text-xl">
                                In my free time, I explore new technologies to stay ahead of industry trends. One quote that keeps me motivated when tackling complex challenges is:
                                <br />
                                <span className="text-green-400">
                                    "It seems difficult at first, but everything is difficult at first." - Miyamoto Musashi 💡
                                </span>
                            </p>
                            <p className="mt-4 text-xl">
                                I earned my <span className="text-green-400">Master’s in Computer Applications</span> from
                                <a
                                    className="link text-blue-500"
                                    href="http://www.gcekarad.ac.in/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {" "}GCE Karad
                                </a>. My journey in tech has always been fueled by curiosity, and that same curiosity drives me today.
                                Lately, I’ve been deeply focused on <span className="text-green-400">building web applications, native mobile applications</span>, and refining my skills in <span className="text-green-400">front-end development, UI/UX design, and open-source contributions</span>.
                                I’m always open to <span className="text-green-400">tech discussions, collaboration opportunities, and innovative projects</span>—let’s connect!
                            </p>
                        </div>
                    </section>
                </div>

                <div className="mt-12">
                    <h2 className="text-4xl font-semibold">Experience</h2>
                    <section>
                        <ul className="space-y-6 mt-10 text-coolGray-500 pb-10">
                            <li className="flex items-center">
                                <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained rounded flex-shrink-0 bg-white">
                                    <Image
                                        width={150}
                                        height={150}
                                        alt="courseplay-logo"
                                        src={"/Courseplay-Logo.png"}
                                    />
                                </div>
                                <div className="ml-4 sm:ml-6">
                                    <div className="text-gray-50 text-lg">
                                        Software Engineer{" "}
                                        <span className="text-green-400 whitespace-nowrap">
                                            @{" "}
                                            <a
                                                href="https://courseplay.co/"
                                                target="_blank"
                                                className="link"
                                                rel="noreferrer"
                                            >
                                                Courseplay
                                            </a>
                                        </span>
                                    </div>
                                    <p className="text-sm font-semibold mt-1.5">
                                        Dececmber 2023 &nbsp;—&nbsp; Now
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-center">
                                <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained rounded flex-shrink-0 bg-white">
                                    <Image
                                        width={150}
                                        height={150}
                                        alt="plus91 logo"
                                        src={"/logo.jpg"}
                                    />
                                </div>
                                <div className="ml-4 sm:ml-6">
                                    <div className="text-gray-50 text-lg">
                                        Software Developer{" "}
                                        <span className="text-green-400 whitespace-nowrap">
                                            @{" "}
                                            <a
                                                href="https://plus91.in/v2/"
                                                target="_blank"
                                                className="link"
                                                rel="noreferrer"
                                            >
                                                Plus91 Technologies
                                            </a>
                                        </span>
                                    </div>
                                    <p className="text-sm font-semibold mt-1.5">
                                        March 2022 &nbsp;—&nbsp; November 2023
                                    </p>
                                </div>
                            </li>
                            {/* <li className="flex items-center">
                                <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained rounded flex-shrink-0 bg-white">
                                    <Image
                                        width={150}
                                        height={150}
                                        alt="plus91 logo"
                                        src={"/SpaciousTech-Logo.png"}
                                    />
                                </div>
                                <div className="ml-4 sm:ml-6">
                                    <div className="text-gray-50 text-lg">
                                        Software Developer Intern{" "}
                                        <span className="text-green-400 whitespace-nowrap">
                                            @{" "}
                                            <a
                                                href="http://spacioustech.com/"
                                                target="_blank"
                                                className="link"
                                                rel="noreferrer"
                                            >
                                                Spacious Tech
                                            </a>
                                        </span>
                                    </div>
                                    <p className="text-sm font-semibold mt-1.5">
                                        March 2022 &nbsp;—&nbsp; July 2022
                                    </p>
                                </div>
                            </li> */}
                        </ul>
                    </section>
                </div>
            </section>
        </main>
    );
}
