
import CardTestimonial from "../Card/CardTestimonial";
import Heading from "../Heading";
import Text from "../Text";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";

import { testimonial } from "@/json/testimonial";
import Image from "next/image";

const Testimonial = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        }
    };
    return (
        <section className="relative w-full h-auto py-20 bg-white">
            <Image src="/sample/bg_footer.png" fetchPriority="high" alt="footer" layout="fill" objectFit="cover" objectPosition="botton" className="z-10 fill-white" />
            <div className="relative container z-10">
                <div className="flex flex-col items-center justify-between">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0, scale: .8 },
                            visible: { opacity: 1, scale: 1, transition: { delay: .10 } }
                        }}
                        className="w-full"
                    >
                        <div className="mb-7.5 flex flex-col justify-center items-center text-center lg:text-left gap-y-4">
                            <Heading level={2} className="text-black text-xl">TESTMONIAL</Heading>
                            <Heading level={6} className="text-gray-600 text-4xl">WHAT OUR CLIENTS SAY’S</Heading>
                        </div>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0, scale: .8 },
                            visible: { opacity: 1, scale: 1, transition: { delay: .10 } }
                        }}
                        className="w-full"
                    >
                        <Carousel
                            responsive={responsive}
                            ssr={true} // means to render carousel on server-side.
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={6000}
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                        >
                            {
                                testimonial.map((item, index) => (
                                    <div key={index} className='bg-transparent relative'>
                                        <CardTestimonial name={item.name} position={item.position} message={item.message} />
                                    </div>
                                ))
                            }
                        </Carousel>
                    </motion.div>
                </div>
            </div>
        </section>
    )
};

export default Testimonial;