import {RootStoreType} from "./components/redux/redux-store";

type ProviderType = {
    store:RootStoreType
    children: any
}

// export const Provider = (props:ProviderType) => {
//     return(
//         <StoreContext.Provider value={props.store}>
//             {props.children}
//         </StoreContext.Provider>
//     )
// }