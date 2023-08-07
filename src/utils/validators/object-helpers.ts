import {UserType} from "components/redux/reducer/usersReducer";

export const updateObjectInArray = (items: UserType[], userId: number, newObjProps: UserType) => {
    items.map(el => {
        if (el.id === userId) {
            return {...el, ...newObjProps}
        }
        return el
    })
}