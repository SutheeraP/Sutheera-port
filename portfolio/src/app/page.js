import Herosection from "./component/section/Herosection";
import Navbar from "./component/layout/Navbar";
import Aboutsection from "./component/section/Aboutsection";
import Coralcojai from "./component/project/Coralcojai";
import Footer from "./component/section/Footer";
import Apex from "./component/project/Apex";
import DuckyLucky from "./component/project/DuckyLucky";
import Mearai from "./component/project/Mearai";
import Contact from "./component/section/Contact";
import Project from "./component/section/Project";

export default function Home() {
  return (
    <main className="transition-all flex min-h-screen flex-col items-center justify-between bg-secondary text-slate-100">
      <Navbar />
      <Herosection />
      <Aboutsection />
      <Project/>
      <Coralcojai />
      <Apex />
      <DuckyLucky />
      <Mearai />
      <Contact />
      <Footer />
    </main>
  );
}
