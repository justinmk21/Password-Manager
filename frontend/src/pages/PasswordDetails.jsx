import { Button, Flex, Text } from "@chakra-ui/react";
import { LuArrowBigLeft, LuCalendar, LuLock } from "react-icons/lu";
import "../styles/passwordDetails.css";
import { useNavigate, useParams } from "react-router-dom";
import { usePasswordContext } from "../context/PasswordContext.js";
import DialogForm from "../components/UpdateForm.jsx";
import api from "../api.js";
import { useEffect, useState } from "react";

function PasswordDetail() {
  const { id } = useParams();
  const [passwords, setPasswords] = useState([]);
  const [selectedPassword, setSelectedPassword] = useState(null);

  const navigate = useNavigate();

  const getPassword = () => {
    api.get("/api/passwords/")
      .then((res) => res.data)
      .then((data) => {
        setPasswords(data);
      })
      .catch((err) => alert((err)));
  }

  const deletePassword = async (id) => {
    if (!window.confirm("Are you sure you want to delete this?")) return;

    try {
      const res = await api.delete(`/api/delete-password/${id}/`);

      if (res.status == 204) {
        alert("Deleted");
        navigate("/");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getPassword();
  }, []);


  useEffect(() => {
    if (passwords.length > 0) {
      const found = passwords.find(p => p.id === parseInt(id));
      setSelectedPassword(found);
    }
  }, [passwords, id]);

  function Detail() {
    return (
      <article className="detail">
        <h1 style={{ marginBottom: "100px" }}>{selectedPassword?.service_name}</h1>
        <Flex marginBottom={"30px"} flexDirection={"column"}>
          <LuCalendar color="#e0e0e0" />
          <p style={{ marginTop: "6px" }}>
            {selectedPassword?.created_at
            ? new Date(selectedPassword.created_at).toLocaleDateString('en-GB', {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
            })
            : "N/A"
            }</p>
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
            onClick={(event) => {
              event.stopPropagation();
              deletePassword(id);
            }}
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
