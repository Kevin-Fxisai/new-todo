import React from 'react'

import { Input } from 'antd';
import { Field, ErrorMessage } from 'formik'
import ErrorTag from './ErrorTag'

const InputTag = (props) => {
    const { label, name, ...rest } = props
    console.log(name);
    
    return (
        <div className='form-control'>
            {/* <label htmlFor={name}>{label}</label> */}
            <Field id={name} name={name} {...rest}>
                {
                    ({field}) => {return(<>
                        <Input placeholder="Basic usage" id={name} {...rest}  {...field} />
                    </>
                    )}
                }
            </Field>

            <ErrorMessage name={name} component={ErrorTag} />
        </div>
    )
}

export default InputTag