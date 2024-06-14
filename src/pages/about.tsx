import DefaultLayout from "@/layout/Default";

import Breadcrumb from "@/components/Breadcrumb";
import Heading from "@/components/Heading";
import Text from "@/components/Text";
import Image from "next/image";

const About = () => {
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
                <div className="container">
                    <div className="flex flex-col xl:flex-row lg:flex-col items-start mt-10">
                        <div className="w-full xl:w-1/2 lg:w-full md:w-full relative flex flex-col xl:flex-row lg:flex-row md:flex-row items-end md:justify-center mb-0 xl:mb-[140px] lg:mb-[140px] md:mb-[140px]">
                            <Image src="/sample/about-1.jpg" alt="About Image" width={416} height={406} className="border-[8px] border-white rounded-[8px] shrink-0" />
                            <Image src="/sample/about-2.jpg" alt="About Image" width={435} height={290} className="hidden xl:block lg:block md:block border-[8px] border-white rounded-[8px] shrink-0 -ml-[272px] -mb-[140px]" />
                        </div>
                        <div className="w-full xl:w-1/2 lg:w-full md:w-full">
                            <Heading level={2} className="text-3xl">Our <strong className="text-blue-600">Story</strong></Heading>
                            <Text className="text-base my-4">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti repudiandae incidunt inventore repellat qui fugiat, corporis unde voluptate facere ad laboriosam error, iste pariatur, fuga iure suscipit exercitationem! Sit, adipisci.
                            </Text>
                            <Text className="text-base">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti repudiandae incidunt inventore repellat qui fugiat, corporis unde voluptate facere ad laboriosam error, iste pariatur, fuga iure suscipit exercitationem! Sit, adipisci.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti repudiandae incidunt inventore repellat qui fugiat, corporis unde voluptate facere ad laboriosam error, iste pariatur, fuga iure suscipit exercitationem! Sit, adipisci.
                            </Text>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center bg-white py-16">
                        <div className="md:w-1/2 p-4">
                            <div className="bg-blue-900 text-white p-8">
                            <h2 className="text-3xl font-bold mb-4">VISI</h2>
                            <p className="text-lg">
                                Visi Dicoding adalah menjadi platform edukasi teknologi terdepan yang mendorong akses literasi digital yang lebih luas untuk semua.
                            </p>
                            </div>
                            {/* <Image src={visionImage} alt="Visi Image" className="w-full h-auto" /> */}
                        </div>
                        <div className="md:w-1/2 p-4">
                            <div className="bg-gray-100 p-8">
                            <h2 className="text-3xl font-bold mb-4">MISI</h2>
                            <p className="text-lg">
                                Misi Dicoding adalah mengakselerasi transisi Indonesia menuju dunia digital melalui pendidikan teknologi yang mentransformasi kehidupan.
                            </p>
                            </div>
                            {/* <Image src={missionImage} alt="Misi Image" className="w-full h-auto" /> */}
                        </div>
                    </div>
                </div>
            </section>
        </DefaultLayout>
    );
};

export default About;