// @ts-nocheck
import RootLayout from "./layout";

import Header from "@/components/header";
import { SinopseLivro } from "@/components/SinopseLivro";
import { SobreAutor } from "@/components/SobreAutor";
import { Projetos } from "@/components/Projetos"
import { Footer }from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <Header />
      <SinopseLivro />
      <SobreAutor />
      <Projetos />
      <Footer />
    </div>
  );
}

