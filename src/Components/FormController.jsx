import React from 'react'
import InputTag from './InputTag'
// import TextArea from './TextArea'
// import Select from './Select'
// import Radio from './Radio'
// import CheckBox from './CheckBox'
// import DatePicker from './DatePicker'

const FormControler = (props) => {
    const {control, ...rest} = props
        switch(control){
            case 'input': return <InputTag {...rest}/>
            // case 'textarea': return <TextArea {...rest} />
            // case 'date': return <DatePicker {...rest} />
            // case 'select': return <Select {...rest}/>
            // case 'checkbox': return <CheckBox {...rest}/>
            // case 'radio': return <Radio {...rest} />
        }
}

export default FormControler