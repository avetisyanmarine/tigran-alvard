import MainPhoto from "../../assets/image/mainPhoto.jpg";
import { Container, Flexible } from "../../GlobalStyle";
import { FirstPagePart, FirstPagePartContext } from "./styled";
import Srtik from "../../assets/image/srtik.png";

export const FirstPage = () => {
  return (
    <FirstPagePart>
      <img className="grayscale" src={MainPhoto} />
      <Container>
        <FirstPagePartContext>
          <div
            className="mt-5 text-[#030303]"
            style={{
              textShadow: "4px 2px 10px rgba(255, 255, 255, 0.7)",
            }}
          >
            <h2>Հարսանյաց</h2>
            <h2 className="ml-35 mt-2">Հրավեր</h2>
          </div>
          <Flexible>
            <h1
              className="absolute bottom-38"
              style={{
                fontWeight: 600,
                textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
              }}
            >
              Ռազ & Դիանա
            </h1>
            <img src={Srtik} className="absolute bottom-10" />
          </Flexible>
        </FirstPagePartContext>
      </Container>
    </FirstPagePart>
  );
};
