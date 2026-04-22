import { Container, Flexible } from "../../GlobalStyle";
import { ForthPageBlock } from "./fortg-page-block";
import AttendanceGuests from "../attendance/AttendanceGuests";
import { ForthPagePart, ForthPagePartContext } from "./styled";
import Church from "../../assets/image/church.jpg";
import Restaurant from "../../assets/image/restaurant.jpg";
import Photo3 from "/wedding.jpg";
import Bant from "../../assets/image/bant.png";

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
      </Container>
      <div className="relative">
        <img
          src={Photo3}
          alt="Restaurant"
          className="w-full my-10 grayscale contrast-125 brightness-105"
        />
        <h1
          style={{
            fontFamily: "SaveTheDate", // Այստեղ համոզվեք, որ տառատեսակի անունը ճիշտ է
            textAlign: "center",
            color: "#1e1e1e",
            fontSize: "2rem",
            fontWeight: "800",
            marginTop: "2.5rem",
            position: "absolute",
            textShadow: "2px 2px 6px rgba(193, 184, 184, 0.7)",
            top: "-16px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          Save the Date
        </h1>
      </div>

      <div className="text-center">
        <h2>Դետալներ</h2>
        <Flexible className="relative">
          <img src={Bant} className="mx-auto my-8 grayscale" />
          <Flexible className="absolute w-full h-[322px] bg-white/45 font-[600] px-20">
            Ձեզ հետ բերեք ՍԵՐ, ժպիտներ ու անսահման դրական էմոցիաներ. ինչպես նաև
            հարմարավետ կոշիկներ` պարելու համար:
            <br />
            <br />
            Հարսի պարի և հրավառության ընթացքում կխնդրենք ծնողներին ուշադիր լինել
            իրենց բալիկների նկատմամբ:
          </Flexible>
        </Flexible>
      </div>
      <AttendanceGuests />
    </ForthPagePart>
  );
};
