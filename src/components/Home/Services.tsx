import Heading from "../Heading";
import CardService from "../Card/CardService";
import { services } from "@/json/services";

const Services = () => {
    return (
        <section className="relative w-full h-auto py-20 bg-white/50 flex items-center justify-center">
            <div className="relative container z-20 bg-white rounded-xl p-4">
                <div className="flex flex-col items-center justify-center">
                    <Heading level={2} className="text-black text-4xl pb-8">Our <strong className="text-blue-600">Services</strong></Heading>
                    {/* <Text className="text-black w-full lg:w-1/2 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</Text> */}
                </div>
                <div className="w-8/12 mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                    {
                        services.map((item, index) => (
                            <CardService key={index} data={item} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Services;