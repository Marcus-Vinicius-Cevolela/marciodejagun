import { Container } from "./container";
import { CalendarIcon, LocationMarkerIcon, ClockIcon } from "@heroicons/react/solid";

export function Lancamento() {
    return (
        <section className="w-[100%] h-[100%] p-11 m-auto flex-2 border" id="Lancamento">
            <Container>
                <div className="mx-auto pb-5 mt-12">
                    <h1 className="text-zinc-900 text-2xl font-bold mb-2 text-center pb-4 lg:text-3xl lg:font-bold lg:mb-4">
                        Sobre o Lançamento
                    </h1>
                    <div className="mx-auto pb-5 mt-12 flex flex-col lg:flex-row lg:justify-center lg:items-center">
                        <div className="text-center lg:text-left max-w-[820px] mx-auto lg:mx-0 lg:mr-[100px]">
                            <p className="text-zinc-900 text-base font-semibold mb-2 lg:text-center lg:text-2xl flex items-center justify-center lg:justify-center min-w-[250px]">
                                <CalendarIcon className="h-8 w-8 mr-2 text-red-800" />06/11/2024
                            </p>
                            <p className="text-zinc-900 text-base font-semibold mb-2 lg:text-center lg:text-2xl flex items-center justify-center lg:justify-center min-w-[250px]">
                                <ClockIcon className="h-8 w-8 mr-2 text-red-800" />18h30
                            </p>
                            <p className="text-zinc-900 text-base font-semibold mb-2 lg:text-center lg:text-lg flex items-center justify-center lg:justify-center min-w-[250px]">
                                <LocationMarkerIcon className="h-10 w-10 text-red-800" /> Casa de Malandro - Rua do Lavradio, 170, Lapa
                            </p>

                            <div className="pt-3 flex justify-center lg:justify-center space-x-6">
                                <button className="w-60 h-34 text-lg font-semibold bg-red-800 text-amber-400 py-2 px-[24px] rounded-bl-3xl rounded-tr-3xl hover:bg-red-900 hover:scale-110 transition-transform">
                                    <a href="https://www.livrarialitteris.com.br/buscar?q=Márcio+de+Jagun" target="_blank" rel="noopener noreferrer">
                                        Quero comprar agora e retirar no lançamento
                                    </a>
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-center items-center w-[300px] h-[225pxgit] mt-6 md:w-[500px] md:h-[375px] lg:mt-0 lg:w-[600px] lg:h-[450px]">
                            <div className="relative overflow-hidden square-map w-full h-full">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d324.8299527387285!2d-43.18220692552295!3d-22.91221275961225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x996325f90f1cbb%3A0xb1b7433d4292e156!2sCasa%20de%20Malandro!5e0!3m2!1spt-BR!2sbr!4v1729787440177!5m2!1spt-BR!2sbr"
                                    className="w-full h-full"
                                    frameBorder="0"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
