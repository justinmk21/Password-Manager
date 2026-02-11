import { Button, Flex } from "@chakra-ui/react";
import { LuArrowBigLeft, LuUser } from "react-icons/lu";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import '../styles/addpassword.css';

function AddPassword() {
    const [service_name, setServiceName] = useState('');
    const [password, setPassword] = useState('');

    const navToHome = useNavigate();
    const navToGen = useNavigate();

    const addPassword = (e) => {
        e.preventDefault();
        api.post("/api/add-password/", { service_name, password }).then((res) =>{
            if (res.data == 201) alert('Password created!')
            else {alert('Failed to add password')}
        })
        .catch((err) => alert(err))
    }
    return (
        <article className="add-password-head">
            <Flex
                width={'100%'}
                height={'96px'}
                alignItems={'center'}
                justifyContent={'center'}
                >
                <Flex
                    justifyContent={'space-between'}
                    width={'950px'}>
                    <Button
                        onClick={()=> navToHome("/")}
                        borderRadius={'10px'}
                        backgroundColor={'#ff6464'}>
                            <LuArrowBigLeft/>
                    </Button>
                </Flex>
            </Flex>
            <Flex
                width={'950px'}
                marginBottom={'100px'}>
                <h1>
                    ADD NEW 
                    <span style={{ color: '#ff6464' }}> PASSWORD</span>
                </h1>
            </Flex>
            <form onSubmit={addPassword} className="form">
                <Flex
                    marginBottom={'30px'}
                    flexDirection={'column'}
                    >
                    <label>Name</label>
                    <input
                        type="text"
                        className="input"
                        required
                        id="service_name"
                        placeholder="Website/App Name"
                        onChange={((e) => setServiceName(e.target.value))}
                        value={service_name}
                    />
                </Flex>
                <Flex
                    marginBottom={'30px'}
                    flexDirection={'column'}
                >
                    <label>Password</label>
                    <input
                        type="text"
                        id="password"
                        required
                        className="input"
                        placeholder="Password"
                        onChange={(e)=> setPassword(e.target.value)}
                        value={password}
                    />
                </Flex>
                <input
                    type="submit"
                    className="btn-outline"
                />
            </form>
            <Flex
                justifyContent={'flex-end'}
                width={'950px'}>
                <Button
                    borderRadius={'10px'}
                    color={'#ff6464'}
                    marginTop={'30px'}
                    border={'1px solid #ff6464'}
                    backgroundColor={'#fff'}
                    onClick={() => navToGen('/generate')}
                    >
                    GENERATE NEW
                </Button>
            </Flex>
        </article>
    )
}

export default AddPassword;