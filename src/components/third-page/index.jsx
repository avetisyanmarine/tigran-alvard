import {
  ThirdPagePart,
  ThirdPagePartCalendar,
  ThirdPagePartContext,
  ThirdPagePartMini,
} from "./styled";
import { Container } from "../../GlobalStyle";
import Church from "../../assets/image/church.png";
import Haverjutyun from "../../assets/image/haverjutyun.webp";
import Kenac from "../../assets/image/kenac.png";
import { ThirdPageBlock } from "./third-page-block";

export const ThirdPage = () => {
  return (
    <ThirdPagePart>
      <Container>
        <h2 className="mb-12!">Ծրագիր</h2>
        <ThirdPagePartContext>
          <ThirdPageBlock
            imageSize={114}
            ImageSrc={Haverjutyun}
            number={"12:00"}
            bigText="ՀԱՐՍԻ ՏՈՒՆ"
            smallText="գյուղ Մրգաստան փող․ 19, տուն 6"
            link={"https://maps.app.goo.gl/5yivC4QDbv5KeioY9?g_st=it"}
          />
            <ThirdPageBlock
              imageSize={114}
              ImageSrc={Church}
              number={"14:00"}
              bigText="ՊՍԱԿԱԴՐՈՒԹՅՈՒՆ"
              smallText="Սուրբ Հռիփսիմե եկեղեցի"
            />
          <ThirdPageBlock
            imageSize={114}
            ImageSrc={Haverjutyun}
            number={"15:30"}
            bigText="ՓԵՍԱՅԻ ՏՈՒՆ"
            smallText="գյուղ Մրգաստան փող․ 2, տուն 5"
            link={"https://maps.app.goo.gl/ngeb2iVHYXUBGcy27?g_st=it"}
          />
          <ThirdPageBlock
            line={true}
            ImageSrc={Kenac}
            imageSize={149}
            number={"17:30"}
            bigText="ՀԱՐՍԱՆՅԱՑ ՀԱՆԴԻՍՈՒԹՅՈՒՆ"
            smallText="Արև Ռեստորան"
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
