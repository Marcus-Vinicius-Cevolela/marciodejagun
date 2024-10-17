import { Container } from "./container";
import { CardsProjetos } from "./CardsProjetos";


export function Projetos() {
    return (
        <section className="w-full h-full p-10 m-auto" id="Projetos">
            <Container>
                <div className="text-center mx-auto pb-5">
                    <h1 className="text-zinc-900 text-3xl font-bold mb-2 text-center pb-4 lg:text-3xl lg:font-bold lg:mb-4">Outras obras do autor</h1>

                </div>
            </Container>
            <CardsProjetos/>
            

            
        </section>
    );
}
