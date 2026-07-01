import { Container, Flexible } from "../../GlobalStyle";
import { ForthPageBlock } from "./fortg-page-block";
import { ForthPagePart, ForthPagePartContext } from "./styled";
import Church from "../../assets/image/church.webp";
import Restaurant from "../../assets/image/restaurant.webp";
import Photo1 from "../../assets/image/photo1.webp";
import Photo2 from "../../assets/image/photo2.webp";
import Photo3 from "../../assets/image/photo3.webp";
import AttendanceGuests from "../AttendanceGuests";
import SaveTheDate from "../../assets/image/savethedate.webp";

export const ForthPage = () => {
  return (
    <ForthPagePart>
      <Container>
        <ForthPagePartContext>
          <ForthPageBlock
            ImageSrc={Church}
            bigText={"Սաղմոսավանք"}
            mapSrc={"https://maps.app.goo.gl/sz3hLJAiRQu8SB5h9"}
          />
          <ForthPageBlock
            ImageSrc={Restaurant}
            bigText={"Հրաշք Այգի Ռեստորան"}
            mapSrc={"https://maps.app.goo.gl/tb4FBFpASx47b8Lx8"}
          />
        </ForthPagePartContext>
        <img
          src={Photo1}
          alt="Restaurant"
          className="w-full my-10 rounded-[15px]"
        />
      </Container>
      <div className="text-center">
        <h2 className="mb-10">Դետալներ</h2>
        <Flexible>
          <Flexible className="w-full h-[278px] bg-white/45 p-5! font-[600]">
            Ձեզ հետ բերեք ՍԵՐ, ժպիտներ ու անսահման դրական էմոցիաներ. ինչպես նաև
            հարմարավետ կոշիկներ` պարելու համար:
            <br />
            <br />
            Հարսի պարի և հրավառության ընթացքում կխնդրենք ծնողներին ուշադիր լինել
            իրենց բալիկների նկատմամբ:
          </Flexible>
        </Flexible>
      </div>
      <div className="text-center w-full">
        <h2 style={{ margin: "20px 0" }}>Dress Code</h2>
        <Flexible
          style={{ padding: "0 25px" }}
          data-aos="fade-up"
          className="w-full h-[200px] font-[600] mb-5 bg-white/45"
        >
          Խնդրում ենք հարսանիքի օրը <br /> ԽՈՒՍԱՓԵԼ <br /> սպիտակ հագուստ
          կրելուց
          <br />
          <br />
          Մնացած բոլոր երանգները սազում են Ձեզ առավել քան երբևէ
        </Flexible>
      </div>
      <Container>
        <img
          loading="lazy"
          src={Photo2}
          alt="photo2"
          className="w-full mb-10 rounded-[15px]"
        />
        <AttendanceGuests />
        <div className="relative my-10">
          <img loading="lazy" src={Photo3} alt="Photo 3" className="rounded-[15px]" />
          <img
            className="absolute top-1.5 left-1.5 w-[100px] invert brightness-1 contrast-150"
            src={SaveTheDate}
            loading="lazy"
            alt="Save The Date"
          />
        </div>
        <h3 className="text-center">Սիրով՝ <br /> Ռազմիկ և Դիանա</h3>
      </Container>
    </ForthPagePart>
  );
};
