import { Button } from "@chakra-ui/react";
import { toaster } from "./ui/toaster";

function Toaster({ info }) {

    return (
        <div
            onClick={() =>
                toaster.create({
                    description:'Feature not implemented yet!',
                    type:'info',
                    closable: true,
                    duration: 3000,
                })
            }
        >
            {info}
        </div>
    );
}

export default Toaster;
