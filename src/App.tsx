import './App.css'
import DarkVeil from '../components/DarkVeil.tsx';
import Navigation from '../components/Navigation.tsx';
import Header from '../components/Header.tsx';
import Main from "../components/Main.tsx"
import { Projects } from '../components/Projects.tsx';
function App() {

  return (
    <div className='relative mx-12 min-h-[200vh]'>

      <div className='fixed inset-0 -z-10'>
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.5}
          scanlineFrequency={0}
          warpAmount={0}
        />
      </div>
      <div className='relative top-50'>
        <Navigation />
        <Header />
        <Main />
        <Projects/>
      </div>
    </div>
  )
}

export default App
