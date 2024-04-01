import style from "./service.module.css";
import { useEffect, useState } from "react";

type ServiceProps = {
  title: string;
  description: string;
  img: string;
};

export default function Service({ title, description, img }: ServiceProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the threshold as per your requirement
    };

    handleResize(); // Call it initially to set the initial state

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className={style["service___container"]}>
        <div className={style["service__img"]}>
          <img
            src={img}
            className={style["service__background__img"]}
            alt="Service background image"
            onClick={() => console.log("clicked")}
          />
          {isMobile && (
            <button
              onClick={() => console.log("clicked")}
              className={`${style.Btn} }`}
              id="btn-universal"
            >
              Read More
            </button>
          )}
        </div>
        <div className={style["service__content"]}>
          <h2 className={style["content__title"]}>{title}</h2>
          <span className={style["content__Text"]}>{description}</span>
          {!isMobile && (
            <button
              onClick={() => console.log("clicked")}
              className={`${style.Btn} }`}
              id="btn-universal"
            >
              Lue lisää
            </button>
          )}
        </div>
      </div>
    </>
  );
}
