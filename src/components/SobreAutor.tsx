import { Container } from "./container"
import Image from "next/image"
import Autor from "@/assets/autor.jpg"




export function SobreAutor() {
    return (
        <section className="w-[100%] h-[100%] p-10 m-auto flex-2 border" id="SobreAutor">
            <Container>
                
                <div className="text-center max-w-[820px] mx-auto mt-12">
                    <h1 className="text-zinc-900 text-3xl font-bold mb-4">Sobre o autor</h1>
                    <p className="text-zinc-900 text-lg font-semibold mb-4">Márcio de Jagun é autor de diversas obras que exploram a riqueza da cultura afro-brasileira e suas tradições. Com anos de dedicação à pesquisa e prática de religiões de matriz africana, ele se destaca como uma voz respeitada no campo. Seu trabalho abrange desde estudos sobre o Candomblé até explorações elaboradas sobre a língua e cultura iorubá, o que faz de suas obras referências no tema. Entre seus livros mais conhecidos estão Candomblé: Orí: A Cabeça como Divindade , Yorubá - Vocabulário Temático do Candomblé  e Ewé: A Chave do Portal.</p>
                </div>

                <div className="mx-auto pb-5 mt-12">
                    <Image
                        className="hidden md:block lg:block"
                        src={Autor}
                        alt="Escritor Márcio de Jagun"
                        width={350}
                        height={240}
                    />
                </div>

            </Container>


        </section>
    )
} 