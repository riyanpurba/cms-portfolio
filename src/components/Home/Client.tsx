import Text from '../Text';
import Heading from '../Heading';
import { client } from '@/json/client'
import CardClient from '../Card/CardClient';

const Client = () => {
    return (
        <section className="relative w-full h-auto py-10 lg:py-20 flex items-center bg-white">
            <div className="container">
                <div className="flex flex-col items-center justify-center">
                    <Heading level={2} className="text-black text-4xl pb-8">Our <strong className="text-blue-600">Clients</strong></Heading>
                    {/* <Text className="text-black w-full lg:w-1/2 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</Text> */}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mt-10">
                    {
                        client.map((item, index) => (
                            <CardClient key={index} data={item} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
};

export default Client;