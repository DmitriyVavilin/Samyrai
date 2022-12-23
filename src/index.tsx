import React from 'react';
import './index.css';
import {renderEnterTree} from "./render";
import {subscriber} from "./components/redux/state";

subscriber(renderEnterTree)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
