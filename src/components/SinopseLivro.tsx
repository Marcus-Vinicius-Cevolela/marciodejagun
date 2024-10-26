import { Container } from "./container";
import Image from "next/image";
import Livro from "@/assets/filosofia_descolonial.png";

export function SinopseLivro() {
    return (
        <section className="w-[100%] h-[100%] p-11 m-auto flex-2" id="SinopseLivro">
            <Container>
                <div className="mx-auto pb-5 mt-12 flex flex-col items-center lg:flex-row lg:justify-center lg:items-start">
                    <div className="flex justify-center w-full lg:pr-[150px]">
                        <Image
                            className="block w-[40vw] max-w-[250px] min-w-[150px] h-auto object-contain mx-auto"
                            src={Livro}
                            alt="Capa do livro Filosofia Descolonial Do Candomblé Nagô"
                        />
                    </div>

                    <div className="text-center lg:text-left max-w-[820px] mx-auto lg:mx-0 mt-12">
                        <h1 className="text-zinc-900 text-2xl font-bold mb-2 text-center pb-4 lg:text-3xl lg:font-bold lg:mb-4">Sobre o livro</h1>
                        <p className="text-zinc-900 text-base font-semibold mb-4 text-justify lg:text-center lg:text-xl">
                            Filosofia Descolonial do Candomblé Nagô propõe um mergulho nas trocas culturais e as ressignificações teológicas, geradas pelo sincretismo, que moldaram essa rica tradição. O livro vai além de questões religiosas e analisa influências que vêm de diversas fontes: afro-islâmicas, afrocatólicas, inter-africanas e afro-indígenas, tanto antes quanto depois da diáspora. Mais do que isso, o texto também mostra como o racismo e o etnocentrismo afetaram a forma como a religiosidade e a cultura afro-brasileira foram vistas e compreendidas ao longo do tempo.
                        </p>

                        <div className="pt-3 flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-x-6 sm:space-y-0">
                            <button className="w-[305px] h-[75px] text-lg font-semibold bg-red-800 text-amber-400 px-2 rounded-bl-3xl rounded-tr-3xl hover:bg-red-900 hover:scale-110 transition-transform">
                                <a href="https://wa.me/p/8924974667537045/5521974054555" target="_blank" rel="noopener noreferrer">
                                    Compre e retire no lançamento com um brinde exclusivo
                                </a>
                            </button>

                            <button className="w-[305px] h-[75px] text-lg font-semibold bg-red-800 text-amber-400 px-2 rounded-bl-3xl rounded-tr-3xl hover:bg-red-900 hover:scale-110 transition-transform">
                                <a href="https://www.livrarialitteris.com.br/filosofia-descolonial" target="_blank" rel="noopener noreferrer">
                                    Compre e receba no conforto de sua casa com frete grátis
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
