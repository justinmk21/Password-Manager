import { Button, CloseButton, Dialog, Portal } from "@chakra-ui/react";

const Notify = ({ info }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button padding={"0px"} border={"none"} backgroundColor={"#fff"}>
          {info}
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title color={"#545974"}>Note</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <p>The requested feature will be implemented soon</p>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button
                  color={"#ff6464"}
                  borderColor={"#ff6464"}
                  borderRadius={"10px"}
                  variant="outline"
                >
                  Cancel
                </Button>
              </Dialog.ActionTrigger>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default Notify;
