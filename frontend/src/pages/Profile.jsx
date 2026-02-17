import { Flex, Text } from "@chakra-ui/react";
import "../styles/profile.css";
import { LuLock, LuLogOut, LuMoon, LuUser, LuUserPen } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api";

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    api.get("/api/user/me/")
       .then((res) => setUser(res.data.username));
  }, [])
  return (
    <section className="profile">
      <Flex width={"950px"} flexDirection={"column"}>
        <h1 style={{ marginBottom: "100px" }}>PROFILE</h1>
        <Flex
          marginBottom={"100px"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <img className="img-profile" alt="Profile Picture" />
          <Text className="profile-name" fontWeight={"bolder"}>
            {user}
          </Text>
          <Text color={"#e5e5e5"}>username</Text>
        </Flex>
        <Flex flexDirection={"column"}>
          <Flex
            marginBottom={"30px"}
            alignItems={"center"}
            cursor={"pointer"}
            onClick={() => navigate("/edit-profile")}
          >
            <LuUser color="#ff6464" />
            <p style={{ marginLeft: "6px" }}>Update Profile</p>
          </Flex>
          <Flex marginBottom={"30px"} alignItems={"center"} cursor={"pointer"}>
            <LuLock color="#ff6464" />
            <p style={{ marginLeft: "6px" }}>Change Master Password</p>
          </Flex>
          <Flex marginBottom={"30px"} alignItems={"center"} cursor={"pointer"}>
            <LuUserPen color="#ff6464" />
            <p style={{ marginLeft: "6px" }}>Autofill Settings</p>
          </Flex>
          <Flex marginBottom={"30px"} alignItems={"center"} cursor={"pointer"}>
            <LuMoon color="#ff6464" />
            <p style={{ marginLeft: "6px" }}>Switch to Dark Mode</p>
          </Flex>
          <Flex marginBottom={"30px"} alignItems={"center"} cursor={"pointer"}>
            <LuLogOut color="#ff6464" />
            <p
              onClick={() => navigate("/logout")}
              style={{ marginLeft: "6px" }}
            >
              Logout
            </p>
          </Flex>
        </Flex>
      </Flex>
    </section>
  );
}

export default Profile;
