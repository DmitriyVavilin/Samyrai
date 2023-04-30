import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export type AddNewPostFormType = {
    newPost: string
}

export const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Enter your profile'} component={'textarea'} name={'newPost'}/>
            </div>
            <div>
                <button>add post</button>
            </div>
        </form>
    );
};

export const AddNewPostFormRedux = reduxForm<AddNewPostFormType>({form: 'AddNewPostForm'})(AddNewPostForm)

// export const AddNewPostForm = () => {
//     return (
//         <div>
//             <Formik
//                 initialValues={{ name: '' }}
//                 onSubmit={(values, actions) => {
//                         alert(JSON.stringify(values));
//                 }}
//             >
//                 {props => (
//                     <form onSubmit={props.handleSubmit}>
//                         <textarea
//                             onChange={props.handleChange}
//                             onBlur={props.handleBlur}
//                             value={props.values.name}
//                             name="name"
//                         />
//                         <button type="submit">Submit</button>
//                     </form>
//                 )}
//             </Formik>
//         </div>
//     );
// };
//
