import { Button, Flex } from "@chakra-ui/react";
import { ColorModeButton } from "../components/ui/color-mode";
import '../styles/header.css';
import { LuUser } from "react-icons/lu";
import Drop from "./Menu";

function Header({ icon }) {

    return (
        <header className="head">
            <Flex
                alignItems={'center'}
                justifyContent={'space-between'}
                width={'950px'}>
                {!icon ? <ColorModeButton/> : icon}
                <Drop/>
            </Flex>
        </header>
    )
}

export default Header;