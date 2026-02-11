import { Button, Menu, Portal } from "@chakra-ui/react";
import DropDown from "./DropDown";
import { LuUser } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const Drop = () => {
  const navigate = useNavigate();
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button
          color={"#ff6464"}
          borderRadius={"10px"}
          border={"1px solid #ff6464"}
          backgroundColor={"#fff"}
        >
          <LuUser size={"24"} />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item
              value="Home"
              color={"#545974"}
              cursor={"pointer"}
              onClick={() => navigate("/")}
            >
              Home
            </Menu.Item>
            <Menu.Item
              value="Profile"
              color={"#545974"}
              cursor={"pointer"}
              onClick={() => navigate("/profile")}
            >
              Profile
            </Menu.Item>
            <Menu.Item
              value="Logout"
              color={"#545974"}
              cursor={"pointer"}
              onClick={() => navigate("/logout")}
            >
              Logout
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default Drop;
