import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { GlobalStyle } from "./GlobalStyle.jsx";
import "./index.css";
import { preloadFonts } from "./fontLoader.js";
import { AnimatePresence, motion } from "framer-motion";
import WeddingInvitationEnvelope from "./components/wedding-invitation/index.jsx";

preloadFonts();

const Main = () => {
  const [isOpened, setIsOpened] = useState(false);
  useEffect(() => {
    if (!isOpened) {
      // Ֆիքսում ենք body-ն, որ չշարժվի
      document.body.style.position = "fixed";
      document.body.style.top = `0px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      // Վերադարձնում ենք նախկին վիճակին
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    }
  }, [isOpened]);

  return (
    <>
      <GlobalStyle />
      <App isOpened={isOpened} />
      <AnimatePresence>
        {!isOpened && (
          <WeddingInvitationEnvelope onOpen={() => setIsOpened(true)} />
        )}
      </AnimatePresence>
    </>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Main />
  </StrictMode>,
);
