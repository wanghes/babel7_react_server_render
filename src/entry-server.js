import React from "react";
import App from "./App";
import { Frontload, frontloadServerRender } from 'react-frontload';

const result = () => (
    <Frontload isServer={true}>
        <App />
    </Frontload>
);

export default result;
