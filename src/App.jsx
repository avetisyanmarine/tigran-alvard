import { useEffect } from "react"
import { FirstPage } from "./components/first-page"
import { ForthPage } from "./components/forth-page"
import { LastFooterPage } from "./components/last-footer-page"
import { MusicPage } from "./components/music-page"
import { SecondPage } from "./components/second-page"
import { ThirdPage } from "./components/third-page"
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });

  }, []);

  return (
    <>
      <MusicPage />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <ForthPage />
      <LastFooterPage />
    </>
  )
}

export default App
