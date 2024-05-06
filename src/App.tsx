
import { useEffect, useState } from 'react'
import './App.css'
import { About } from './componets/About'
import { Blog } from './componets/Blog'
import { Contact } from './componets/Contact'
import { Footer } from './componets/Footer'
import { Header } from './componets/Header'
import { Hero } from './componets/Hero'
import { Pricing } from './componets/Pricing'
import { Services } from './componets/Services'
import { Teams } from './componets/Teams'
import { Testimonials } from './componets/Testimonials'
import  Works from './componets/Works'
import { getWorksData } from './data/worksData'

//const Works = lazy(() => import('./componets/Works.tsx'));
// const Works = lazy(() => {
//   return new Promise(resolve =>{
//     setTimeout(() => {
//       resolve(import('./componets/Works.tsx'))
//     }, 2000)
//   })
// })

interface WorksData {
  id: number,
  link: string,
  image: string,
  title: string,
  subtitle: string
}

function App() {
  const [data, setData] = useState<WorksData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await getWorksData();
        setData(fetchedData as any); // Establece los datos en el estado
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='App'>
      <header id='header'>
        <Header />
      </header>
      <main>
        <Hero />
        <About/>
        <Services/>
        <Works
          data={data}
        />
        <Teams/>
        <Testimonials/>
        <Pricing/>
        <Blog/>
        <Contact/>
      </main>
      <footer id='footer'>
        <Footer/>
      </footer>
    </div>
  )
}

export default App
