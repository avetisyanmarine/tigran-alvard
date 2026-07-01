import { Container, Flexible } from "../../GlobalStyle";
import { LastFooterPagePart, LastFooterPagePartContext } from "./styled";
import PhoneSvg from "../../assets/vectors/Phone.svg";
// import InstagramSvg from "../../assets/vectors/instagram.svg";

export const LastFooterPage = () => {
  return (
    <LastFooterPagePart className="bg-[#1e1e1e] rounded-tl-[100px] pt-[10px]">
      <Container>
        <LastFooterPagePartContext>
          <p>Հրավիրատոմսը պատրաստվել է</p>
          <Flexible className="items-center justify-center gap-2 mt-4!">
            {/* <img loading="lazy" src={InstagramSvg} width={21} alt="instagram" /> */}
            <a
              href="https://www.instagram.com/webinvite.am"
              target="_blank"
              className="underline! english text-[#fefefe]! text-[20px]"
              rel="noopener noreferrer"
            >
              webinvite.am
            </a>
            -ի կողմից
          </Flexible>
          <div style={{ marginTop: "20px" }}>
            <a
              href="tel:+37477506269"
              className="flex items-center mt-[20px] justify-center gap-2 text-white text-xl font-semibold transition-colors"
            >
              <img loading="lazy" src={PhoneSvg} width={20} alt="Phone" />
              077 50 62 69
            </a>
          </div>
        </LastFooterPagePartContext>
      </Container>
    </LastFooterPagePart>
  );
};
