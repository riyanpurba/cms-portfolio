import Image from "next/image";

const CardClient = ({ data }: any) => {
    return (
        <>
            <div className={`flex items-center justify-center cursor-pointer h-full transition-[0.3s] shadow-[3px_8px_19px_rgba(30,30,30,0.09)] px-0 py-[30px] group rounded-[10px] ${data.id % 2 == 0 ? 'bg-[#F6F6F6]' : 'bg-white'}`}>
                <Image src={data.image} fetchPriority="high" alt={data.brand} width={150} height={150} className="transition-all duration-300 group-hover:scale-110" />
            </div>
        </>
    )
};

export default CardClient;