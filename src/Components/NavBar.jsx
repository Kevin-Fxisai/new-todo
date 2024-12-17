import React from 'react'

import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;
const items = new Array(3).fill(null).map((_, index) => ({
    key: index + 1,
    label: `nav ${index + 1}`,
}));

const NavBar = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout>
            <Header style={{
                display: 'flex',
                alignItems: 'center',
            }}>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    items={items}
                    style={{
                        flex: 1,
                        minWidth: 0,
                    }}
                />
            </Header>
                    
        </Layout>
    )
}

export default NavBar