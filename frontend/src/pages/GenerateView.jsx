import { Flex, Button } from "@chakra-ui/react";
import { useState } from "react";
import { LuArrowBigLeft, LuUser } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

function Generate() {
  const [newPassword, setNewPassword] = useState("");
  const [symbols, setSymbols] = useState("Yes");
  const [passwordType, setPasswordType] = useState("Memorable");
  const [passwordLength, setPasswordLength] = useState("6");
  const [pinLength, setPinLength] = useState("4");
  const navToPassword = useNavigate();

  const generatePassword = () => {
    const adjectives = [
      "sleepy",
      "slow",
      "smelly",
      "wet",
      "fat",
      "orange",
      "yellow",
      "blue",
      "purple",
      "green",
      "fluffy",
      "brave",
      "white",
      "proud",
    ];
    const nouns = [
      "apple",
      "dinosaur",
      "ball",
      "toaster",
      "goat",
      "dragon",
      "hammer",
      "duck",
      "panda",
    ];
    const special_char = ["!", "@", "#", "$", "%", "&", "*", "?"];

    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";

    const randomAdjectives =
      adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const randomNumber = Math.floor(Math.random() * 100);
    const randomSpecialChar =
      special_char[Math.floor(Math.random() * special_char.length)];

    const generateSecure = () => {
      const all = lowercase + uppercase + special_char + numbers;
      let password = "";
      password += lowercase[Math.floor(Math.random() * lowercase.length)];
      password += uppercase[Math.floor(Math.random() * uppercase.length)];
      password += numbers[Math.floor(Math.random() * numbers.length)];
      password += special_char[Math.floor(Math.random() * special_char.length)];

      for (let k = password.length; k < parseInt(passwordLength); k++) {
        password += all[Math.floor(Math.random() * all.length)];
      }
      return password
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
    };

    const generatePin = () => {
      let pin = "";
      for (let k = 0; k < pinLength; k++) {
        pin = pin + numbers[Math.floor(Math.random() * numbers.length)];
      }
      return pin;
    };

    if (passwordType === "Memorable" && symbols === "Yes") {
      return `${randomAdjectives}${randomSpecialChar}${randomNoun}${randomNumber}`;
    } else if (passwordType === "Pin") {
      const pin = generatePin();
      return pin;
    } else if (passwordType === "High Security") {
      const password = generateSecure();
      return password;
    } else {
      return `${randomAdjectives}${randomNoun}${randomNumber}`;
    }
  };

  const handleGenerate = () => {
    const newPassword = generatePassword();
    setNewPassword(newPassword);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(newPassword);
    } catch (err) {
      console.log("Failed to copy", err);
    }
  };

  return (
    <section>
      <Flex
        width={"100%"}
        height={"96px"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Flex width={"950px"} justifyContent={"space-between"}>
          <Button
            onClick={() => navToPassword("/add-password")}
            borderRadius={"10px"}
            backgroundColor={"#ff6464"}
          >
            <LuArrowBigLeft />
          </Button>
        </Flex>
      </Flex>
      <Flex width={"100%"} justifyContent={"center"}>
        <Flex
          width={"950px"}
          justifyContent={"center"}
          flexDirection={"column"}
        >
          <h1 style={{ marginBottom: "100px" }}>GENERATE NEW</h1>
          <Flex flexDirection={"column"} alignItems={"center"}>
            <input
              className="input"
              readOnly
              style={{
                color: "#545974",
                textAlign: "center",
              }}
              value={newPassword}
            />
            <Flex marginTop={"30px"} flexDirection={"column"}>
              <label>Password Type</label>
              <select
                className="input"
                style={{ color: "#545974" }}
                onChange={(e) => setPasswordType(e.target.value)}
                value={passwordType}
              >
                <option value={"Memorable"} style={{ color: "#545974" }}>
                  Memorable
                </option>
                <option value={"High Security"} style={{ color: "#545974" }}>
                  High Security
                </option>
                <option value={"Pin"} style={{ color: "#545974" }}>
                  Pin
                </option>
              </select>
            </Flex>
            {passwordType === "Pin" && (
              <Flex marginTop={"30px"} flexDirection={"column"}>
                <label>Pin Length</label>
                <select
                  className="input"
                  style={{ color: "#545974" }}
                  value={pinLength}
                  onChange={(e) => setPinLength(e.target.value)}
                >
                  <option value={"4"} style={{ color: "#545974" }}>
                    4
                  </option>
                  <option value={"5"} style={{ color: "#545974" }}>
                    5
                  </option>
                  <option value={"6"} style={{ color: "#545974" }}>
                    6
                  </option>
                </select>
              </Flex>
            )}
            {passwordType === "Memorable" && (
              <Flex marginTop={"30px"} flexDirection={"column"}>
                <label>Include Symbols</label>
                <select
                  className="input"
                  style={{ color: "#545974" }}
                  onChange={(e) => setSymbols(e.target.value)}
                  value={symbols}
                >
                  <option value={"Yes"} style={{ color: "#545974" }}>
                    Yes
                  </option>
                  <option value={"No"} style={{ color: "#545974" }}>
                    No
                  </option>
                </select>
              </Flex>
            )}

            {passwordType === "High Security" && (
              <Flex marginTop={"30px"} flexDirection={"column"}>
                <label>Password Length</label>
                <select
                  className="input"
                  style={{ color: "#545974" }}
                  value={passwordLength}
                  onChange={(e) => setPasswordLength(e.target.value)}
                >
                  <option value={"6"} style={{ color: "#545974" }}>
                    6
                  </option>
                  <option value={"7"} style={{ color: "#545974" }}>
                    7
                  </option>
                  <option value={"8"} style={{ color: "#545974" }}>
                    8
                  </option>
                  <option value={"9"} style={{ color: "#545974" }}>
                    9
                  </option>
                  <option value={"10"} style={{ color: "#545974" }}>
                    10
                  </option>
                </select>
              </Flex>
            )}

            <Flex
              width={"335px"}
              marginTop={"30px"}
              justifyContent={"space-between"}
            >
              <Button
                borderRadius={"10px"}
                width={"157px"}
                color={"#ff6464"}
                border={"1px solid #ff6464"}
                backgroundColor={"white"}
                onClick={handleGenerate}
              >
                RANDOMIZE
              </Button>
              <Button
                borderRadius={"10px"}
                width={"157px"}
                backgroundColor={"#ff6464"}
                onClick={handleCopy}
              >
                COPY
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </section>
  );
}

export default Generate;
