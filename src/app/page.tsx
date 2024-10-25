// @ts-nocheck
import RootLayout from "./layout";

import Header from "@/components/header";
import { SinopseLivro } from "@/components/SinopseLivro";
import { SobreAutor } from "@/components/SobreAutor";
import { Projetos } from "@/components/Projetos"
import { Footer }from "@/components/Footer";
import { Video } from "@/components/video";
import { Lancamento } from "@/components/lancamento";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <Header />
      <Video />
      <Lancamento />
      <SinopseLivro />
      <SobreAutor />
      <Projetos />
      <Footer />
    </div>
  );
}

