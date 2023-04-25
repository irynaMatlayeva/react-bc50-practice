 import cn from "classnames";
import { SectionStyled } from "./Section.styled";

 const Section = ({ isRow, isRightPosition, title, image, children}) => {
    console.log(isRightPosition);
    return (
        <SectionStyled isRow={isRow}>
            <h2 className={cn("title", { title_right: isRightPosition })}>{image && <img src={image} alt="" />} {title}</h2>
            <div className="section_row">{children}</div>
        </SectionStyled>
    )
}

export default Section;

