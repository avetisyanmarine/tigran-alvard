import { MusicPagePart } from "./styled";
import Music from "../../assets/vectors/music.png";
import Song from "../../assets/audio/song.mp3";
import { useRef, useState, useEffect } from "react";

export const MusicPage = ({ isOpened }) => {
  const audioRef = useRef(null);
  const [showTip, setShowTip] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false); // Ուղղեցինք setManualPlay-ի սխալը

  const hideTip = () => {
    setIsFading(true);
    setTimeout(() => setShowTip(false), 350);
  };

  // Երբ ծրարը բացվում է, փորձում ենք միացնել երաժշտությունը
  useEffect(() => {
    if (isOpened && audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          hideTip(); // Եթե բրաուզերը թույլ տվեց ավտոմատ նվագել, հուշումը միանգամից թաքցնում ենք
        })
        .catch((err) => {
          console.log("Autoplay blocked by browser, waiting for user click.", err);
          // Սա նորմալ է, սպասում ենք մինչև օգտատերը սեղմի էկրանին (handleClick)
        });
    }
  }, [isOpened]);

  const handleClick = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch((err) => console.log("Playback error:", err));
        hideTip();
      }
    }
  };

  // 4 վայրկյան անց ավտոմատ թաքցնել հուշումը, եթե դեռ բաց է
  useEffect(() => {
    const timeout = setTimeout(hideTip, 4000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <MusicPagePart onClick={handleClick}>
      {/* Կարող ես ավելացնել պտտվելու animate դաս, եթե երաժշտությունը միացված է (isPlaying) */}
      <img 
        loading="lazy" 
        src={Music} 
        alt="music" 
        className={isPlaying ? "animate-spin [animation-duration:8s]" : ""} 
      />
      <audio ref={audioRef} src={Song} loop />
      
      {showTip && (
        <div
          onClick={(e) => {
            e.stopPropagation(); // Կանխում ենք կրկնակի click-ը
            handleClick();
          }}
          className={`tip ${isFading ? "fade-out" : ""}`}
        >
          Սեղմեք այստեղ
        </div>
      )}
    </MusicPagePart>
  );
};