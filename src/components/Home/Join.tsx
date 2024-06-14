import Button from "../Button";
import Text from "../Text";

const Join = () => {
    return (
        <section className="relative py-10 m-0 bg-white">
            <div className="container">
                <div className="w-full lg:w-3/4 mx-0 lg:mx-auto flex flex-col lg:flex-row items-center justify-between">
                    <Text className="w-full lg:w-2/5 text-center lg:text-left pb-4 lg:pb-0 text-slate-800 capitalize text-2xl font-merriweather">Interested To Work With Us</Text>
                    <Button className="group bg-blue-400 border text-white shadow-md pr-[15px] pl-[50px] py-5">
                        <span>Get A Quotation</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10 bg-black transition-[0.4s] duration-[cubic-bezier(0,0,0.3642,1)] ml-[30px] p-2.5 rounded-[50%] fill-white group-hover:scale-[1.15]"><path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z"></path></svg>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Join;