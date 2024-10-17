import { Container } from "./container";
import Image from "next/image";
import Autor from "@/assets/autor.jpg";

export function SobreAutor() {
    return (
        <section className="w-[100%] h-[100%] p-11 m-auto flex-2 border" id="SobreAutor">
            <Container>
                {/* Ajuste de layout: coluna em telas pequenas, linha em telas grandes */}
                <div className="mx-auto pb-5 mt-12 flex flex-col lg:flex-row lg:justify-center lg:items-start">
                    
                    {/* Texto centralizado em telas pequenas, alinhado à esquerda em telas grandes */}
                    <div className="text-center lg:text-left max-w-[820px] mx-auto lg:mx-0 mt-12 lg:mt-">
                        <h1 className="text-zinc-900 text-2xl font-bold mb-2 text-center pb-4 lg:text-3xl lg:font-bold lg:mb-4">Sobre o autor</h1>
                        <p className="text-zinc-900 text-base font-semibold mb-4 text-justify lg:text-center lg:text-xl">
                            Márcio de Jagun é autor de diversas obras que exploram a riqueza da cultura afro-brasileira e suas tradições. Com anos de dedicação à pesquisa e prática de religiões de matriz africana, ele se destaca como uma voz respeitada no campo. Seu trabalho abrange desde estudos sobre o Candomblé até explorações elaboradas sobre a língua e cultura iorubá, o que faz de suas obras referências no tema. Entre seus livros mais conhecidos estão Candomblé: Orí: A Cabeça como Divindade, Yorubá - Vocabulário Temático do Candomblé e Ewé: A Chave do Portal.
                        </p>
                    </div>

                    {/* Imagem: acima do texto em mobile, à direita em desktop, com margem de 150px em telas grandes */}
                    <div className="mx-auto pb-5 lg:pb-0 lg:pr-10 lg:mt-0 lg:ml-[315px]">
                        <Image
                            className="block w-[200px] h-[365px] md:w-[250px] md:h-[415px] lg:w-[300px] lg:h-[465px]"
                            src={Autor}
                            alt="Escritor Márcio de Jagun"
                            width={350} // Largura máxima para garantir a proporção
                            height={240} // Altura máxima para garantir a proporção
                            style={{ objectFit: 'contain' }} // Mantém a proporção da imagem
                        />
                    </div>

                </div>
            </Container>
        </section>
    );
}
