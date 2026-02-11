import { Button, Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import { LuArrowBigLeft } from "react-icons/lu";
import { useNavigate, useParams } from "react-router-dom";


function Update() {
    const navBack = useNavigate();
    const { id } = useParams();

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
                    <form>
                        <Flex
                            flexDirection={'column'}
                            >
                            <label style={{ marginBottom:'6px' }}>Name</label>
                            <input
                                className="input"
                                type="text"
                                placeholder="Website/ App name"
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