import React from "react";

export const required = (value: string) => {
    if (!value){
        return 'error message'
    }
    return undefined
}

export const maxLengthCreator = (maxLength: number) => (value:string) => {
    if (value && value.length > maxLength){
        return `Max length is ${maxLength} symbol`
    }
    return undefined
}


