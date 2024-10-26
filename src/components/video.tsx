import { Container } from "./container"

export function Video() {
    return (
        <section className="w-[100%] h-[100%] p-11 m-auto flex-2" id="VideoAutor">
            <Container>
                <div className="mx-auto pb-5 mt-12">
                    <h1 className="text-zinc-900 text-2xl font-bold mb-2 text-center pb-4 lg:text-3xl lg:font-bold lg:mb-4">Veja um recado de nosso autor!</h1>
                    <div className="relative overflow-hidden">
                        <iframe 
                            src="https://res.cloudinary.com/dmpeh2wfy/video/upload/v1729034736/marcio-de-jagun.mp4" 
                            className="mx-auto w-[320px] h-[180px] md:w-[800px] md:h-[400px] lg:w-[848px] lg:h-[478px]"
                            frameBorder="0"
                            allowFullScreen
                        >
                        </iframe>
                    </div>
                </div>
            </Container>

        </section>
    )
}