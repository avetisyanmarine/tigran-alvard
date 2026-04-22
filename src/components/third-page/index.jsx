import {
  ThirdPagePart,
  ThirdPagePartCalendar,
  ThirdPagePartContext,
  ThirdPagePartMini,
} from "./styled";
import { Container } from "../../GlobalStyle";
import Haverjutyun from "../../assets/image/haverjutyun.png";
import Church from "../../assets/image/church.png";
import Kenac from "../../assets/image/kenac.png";
import { ThirdPageBlock } from "./third-page-block";

export const ThirdPage = () => {
  return (
    <ThirdPagePart>
      <Container>
        <h2>Ծրագիր</h2>
        <ThirdPagePartContext>
          <ThirdPageBlock
            imageSize={114}
            ImageSrc={Church}
            number={"14:20"}
            bigText="ՊՍԱԿԱԴՐՈՒԹՅՈՒՆ"
            smallText="Սուրբ Մարիամ Աստվածածին"
          />
          <ThirdPageBlock
            line={true}
            ImageSrc={Kenac}
            imageSize={159}
            number={"17:00"}
            bigText="ՀԱՐՍԱՆՅԱՑ ՀԱՆԴԻՍՈՒԹՅՈՒՆ"
            smallText="Հրաշք Այգի Ռեստորան"
          />
        </ThirdPagePartContext>
        <ThirdPagePartMini>
          <h3>Սիրով սպասում ենք</h3>
          <hr />
        </ThirdPagePartMini>
      </Container>
    </ThirdPagePart>
  );
};
