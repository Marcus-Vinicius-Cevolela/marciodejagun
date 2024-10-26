import { Container } from "./container";
import { CardsProjetos } from "./CardsProjetos";


export function Projetos() {
    return (
        <section className="w-full h-full p-10 m-auto" id="Projetos">
            <Container>
                <div className="text-center mx-auto pb-5">
                    <h1 className="text-zinc-900 text-3xl font-bold mb-2 text-center pb-4 lg:text-3xl lg:font-bold lg:mb-4">Outras obras do autor</h1>
                    <button className="w-[305px] h-[75px] text-lg font-semibold bg-red-800 text-amber-400 px-2 rounded-bl-3xl rounded-tr-3xl hover:bg-red-900 hover:scale-110 transition-transform">
                                    <a href="https://www.livrarialitteris.com.br/r/hcfzfn" target="_blank" rel="noopener noreferrer">
                                        Adquira todos os livros do autor com um desconto especial!
                                    </a>
                                </button>
                </div>
            </Container>
            <CardsProjetos/>
            

            
        </section>
    );
}
