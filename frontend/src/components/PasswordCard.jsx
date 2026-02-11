import { Button, Flex } from "@chakra-ui/react";
import { LuFacebook,LuCopy } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import '../styles/PasswordCard.css';

function PasswordCard({ siteName, id, password }) {

    const navToDetail = useNavigate();
    return (
        <Flex
            className="password-card"
            justifyContent={'space-between'}
            alignItems={'center'}
            onClick={() => {navToDetail(`/password-detail/${id}`);}}
            key={id}
        >
            <LuFacebook/>
            <p>{siteName}</p>
            <Button
                backgroundColor={'#fff'}
                onClick={(e) => {
                    e.stopPropagation();
                }}
                >
                <LuCopy color="#ff6464"/>
            </Button>
        </Flex>
    )
}

export default PasswordCard;