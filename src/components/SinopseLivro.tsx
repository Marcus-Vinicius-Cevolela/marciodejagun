import { Container } from "./container"
import Image from "next/image"
import Livro from "@/assets/filosofia_descolonial.png"


export function SinopseLivro() {
    return (
        <section className="w-[100%] h-[100%] p-11 m-auto flex-2 border" id="SinopseLivro">
            <Container>
                <div className="mx-auto pb-5 mt-12">
                    <Image
                        className="hidden md:block lg:block"
                        src={Livro}
                        alt="Capa do livro filosofia descolonial"
                        width={250}
                        height={140}
                    />
                </div>

                <div className="text-center max-w-[820px] mx-auto mt-12">
                    <h1 className="text-zinc-900 text-3xl font-bold mb-4">Sobre o livro</h1>
                    <p className="text-zinc-900 text-lg font-semibold mb-4">Filosofia Descolonial do Candomblé Nagô propõe um mergulho nas trocas culturais e as ressignificações teológicas, geradas pelo sincretismo, que moldaram essa rica tradição. O livro vai além de questões religiosas e analisa influências que vêm de diversas fontes: afro-islâmicas, afro-católicas, inter-africanas e afro-indígenas, tanto antes quanto depois da diáspora. Mais do que isso, o texto também mostra como o racismo e o etnocentrismo afetaram a forma como a religiosidade e a cultura afro-brasileira foram vistas e compreendidas ao longo do tempo.</p>

                    <div className="pt-3 flex justify-center space-x-6">
                        <button className="w-40 h-14 text-lg font-semibold bg-red-800 text-white px-4 rounded-bl-3xl rounded-tr-3xl hover:bg-red-900 hover:scale-110 transition-transform">
                            <a href="https://www.livrarialitteris.com.br/buscar?q=Márcio+de+Jagun" target="_blank" rel="noopener noreferrer">
                                Adquira já o seu!
                            </a>
                        </button>
                    </div>
                </div>


            </Container>

        </section>
    )
} 