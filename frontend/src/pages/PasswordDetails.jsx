import { Button, Flex, Text } from "@chakra-ui/react";
import { LuArrowBigLeft, LuCalendar, LuLock } from "react-icons/lu";
import "../styles/passwordDetails.css";
import { useNavigate, useParams } from "react-router-dom";
import { usePasswordContext } from "../context/PasswordContext.js";
import DialogForm from "../components/UpdateForm.jsx";

function PasswordDetail({ serviceName, created_at }) {
  const { id } = useParams();

  const navigate = useNavigate();

  function Detail() {
    return (
      <article className="detail">
        <h1 style={{ marginBottom: "100px" }}>FACEBOOK</h1>
        <Flex marginBottom={"30px"} flexDirection={"column"}>
          <LuCalendar color="#e0e0e0" />
          <p style={{ marginTop: "6px" }}>24 May 2022</p>
        </Flex>
        <Flex marginBottom={"30px"} flexDirection={"column"}>
          <LuLock color="#e0e0e0" />
          <p style={{ marginTop: "6px" }}>********</p>
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
            DELETE
          </Button>
          <Button
            width={"157px"}
            borderRadius={"10px"}
            backgroundColor={"#ff6464"}
            onClick={() => navigate(`/update/${id}`)}
          >
            UPDATE
          </Button>
        </Flex>
      </article>
    );
  }

  return (
    <section className="password-detail">
      <Flex height={"96px"} justifyContent={"center"} alignItems={"center"}>
        <Flex width={"950px"}>
          <Button
            borderRadius={"10px"}
            onClick={() => navigate(`/`)}
            backgroundColor={"#ff6464"}
          >
            <LuArrowBigLeft />
          </Button>
        </Flex>
      </Flex>
      <Flex justifyContent={"center"}>
        <Detail />
      </Flex>
    </section>
  );
}

export default PasswordDetail;
