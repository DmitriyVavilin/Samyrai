import React from 'react';

type CustomButtonPropsType = {
    title: string
}

export const CustomButton: React.FC<CustomButtonPropsType> = (title,props) => {
    return (
        <div>
            {props.children}
        </div>
    );
};

