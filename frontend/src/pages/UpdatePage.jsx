import { Button, Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import { LuArrowBigLeft } from "react-icons/lu";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import api from "../api";


function Update() {
    const navBack = useNavigate();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    const updatePassword = async (id, updatedData) => {
        try {
            const res = await api.patch(`/api/passwords/update/${id}/`, updatedData);

            if (res.status === 200) {
                alert("Password updated successfully!");
                navigate(`/password-detail/${id}`);
            }
        } catch (error) {
            console.error("Update failed:", error.response?.data || error.message);
            alert("Failed to update password");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedData = {};
        if (name) updatedData.service_name = name;
        if (password) updatedData.password = password;

        if (Object.keys(updatedData).length === 0) {
            alert("Please change at least one field.");
            return;
        }

        updatePassword(id, updatedData);
    }

    return (
        <article>
            <Flex
                height={'96px'}
                justifyContent={'center'}
                alignItems={'center'}
                >
                <Flex
                    width={'950px'}
                    >
                    <Button
                        borderRadius={'10px'}
                        backgroundColor={'#ff6464'}
                        onClick={()=>navBack(`/password-detail/${id}`)}
                    >
                        <LuArrowBigLeft/>
                    </Button>
                </Flex>
            </Flex>
            <Flex
                justifyContent={'center'}
                >
                <Flex
                    width={'950px'}
                    flexDirection={'column'}
                    >
                    <h1 style={{ marginBottom: '100px' }}>UPDATE</h1>
                    <form onSubmit={handleSubmit}>
                        <Flex
                            flexDirection={'column'}
                            >
                            <label style={{ marginBottom:'6px' }}>Name</label>
                            <input
                                className="input"
                                type="text"
                                
                                placeholder="Website/ App name"
                                onChange={(event) => setName(event.target.value)}
                                />
                        </Flex>
                        <Flex
                            flexDirection={'column'}
                            >
                            <label style={{ marginBottom:'6px' , marginTop:'30px'}}>Password</label>
                            <input
                                className="input"
                                type="password"
                                placeholder="Password"
                                onChange={(event) => setPassword(event.target.value)}
                                />
                        </Flex>
                        <input
                            type="submit"
                            className="btn"
                            style={{ marginTop: '40px' }}
                            />
                    </form>
                </Flex>
            </Flex>
        </article>
    )
}

export default Update;