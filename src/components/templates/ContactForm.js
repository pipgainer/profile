import React, { useState } from "react";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission logic here
		console.log(formData);
		// You can send the data to a backend or perform any other actions here
	};

	return (
		<div className="w-full mx-auto">
			<form
				onSubmit={handleSubmit}
				className="bg-zinc-900 rounded shadow-xl w-4/5 mx-auto p-6 md:p-12 mt-10 relative overflow-hidden border-t-4 border-green-600 lg:border-none"
			>
				<div className="mb-4">
					<label
						htmlFor="name"
						className="block text-gray-300 font-bold mb-2"
					>
						Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						placeholder="Enter Your Full Name"
						value={formData.name}
						onChange={handleChange}
						className="border border-zinc-700 focus:border-green-600  rounded-lg p-4 w-full bg-zinc-950 text-white"
						required
					/>
				</div>
				<div className="mb-4">
					<label
						htmlFor="email"
						className="block text-gray-300 font-bold mb-2"
					>
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="Enter Your Mail ID"
						value={formData.email}
						onChange={handleChange}
						className="border border-zinc-700   rounded-lg p-4 w-full bg-zinc-950 text-white"
						required
					/>
				</div>
				<div className="mb-4">
					<label
						htmlFor="message"
						className="block text-gray-300 font-bold mb-2"
					>
						Message
					</label>
					<textarea
						id="message"
						name="message"
						value={formData.message}
						placeholder="Type your Message"
						onChange={handleChange}
						className="border border-zinc-700 h-32 resize-none  rounded-lg p-4 w-full bg-zinc-950 text-white"
						required
					/>
				</div>
				<button
					class="bg-gray-50 text-gray-900 px-7 py-3 font-bold text-xl rounded-lg inline-flex items-center justify-center transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring focus:ring-green-400 focus:ring-opacity-80 transition mt-10"
					type="submit"
				>
					Send
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="18"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="inline-block ml-1.5 mt-0.5"
					>
						<line x1="22" y1="2" x2="11" y2="13"></line>
						<polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
					</svg>
				</button>
			</form>
		</div>
	);
};

export default ContactForm;
