import Image from 'next/image'
import Herosection from './component/Herosection'
import Navbar from './component/Navbar'
import Aboutsection from './component/Aboutsection'
import Kmitljourney from './component/Kmitljourney'
import Coralcojai from './component/Coralcojai'
import Footer from './component/Footer'
import Apex from './component/Apex'

export default function Home() {
  return (
    <main className="transition-all flex min-h-screen flex-col items-center justify-between bg-secondary text-slate-100">
      <Navbar/>
      <Herosection/>
      <Aboutsection/>
      <Kmitljourney/>
      <Coralcojai/>
      <Apex/>
      <Footer/>
    </main>
  )
}
