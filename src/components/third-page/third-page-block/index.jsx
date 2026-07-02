import { ThirdPagePartContext } from "../styled";
import { ThirdPageBlockPart, ThirdPageBlockPartSvg } from "./styled";
import Arrow from "../../../assets/image/arrow.png";

export const ThirdPageBlock = ({
  ImageSrc,
  number,
  bigText,
  smallText,
  uniqueMargin,
  line,
  imageSize,
  link,
}) => {
  return (
    <ThirdPageBlockPart
      style={{ marginTop: uniqueMargin ? `${uniqueMargin}px` : "" }}
    >
      <ThirdPageBlockPartSvg line={line}>
        <img loading="lazy" src={ImageSrc} width={imageSize} alt="" />
      </ThirdPageBlockPartSvg>
      
      <ThirdPagePartContext data-aos="fade-up">
        <h3>{number}</h3>
        <h3>{bigText}</h3>
        
        {/* Conditional rendering for the link without duplicating text */}
        {link ? (
          <a href={link} target="_blank" className="underline" rel="noopener noreferrer">
            <p>{smallText}</p>
          </a>
        ) : (
          <p>{smallText}</p>
        )}
      </ThirdPagePartContext>

      {!line && <img src={Arrow} loading="lazy" className="mt-5 mb-10" alt="Arrow" />}
    </ThirdPageBlockPart>
  );
};