import MainPhoto from "../../assets/image/mainPhoto.webp";
import { Container, Flexible } from "../../GlobalStyle";
import { FirstPagePart, FirstPagePartContext } from "./styled";
import Srtik from "../../assets/image/srtik.png";

export const FirstPage = () => {
  return (
    <FirstPagePart>
      <img src={MainPhoto} />
      <Container>
        <FirstPagePartContext>
          <div
            className="text-[#030303]"
            style={{
              textShadow: "4px 2px 10px rgba(255, 255, 255, 0.7)",
            }}
          >
            <h2 className="text-[32px]!">Հարսանյաց</h2>
            <h2 className="ml-35 mt-1 text-[32px]!">Հրավեր</h2>
          </div>
          <Flexible>
            <h1
              className="absolute bottom-38"
              style={{
                fontWeight: 600,
                textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
              }}
            >
              Ռազմիկ & Դիանա
            </h1>
            <img src={Srtik} className="absolute bottom-10 invert-100 brightness-0" />
          </Flexible>
        </FirstPagePartContext>
      </Container>
    </FirstPagePart>
  );
};
