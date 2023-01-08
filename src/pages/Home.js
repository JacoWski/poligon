import React, { useState } from "react";

// import Dialog from "components/Dialog";
import Snackbar from "components/Snackbar";

const Home = () => {
    const [show, setShow] = useState(false);
    return(
        <div>
            <button onClick={() => setShow(true)}>Show Dialog</button>
            {/* <Dialog show={show}
                    header={'Pierwszy dialog ever!'}
                    onClose={() => setShow(false)}
            >
                Adipisicing eu duis mollit non. Tempor magna excepteur officia pariatur. In excepteur consectetur duis occaecat consequat reprehenderit ullamco.
            </Dialog> */}
            <Snackbar body={'Nulla reprehenderit nisi consequat anim proident amet nisi quis.'}
                        show={show}
                        onClose={() => setShow(false)}
                        timeout={5}
                        type={"error"}
            />
        </div>
    );
};

export default Home;
