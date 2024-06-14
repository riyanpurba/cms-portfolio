import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Heading from "../Heading";
import Text from "../Text";
import Button from "../Button";

const Hero = () => {
    return (
        <section className="relative w-full h-screen flex items-center p-0 m-0 bg-[url('/sample/banner.png')] bg-fixed bg-center bg-cover bg-no-repeat">
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
            <div className="realtive container z-50">
                <div className="flex items-center gap-4">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0, scale: .8 },
                            visible: { opacity: 1, scale: 1, transition: { delay: .4 } }
                        }}
                        className="flex flex-col gap-y-4 w-full lg:w-6/12 justify-center items-start p-8 text-center lg:text-left md:text-center"
                    >
                        <Heading level={1} className="text-white text-4xl">Innovating for a Better Tomorrow</Heading>
                        <Text className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?</Text>
                        <div className="flex flex-1 flex-col md:flex-row items-center justify-center text-center mx-auto lg:mx-0 gap-2">
                            <Button className="group bg-gradient-to-br from-blue-400 to-blue-600 text-white pr-[15px] pl-[50px] py-5">
                                <span>What We Do</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10 bg-black transition-[0.4s] duration-[cubic-bezier(0,0,0.3642,1)] ml-[30px] p-2.5 rounded-[50%] fill-white group-hover:scale-[1.15]"><path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z"></path></svg>
                            </Button>
                            <Button className="group bg-slate-400 border text-white pr-[15px] pl-[50px] py-5">
                                <span>View Works</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10 bg-black transition-[0.4s] duration-[cubic-bezier(0,0,0.3642,1)] ml-[30px] p-2.5 rounded-[50%] fill-white group-hover:scale-[1.15]"><path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z"></path></svg>
                            </Button>
                        </div>
                        
                    </motion.div>
                    <div className="hidden lg:block p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-6/12 items-center justify-between">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0, scale: .8 },
                                visible: { opacity: 1, scale: 1, transition: { delay: .4 } }
                            }}
                            className="relative overflow-hidden w-[450px] h-[450px] mt-16 mx-auto rounded-[0px_50%_50%] shadow-md"
                        >
                            <Image src="/sample/hero.jpg" fetchPriority="high" loading="lazy" alt="hero" layout="fill" objectFit="cover" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;