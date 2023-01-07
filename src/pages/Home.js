import React, { useState } from "react";

import Dialog from "components/Dialog";

const Home = () => {
    const [show, setShow] = useState(false);
    return(
        <div>
            <button onClick={() => setShow(true)}>Show Dialog</button>
            <Dialog show={show}
                    header={'Pierwszy dialog ever!'}
                    onClose={() => setShow(false)}
            >
                Adipisicing eu duis mollit non. Tempor magna excepteur officia pariatur. In excepteur consectetur duis occaecat consequat reprehenderit ullamco.
            </Dialog>
        </div>
    );
};

export default Home;
