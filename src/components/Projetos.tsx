import { Container } from "./container";
import { CardsProjetos } from "./CardsProjetos";


export function Projetos() {
    return (
        <section className="w-full h-full p-10 m-auto" id="Projetos">
            <Container>
                <div className="text-center mx-auto pb-5">
                    <h1 className="text-zinc-950 text-4xl font-bold mb-4 pb-2">Outras obras do autor</h1>

                </div>
            </Container>
            <CardsProjetos/>
            

            
        </section>
    );
}
