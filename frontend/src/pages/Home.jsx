import { Button, Flex } from "@chakra-ui/react";
import PasswordCard from "../components/PasswordCard";
import "../styles/home.css";
import "../styles/box.css";
import { LuPlus } from "react-icons/lu";
import { useEffect, useState } from "react";
import api from "../api.js";
import { useNavigate } from "react-router-dom";

function Home() {
  const [passwords, setPasswords] = useState([]);
  const navigate = useNavigate();

  const getPasswords = () => {
    api
      .get("/api/passwords/")
      .then((res) => res.data)
      .then((data) => {
        setPasswords(data);
      })
      .catch((err) => alert(err));
  };

  useEffect(() => {
    getPasswords();
  }, []);

  const strongPasswords = [];
  const weakPasswords = [];

  passwords.forEach((password) => {
    const psd = password.decrypted_password;
    if (/^\d{1,5}$/.test(psd) || psd.length < 4) {
      weakPasswords.push(psd);
    } else {
      strongPasswords.push(psd);
    }
  });

  return (
    <section>
      <article className="article-page">
        <Flex
          width={"950px"}
          height={"257px"}
          marginTop={"48px"}
          justifyContent={"space-between"}
        >
          <div className="box">
            <p className="password-count">{passwords.length}</p>
            <p>Passwords Stored</p>
          </div>
          <div className="box">
            <p className="password-count">{strongPasswords.length}</p>
            <p>
              <span style={{ color: "lightgreen" }}>Strong</span> Passwords
            </p>
          </div>
          <div className="box">
            <p className="password-count">{weakPasswords.length}</p>
            <p>
              <span style={{ color: "red" }}>Weak</span> Passwords
            </p>
          </div>
        </Flex>
        <Flex
          width={"950px"}
          margin={"35px 0"}
          justifyContent={"space-between"}
        >
          <Button
            borderRadius={"10px"}
            backgroundColor={"#ff6464"}
            onClick={() => navigate("/add-password")}
          >
            <LuPlus />
          </Button>
          <input
            className="input"
            type="search"
            placeholder="Search Websites..."
          />
        </Flex>
        <article className="password-container">
          {passwords.map((password) => (
            <PasswordCard
              key={password.id}
              id={password.id}
              password={password.decrypted_password}
              siteName={password.service_name}
            />
          ))}
        </article>
      </article>
    </section>
  );
}

export default Home;
