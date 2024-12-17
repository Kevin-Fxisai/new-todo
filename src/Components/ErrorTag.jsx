import React from 'react'

import { Space, Typography } from 'antd';

const { Text, Link } = Typography;

const ErrorTag = (props) => {
    return (
        <div>
            <Text type="danger">{props.children}</Text>
        </div>
    )
}

export default ErrorTag