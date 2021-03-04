import {h, render} from "preact";
import App from "./App";
import {store} from "./store";
import {Provider} from "react-redux";
const root=document.getElementById("root");

if(root) {
    render(
    <Provider store={store}>
        <App/>
    </Provider>,
    root);
}