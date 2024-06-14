import Image from "next/image";

import Heading from "../Heading";
import Text from "../Text";

const CardService = ({ data }: any) => {
    return (
        <div className='relative p-7.5 duration-1000 rounded icon-bx-wraper style-1 box-hover text-center mb-7.5'>
            <div className="icon-bx-md bg-yellow shadow-[0_2px_15px_rgba(255,168,8,0.5)] text-white inline-block text-center rounded-full size-[90px] leading-[90px] mt-6 mb-[45px] relative z-1">
                <Image src="/favicon.ico" fetchPriority="high" width={90} height={90} alt="strategy" />
            </div>
            <div className="overflow-hidden">
                <Heading level={4} className="mb-[15px] text-black">Strategy & Research</Heading>
                <Text className="text-black">Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. </Text>
            </div>
        </div>
    )
};

export default CardService;