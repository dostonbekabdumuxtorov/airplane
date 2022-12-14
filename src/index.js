import React,{Suspense} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import './style/css/home.css'
import App from "./App";
import FallbackLoading from './fallbackL';
import { Provider } from "react-redux";
import store from "./store";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Suspense fallback={FallbackLoading}>
        <Provider store={store}>
            <App />
        </Provider>
    </Suspense>
);
