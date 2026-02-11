import { Flex } from "@chakra-ui/react";
import Form from "../components/Form";
import '../styles/login.css'


function Login() {
    return (
        <article className="login-page">
            <Flex
                width={'950px'}
                marginTop={'40px'}
                flexDirection={'column'}
                >
                <h1>LOGIN</h1>
                <p
                    style={{
                        color: '#e0e0e0',
                        marginBottom: '100px'
                    }}>
                    Let's get you setup with a new account!
                </p>
            </Flex>
            <Form route={"/api/token/"} method={"login"}/>
        </article>
    )
}

export default Login;