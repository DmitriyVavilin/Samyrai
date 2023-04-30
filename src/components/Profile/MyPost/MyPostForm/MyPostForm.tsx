import React from 'react';
import {Formik} from "formik";

export const MyPostForm = () => {
    return (
        <div>
            <Formik
                initialValues={{ text: '' }}
                onSubmit={(values, actions) => {
                        alert(JSON.stringify(values));
                }}
            >
                {props => (
                    <form onSubmit={props.handleSubmit}>
                        <textarea
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.text}
                            name="name"
                        />
                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default MyPostForm;