// @ts-nocheck
import RootLayout from "./layout";

import Header from "@/components/header";
import { SinopseLivro } from "@/components/SinopseLivro";
import { SobreAutor } from "@/components/SobreAutor";
import { Projetos } from "@/components/Projetos"
import { Footer }from "@/components/Footer";
import { Video } from "@/components/video";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <Header />
      <SinopseLivro />
      <SobreAutor />
      <Video />
      <Projetos />
      <Footer />
    </div>
  );
}

