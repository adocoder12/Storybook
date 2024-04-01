import style from "./project.module.css";

type ProjectCardProps = {
  logo: string;
  title: string;
  backgroundImgUrl: string;
  category: string;
};

export function ClientCard({
  logo,
  title,
  backgroundImgUrl,
  category,
}: ProjectCardProps) {
  return (
    <>
      <div className={style["project_puesto"]}>
        <div className={style["project_img_wrap"]}>
          <img
            className={style["background_project"]}
            src={backgroundImgUrl && backgroundImgUrl}
            alt="Background"
          />
          <div>
            <img className={style["logo_project"]} src={logo} alt=" Logo" />
          </div>
        </div>
        <div className={style["project_text_wrap"]}>
          <h3>{title}</h3>
          <p>{category}</p>
        </div>
      </div>
    </>
  );
}
