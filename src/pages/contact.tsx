import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";
import DefaultLayout from "@/layout/Default";

import FormContact from "@/components/Form/FormContact";
import Heading from "@/components/Heading";
import Text from "@/components/Text";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const Contact = () => {
    return (
        <DefaultLayout>
            <section className="relative w-full h-full">
                <div className="relative w-full h-fit flex items-center bg-[url('/sample/about.jpg')] bg-fixed bg-[center_top] bg-cover bg-no-repeat">
                    <div className="absolute w-full h-full bg-black/50 overlay z-10"></div>
                    <div className="relative container py-28 z-20">
                        <div className="flex items-center justify-center">
                            <Breadcrumb />
                        </div>
                    </div>
                </div>
                <div className="container mt-8">
                    <div className="flex flex-col lg:flex-row items-start">
                        <div className="w-full lg:w-6/12">
                            <span className="px-4 py-1 text-sm font-thin bg-blue-300 text-blue-500 rounded-3xl">Let`s Talk</span>
                            <Heading level={1} className="text-4xl font-semibold mt-6">Contact Us</Heading>
                            <Text className="text-gray-500 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?</Text>
                            <div className="flex flex-col items-start gap-y-8">
                                <div className="flex items-start mt-4">
                                    <span className="p-5 bg-blue-100 rounded-full">
                                        <MapPinIcon className="w-6 h-6 text-blue-500" />
                                    </span>
                                    <div className="flex flex-col gap-y-2">
                                        <Text className="text-lg text-gray-500 ml-2 !font-merriweather">Office</Text>
                                        <Text className="text-sm text-gray-500 ml-2">test</Text>
                                    </div>
                                </div>
                                <div className="flex items-start mt-4">
                                    <span className="p-5 bg-blue-100 rounded-full">
                                        <EnvelopeIcon className="w-6 h-6 text-blue-500" />
                                    </span>
                                    <div className="flex flex-col gap-y-2">
                                        <Text className="text-lg text-gray-500 ml-2 !font-merriweather">Email Address</Text>
                                        <ul className="ml-2">
                                            <li>
                                                <Link href="mailto:test@gmail.com" className="text-black font-raleway text-sm font-medium">test2Gmail.com</Link>
                                            </li><li>
                                                <Link href="mailto:test@gmail.com" className="text-black font-raleway text-sm font-medium">test2Gmail.com</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex items-start mt-4">
                                    <span className="p-5 bg-blue-100 rounded-full">
                                        <PhoneIcon className="w-6 h-6 text-blue-500" />
                                    </span>
                                    <div className="flex flex-col gap-y-2">
                                        <Text className="text-lg text-gray-500 ml-2 !font-merriweather">Phone Number</Text>
                                        <ul className="ml-2">
                                            <li>
                                                <Link href="mailto:test@gmail.com" className="text-black font-raleway text-sm font-medium">test2Gmail.com</Link>
                                            </li><li>
                                                <Link href="mailto:test@gmail.com" className="text-black font-raleway text-sm font-medium">test2Gmail.com</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12">
                            <FormContact />
                        </div>
                    </div>
                    <div className="my-8">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.990079780264!2d104.01715197560223!3d1.1674729621335997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d9893862343783%3A0xb7419b9deb2eb!2sPT.%20Inovasi%20Karya%20Batam!5e0!3m2!1sen!2sid!4v1718339111184!5m2!1sen!2sid"
                            width="100%"
                            height="500"
                            frameBorder="0"
                            style={{ border: 0 }}
                            aria-hidden="false"
                        />
                    </div>
                </div>
            </section>
        </DefaultLayout>
    )
}

export default Contact;