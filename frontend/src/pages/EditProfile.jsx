import { Button, Flex } from "@chakra-ui/react";
import "../styles/profile.css";
import { LuArrowBigLeft } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

function EditProfile() {
  const navigate = useNavigate();
  return (
    <section className="edit-profile">
      <Flex flexDirection={"column"} width={"950px"}>
        <Flex marginTop={"30px"}>
          <Button
            borderRadius={"10px"}
            backgroundColor={"#fff"}
            border={"1px solid #ff6464"}
            onClick={() => navigate("/profile")}
          >
            <LuArrowBigLeft color="#FF6464" />
          </Button>
        </Flex>
        <h1 style={{ marginBottom: "100px" }}>EDIT PROFILE</h1>
        <Flex alignItems={"center"} flexDirection={"column"}>
          <img className="img" alt="Profile Picture" />
          <p
            style={{
              color: "#ff6464",
              marginTop: "6px",
              cursor: "pointer",
            }}
          >
            Change Picture
          </p>
        </Flex>
        <Flex marginTop={"30px"} flexDirection={"column"}>
          <label>NAME</label>
          <input
            type="text"
            className="input"
            placeholder="Kgomotso Mkhawane"
          />
        </Flex>
        <Flex marginTop={"100px"}>
          <Button
            width={"157px"}
            color={"#ff6464"}
            marginRight={"20px"}
            borderRadius={"10px"}
            border={"1px solid #ff6464"}
            backgroundColor={"#fff"}
          >
            CANCEL
          </Button>
          <Button
            width={"157px"}
            borderRadius={"10px"}
            backgroundColor={"#ff6464"}
          >
            SAVE
          </Button>
        </Flex>
      </Flex>
    </section>
  );
}

export default EditProfile;
