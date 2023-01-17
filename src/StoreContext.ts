import React from "react";
import {RootStoreType} from "./components/redux/redux-store";

const StoreContext = React.createContext({} as RootStoreType)

export default StoreContext