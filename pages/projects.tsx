import React from "react";

const projects = () => {
	return (
		<>
			<section className="container mx-auto px-8 2xl:px-36 text-center py-32">
				<h1 className="text-3xl sm:text-5xl font-bold text-white">
					All my projects
				</h1>
				<p className="text-coolGray-400 font-semibold mt-8 text-lg">
					All the things I built till date, some of them being
					improved even today!
				</p>
			</section>
			<section className="container mx-auto px-8 pb-14 py-4 2xl:px-36">
				<div className="grid gap-6 group grid-cols-1 mt-12 md:grid-cols-2 lg:grid-cols-3 pointer-events-none">
					<div className="flex pointer-events-auto">
						<div className="text-coolGray-400 bg-zinc-900 p-6 rounded-lg w-full flex flex-col transform transition lg:hover:scale-105 hover:full-opacity lg:hover:shadow-2xl">
							<section className="flex justify-between">
								<span className="text-coolGray-500">
									Sep 5, 2023
								</span>
							</section>
							<h3 className="text-3xl font-semibold mt-8">
								Ultimate Tic Tac Toe
							</h3>
							<p className="text-coolGray-400 text- mt-4 mb-8">
								Ultimate tic-tac-toe (also known as super
								tic-tac-toe, meta tic-tac-toe or (tic-tac-toe))
								is a board game composed of nine tic-tac-toe
								boards arranged in a 3 × 3 grid.
							</p>
							<ul className="flex flex-wrap mt-auto mb-6 text-coolGray-500 text-sm font-semibold leading-6">
								<li>Next.js&nbsp;•&nbsp;</li>
								<li>TailwindCss&nbsp;•&nbsp;</li>
								<li>TypeScript&nbsp;•&nbsp;</li>
								<li>React</li>
							</ul>
							<p className="flex justify-between text-green-400">
								<a
									href="https://ultimate-tic-tac-toe-vgsc.vercel.app/"
									target="_blank"
									className="link"
								>
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
										className="inline-block mr-1.5 -mt-1"
									>
										<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
										<polyline points="15 3 21 3 21 9"></polyline>
										<line
											x1="10"
											y1="14"
											x2="21"
											y2="3"
										></line>
									</svg>
									Live
								</a>
								<a
									href="https://github.com/pipgainer/ultimate-tic-tac-toe"
									target="_blank"
									className="link"
								>
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
										className="inline-block mr-1.5 -mt-1"
									>
										<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
										<polyline points="15 3 21 3 21 9"></polyline>
										<line
											x1="10"
											y1="14"
											x2="21"
											y2="3"
										></line>
									</svg>
									Github
								</a>
							</p>
						</div>
					</div>
					<div className="flex pointer-events-auto">
						<div className="text-coolGray-400 bg-zinc-900 p-6 rounded-lg w-full flex flex-col transform transition lg:hover:scale-105 hover:full-opacity lg:hover:shadow-2xl">
							<section className="flex justify-between">
								<span className="text-coolGray-500">
									Sep 5, 2023
								</span>
							</section>
							<h3 className="text-3xl font-semibold mt-8">
								3D Shirt Designer
							</h3>
							<p className="text-coolGray-400 text- mt-4 mb-8">
								Create your own shirt design using different
								colors and uploading different images.
							</p>
							<ul className="flex flex-wrap mt-auto mb-6 text-coolGray-500 text-sm font-semibold leading-6">
								<li>Next.js&nbsp;•&nbsp;</li>
								<li>Threejs&nbsp;•&nbsp;</li>
								<li>TailwindCss&nbsp;•&nbsp;</li>
								<li>TypeScript&nbsp;•&nbsp;</li>
								<li>React Fiber</li>
							</ul>
							<p className="flex justify-between text-green-400">
								<a
									href="https://3d-shirt-design.vercel.app/"
									target="_blank"
									className="link"
								>
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
										className="inline-block mr-1.5 -mt-1"
									>
										<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
										<polyline points="15 3 21 3 21 9"></polyline>
										<line
											x1="10"
											y1="14"
											x2="21"
											y2="3"
										></line>
									</svg>
									Live
								</a>
								<a
									href="https://github.com/pipgainer/3d-shirt-design"
									target="_blank"
									className="link"
								>
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
										className="inline-block mr-1.5 -mt-1"
									>
										<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
										<polyline points="15 3 21 3 21 9"></polyline>
										<line
											x1="10"
											y1="14"
											x2="21"
											y2="3"
										></line>
									</svg>
									Github
								</a>
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default projects;
