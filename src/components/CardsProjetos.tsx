import Image from "next/image";
import Link from "next/link"
import ProjetosInfo from "@/data/ProjetosInfo";



export function CardsProjetos() {
    return (
        <div className="grid grid-cols-1 gap-4 md:grid md:grid-cols-2 md:gap-5 lg:grid lg:grid-cols-3 lg:gap-5">
            {ProjetosInfo.map((projeto, index) => (
                <a key={index} href={projeto.link} target="_blank" rel="noopener noreferrer" className="overflow-hidden shadow-lg hover:scale-105 transition-transform">
                    <Image
                        className="w-full"
                        src={projeto.image}
                        alt={`Projeto ${projeto.title}`}
                    />

                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-center">{projeto.title}</div>
                        <p className="text-xs text-justify lg:text-base lg:text-center ">{projeto.description}</p>
                    </div>
                </a>
            ))}
        </div> 
    );
}
