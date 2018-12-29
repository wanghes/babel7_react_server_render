import React from "react";
import ReactDOM from "react-dom";
import { Frontload } from 'react-frontload';
import App from "./App";

console.log(process.env.NODE_ENV)


const renderMethod = process.env.NODE_ENV === 'development' ? ReactDOM.render : ReactDOM.hydrate;


const render = Component => {
    renderMethod(
        <Frontload noServerRender={true}>
            <Component />
        </Frontload>,
        document.getElementById('app')
    );
}

render(App);
