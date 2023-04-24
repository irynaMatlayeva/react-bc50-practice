
const MenuItem = ({title, link, image}) => {
    return (
        <li><a href={link}>
                    <img src={image} alt={title} />{title}</a></li>
    )
}
export default MenuItem;