import React from "react";
import { hot } from 'react-hot-loader';
import "./assets/app.scss";
import img from "./assets/logo.jpg";

class Root extends React.Component {
    oncls(event) {
        const node = event.target;
        const children = node.parentNode.parentNode.querySelectorAll('a');

        children.forEach((item) => {
            item.classList.remove('selected');
        });
        node.setAttribute('class', 'selected');
    }
    render() {
        return (
            <div>
                <div className="title">This is a react ssr demo</div>
                <ul className="nav">
                    <li><a className="selected" onClick={this.oncls}>Bar</a></li>
                    <li><a onClick={this.oncls}>Baz</a></li>
                    <li><a onClick={this.oncls}>Foo</a></li>
                    <li><a onClick={this.oncls}>TopList</a></li>
                </ul>
                <div className="view">
                    <img src={img}/>
                </div>
            </div>
        );
    }
};

export default hot(module)(Root);
