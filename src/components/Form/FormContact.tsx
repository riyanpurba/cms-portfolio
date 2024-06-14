import { useState } from "react";

import Button from "../Button";
import Heading from "../Heading";

const FormContact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <form onSubmit={handleSubmit} className="shadow-[3px_8px_19px_rgba(30,30,30,0.09)] p-10 rounded-xl">
            <Heading level={2} className="text-2xl font-semibold text-left mb-8">Get in Touch</Heading>
            <div className="grid gap-6 gap-y-4 text-sm grid-cols-1 md:grid-cols-6">
                <div className="md:col-span-6">
                    <label className="font-medium font-raleway" htmlFor="full_name">Full Name</label>
                    <input type="text" name="full_name" id="full_name" className="border-b mt-2 rounded p-4 w-full bg-gray-50 focus:bg-gray-100 hover:bg-gray-100 outline-none" value="" placeholder="Full Name" />
                </div>

                <div className="md:col-span-3">
                    <label className="font-medium font-raleway" htmlFor="email">Email Address</label>
                    <input type="text" name="email" id="email" className="border-b mt-2 rounded p-4 w-full bg-gray-50 focus:bg-gray-100 hover:bg-gray-100 outline-none" value="" placeholder="email@domain.com" />
                </div>

                <div className="md:col-span-3">
                    <label className="font-medium font-raleway" htmlFor="phone">Phone Number</label>
                    <input type="text" name="phone" id="phone" className="border-b mt-2 rounded p-4 w-full bg-gray-50 focus:bg-gray-100 hover:bg-gray-100 outline-none" value="" placeholder="+62 *** **** ****" />
                </div>

                <div className="md:col-span-6">
                    <label className="font-medium font-raleway" htmlFor="subject">Subject</label>
                    <input type="text" name="subject" id="subject" className="border-b mt-2 rounded p-4 w-full bg-gray-50 focus:bg-gray-100 hover:bg-gray-100 outline-none" value="" placeholder="Subject" />
                </div>

                <div className="md:col-span-6">
                    <label className="font-medium font-raleway" htmlFor="message">Message</label>
                    <textarea name="message" id="message" className="border-b mt-2 rounded p-4 w-full bg-gray-50 focus:bg-gray-100 hover:bg-gray-100 outline-none" rows={5} placeholder="Message"></textarea>
                </div>
            </div>
            <Button className="bg-gradient-to-r from-blue-400 to-blue-500 text-white font-semibold px-8 py-4 mt-4 !mx-auto rounded">Submit</Button>
        </form>
    );
};

export default FormContact;