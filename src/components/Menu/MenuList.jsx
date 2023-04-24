import { menuConfig } from "constants/menu"
import MenuItem from "./MenuItem";
const MenuList = () => {
    return (
        <nav>
            <ul>{menuConfig.map(({ name, link, icon }) =>
                <MenuItem key={name} title={name} link={link} image={icon} />)}
                </ul>
            </nav>
    )
}
export default MenuList;