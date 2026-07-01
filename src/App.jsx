import { useEffect } from "react"
import { FirstPage } from "./components/first-page"
import { ForthPage } from "./components/forth-page"
import { LastFooterPage } from "./components/last-footer-page"
import { MusicPage } from "./components/music-page"
import { SecondPage } from "./components/second-page"
import { ThirdPage } from "./components/third-page"
import AOS from 'aos';
import 'aos/dist/aos.css';

function App ({isOpened}) {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <>
      <MusicPage isOpened={isOpened} />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <ForthPage />
      <LastFooterPage />
    </>
  )
}

export default App
