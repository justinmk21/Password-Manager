import { Button, Dialog, Field, Input, Portal, Stack } from "@chakra-ui/react";
import { useRef } from "react";


function DialogForm() {

    const ref = useRef<HTMLInputElement>(null)
    return (
        <Dialog.Root initialFocusEl={() => ref}>
            <Dialog.Trigger asChild>
                <Button variant={"outline"}
                    color={'#ff6464'}
                    marginRight={'20px'}
                    borderRadius={'10px'}
                    border={'1px solid #ff6464'}
                    backgroundColor={'#fff'}
                    >
                    UPDATE
                </Button>
            </Dialog.Trigger>
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content>
                        <Dialog.Header>
                            <Dialog.Title>
                                UPDATE PASSWORD
                            </Dialog.Title>
                        </Dialog.Header>
                        <Dialog.Body pb={"4"}>
                            <Stack gap={"4"}>
                                <Field.Root>
                                    <Field.Label>Name</Field.Label>
                                    <Input placeholder="Name"/>
                                </Field.Root>
                                <Field.Root>
                                    <Field.Label>Password</Field.Label>
                                    <Input ref={ref} placeholder="Password"/>
                                </Field.Root>
                            </Stack>
                        </Dialog.Body>
                        <Dialog.Footer>
                            <Dialog.ActionTrigger asChild>
                                <Button variant={"outline"}>Cancel</Button>
                            </Dialog.ActionTrigger>
                            <Button>Save</Button>
                        </Dialog.Footer>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    )
}

export default DialogForm;