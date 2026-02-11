import { Button, Flex } from "@chakra-ui/react";
import "../styles/onepass.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const MotionFlex = motion(Flex);

function OnePass() {
  const [page, setPage] = useState("1");
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prev) => {
        if (prev === "1") return "2";
        if (prev === "2") return "3";
        return "1";
      });
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const pages = {
    1: {
      heading: (
        <Flex flexDirection="column" marginTop="48px">
          <h1>GENERATE</h1>
          <h1 style={{ color: "#ff6464" }}>SECURE</h1>
          <h1>PASSWORDS.</h1>
        </Flex>
      ),
      content: (
        <p
          style={{
            color: "#545974",
            maxWidth: "490px",
            margin: "20px 0 100px 0",
            opacity: 0.6,
          }}
        >
          Stop using unsecure passwords for your online accounts, level up with
          OnePass. Get the most secure and difficult-to-crack passwords.
        </p>
      ),
    },
    2: {
      heading: (
        <Flex flexDirection="column" marginTop="48px">
          <h1>ALL YOUR</h1>
          <h1 style={{ color: "#ff6464" }}>PASSWORDS</h1>
          <h1>ARE HERE.</h1>
        </Flex>
      ),
      content: (
        <p
          style={{
            color: "#545974",
            maxWidth: "470px",
            margin: "20px 0 100px 0",
            opacity: 0.6,
          }}
        >
          Store and manage all of your passwords as from one place. Don't
          remember hundreds of passwords, just remember one.
        </p>
      ),
    },
    3: {
      heading: (
        <Flex flexDirection="column" marginTop="48px">
          <h1>DON'T TYPE,</h1>
          <h1 style={{ color: "#ff6464" }}>AUTOFILL</h1>
          <h1>YOUR CREDENTIALS.</h1>
        </Flex>
      ),
      content: (
        <p
          style={{
            color: "#545974",
            maxWidth: "470px",
            margin: "20px 0 100px 0",
            opacity: 0.6,
          }}
        >
          Don't compromise your passwords by typing them in public. Let OnePass
          autofill those and keep your credentials secure.
        </p>
      ),
    },
  };

  const currentPage = pages[page];

  return (
    <section className="onepass-page">
      <Flex width="950px" flexDirection="column">
        <AnimatePresence mode="wait">
          <MotionFlex
            key={page}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            flexDirection="column"
          >
            {currentPage.heading}
            {currentPage.content}
          </MotionFlex>
        </AnimatePresence>

        <Flex width="950px" justifyContent="center">
          {["1", "2", "3"].map((num) => (
            <p
              key={num}
              onClick={() => setPage(num)}
              style={{
                cursor: "pointer",
                margin: num === "2" ? "0 12px" : undefined,
                fontWeight: page === num ? "bold" : "normal",
                color: page === num ? "#ff6464" : "#e5e5e5",
                fontSize: page === num ? "20px" : "16px",
              }}
            >
              {num}
            </p>
          ))}
        </Flex>

        <Flex maxWidth="950px" marginTop="60px" justifyContent="center">
          <Button
            width="157px"
            color="#ff6464"
            marginRight="20px"
            borderRadius="10px"
            border="1px solid #ff6464"
            backgroundColor="#fff"
            onClick={() => navigate("/register")}
          >
            REGISTER
          </Button>
          <Button
            width="157px"
            borderRadius="10px"
            backgroundColor="#ff6464"
            onClick={() => navigate("/login")}
          >
            LOGIN
          </Button>
        </Flex>
      </Flex>
    </section>
  );
}

export default OnePass;
