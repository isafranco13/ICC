import Intro from "@/components/Intro";
import Catalog from "@/components/Catalog";
import QBP from "@/components/QBP";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Intro />
      <Catalog/>
      <QBP />
      <Footer />

    </main>
  );
}
