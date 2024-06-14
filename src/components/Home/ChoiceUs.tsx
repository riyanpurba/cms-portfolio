import Heading from "../Heading";
import Text from "../Text";
import CardChoice from "../Card/CardChoice";
import { choiceUs } from "@/json/choiceus";

const ChoiceUs = () => {
    return (
        <section className="relative w-full h-auto py-10 lg:py-20 flex items-center bg-white">
            <div className="container">
                <div className="flex flex-col items-center justify-center">
                    <Text className="text-gray-500 text-lg font-semibold">Business Value</Text>
                    <Heading level={2} className="text-black text-4xl pb-8 pt-4">Why <strong className="text-blue-600">Choose Us?</strong></Heading>
                    <Text className="text-black w-full lg:w-1/2 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</Text>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                    {
                        choiceUs.map((item, index) => (
                            <CardChoice key={index} data={item} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
};

export default ChoiceUs;