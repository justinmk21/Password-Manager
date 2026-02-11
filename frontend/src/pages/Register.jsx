import { Flex } from "@chakra-ui/react";
import Form from "../components/Form";
import '../styles/register.css';


function Register() {
    return (
        <article className="register-page">
            <Flex
                width={'950px'}
                marginTop={'40px'}
                flexDirection={'column'}
                >
                <h1>REGISTER</h1>
                <p
                    style={{
                        color: '#e0e0e0',
                        marginBottom: '100px'
                    }}>
                    Let's get you setup with a new account!
                </p>
            </Flex>
            <Form route={"/api/user/register/"} method={"register"}/>
        </article>
    )
}

export default Register;