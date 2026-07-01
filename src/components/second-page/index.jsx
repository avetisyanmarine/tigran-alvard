import { SecondPagePart, GridDiv } from "./styled";
import { Container, Flexible } from "../../GlobalStyle";
import { useEffect, useState } from "react";
import SerLiqySer from "../../assets/image/serliqyser.webp";
import PhotoGroup1 from "../../assets/image/groupphoto1.webp";
import PhotoGroup2 from "../../assets/image/groupphoto2.webp";
import PhotoGroup3 from "../../assets/image/groupphoto3.webp";
// import Photo2 from "../../assets/image/photo1.webp";
import { ThirdPagePartCalendar } from "../third-page/styled";

export const SecondPage = () => {
  const weddingDate = new Date(2026, 9, 23, 0, 0, 0);

  const calculateTimeLeft = () => {
    const now = new Date();
    const diff = weddingDate - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num) => String(num).padStart(2, "0");

  return (
    <SecondPagePart className="my-10">
      <Container>
        <div>
          <h2 className="mb-10" data-aos="zoom-in" data-aos-offset="400">
            Միջոցառմանը մնաց
          </h2>
          <GridDiv>
            <Flexible
              data-aos="flip-up"
              data-aos-duration="900"
              data-aos-delay="300"
            >
              <h2>{formatNumber(timeLeft.days)}</h2>
              <p>Օր</p>
            </Flexible>
            <Flexible
              data-aos="flip-up"
              data-aos-duration="900"
              data-aos-delay="450"
            >
              <h2>{formatNumber(timeLeft.hours)}</h2>
              <p>Ժամ</p>
            </Flexible>
            <Flexible
              data-aos="flip-up"
              data-aos-duration="900"
              data-aos-delay="600"
            >
              <h2>{formatNumber(timeLeft.minutes)}</h2>
              <p>Րոպե</p>
            </Flexible>
            <Flexible
              className="uniqueBorder"
              data-aos="flip-up"
              data-aos-duration="900"
              data-aos-delay="750"
            >
              <h2>{formatNumber(timeLeft.seconds)}</h2>
              <p>Վրկ</p>
            </Flexible>
          </GridDiv>
        </div>
        <h2 className="mt-15" data-aos="zoom-in" data-aos-offset="400">
          Հոկտեմբեր
        </h2>
        <ThirdPagePartCalendar
          data-aos="fade-up"
          data-aos-offset="400"
          data-aos-duration="600"
          data-aos-delay="300"
          className="mt-15"
        >
          {["Երկ", "Երք", "Չրք", "Հնգ", "Ուրբ", "Շբթ", "Կիր"].map((day) => (
            <div
              className="font-bold text-center py-2 mb-3"
              style={{ fontSize: "16px" }}
            >
              {day}
            </div>
          ))}
          {[...Array(37)].map((_, i) =>
            i > 2 && i <= 33 ? (
              <div className={i - 5 == 20 ? "special" : ""}>{i - 2}</div>
            ) : (
              <div className=""></div>
            ),
          )}
        </ThirdPagePartCalendar>
        <div
          className="flex h-[100vh] gap-[20px] justify-around"
          style={{ marginTop: "40px" }}
        >
          <img
            loading="lazy"
            src={SerLiqySer}
            className="h-[80vh] w-[40%] mt-[20%]!"
          />
          <div className="flex flex-col gap-2 w-[60%]">
            <img
              src={PhotoGroup1}
              loading="lazy"
              alt="Հարսանյաց Նկար1"
              className="h-1/3 object-cover rounded-[10px]"
            />
            <img
              src={PhotoGroup2}
              loading="lazy"
              alt="Հարսանյաց Նկար2"
              className="h-1/3 object-cover rounded-[10px]"
            />
            <img
              src={PhotoGroup3}
              loading="lazy"
              alt="Հարսանյաց Նկար3"
              className="h-1/3 object-cover rounded-[10px]"
            />
          </div>
        </div>
      </Container>
      <div className="my-10">
        <h2
          className="mb-10"
          // data-aos="fade-up"
        >
          Սիրելի հյուրեր
        </h2>
        <Flexible className="w-full h-[147px] bg-white/45 px-4 font-[600]">
          <p>
            Սիրով հրավիրում ենք Ձեզ ներկա գտնվելու մեր հարսանյաց հանդիսությանը և
            կիսելու մեր ուրախությունը։
          </p>
        </Flexible>
      </div>
      {/* <img src={Photo2} className="w-full" /> */}
    </SecondPagePart>
  );
};
