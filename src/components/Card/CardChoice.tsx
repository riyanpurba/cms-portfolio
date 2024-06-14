import Heading from "../Heading";
import Text from "../Text";

const CardChoice = ({ data }: any) => {
    return (
        <div className="relative p-5 lg:p-10 md:p-5 border border-white rounded-xl bg-white overflow-hidden flex flex-col md:flex-col items-center justify-between group hover:shadow-[0px_0px_14px_0px_rgba(0,0,0,0.09)] transition-all">
            <div className="w-20 h-20 bg-blue-400 rounded-[50%] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10 bg-white p-2 rounded-[50%] fill-blue-400 group-hover:rotate-90 transition-all">
                    <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z"></path>
                </svg>
            </div>
            <Heading level={3} className="text-black text-2xl py-4 text-center">{data.heading}</Heading>
            <Text className="text-gray-700 text-center">{data.description}</Text>
        </div>
    )
};

export default CardChoice;