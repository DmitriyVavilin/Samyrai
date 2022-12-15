import React from 'react';
import {store} from "./components/redux/state";
import {renderEnterTree} from "./render";

store.subscribe(renderEnterTree)
renderEnterTree()
