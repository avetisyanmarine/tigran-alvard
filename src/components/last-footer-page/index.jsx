import { Container, Flexible } from "../../GlobalStyle";
import { LastFooterPagePart, LastFooterPagePartContext } from "./styled";
import PhoneSvg from "../../assets/vectors/Phone.svg";

export const LastFooterPage = () => {
  return (
    <LastFooterPagePart className="bg-[#1e1e1e] rounded-tl-[100px] pt-[10px]">
      <Container>
        <LastFooterPagePartContext>
          <p>Հրավիրատոմսը պատրաստվել է</p>
          <Flexible className="items-center justify-center gap-2 mt-4!">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.75"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
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
