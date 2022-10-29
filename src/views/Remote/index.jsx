import { Form, Button, Select, Input, Table } from "antd"
import Layout from "../../layouts/Layout"
import { PlusOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import './index.css'
import axios from 'axios';
import Swal from 'sweetalert2'
const { Option } = Select
export default () => {



    const [display, setdisplay] = useState(false)
    const [emp, setemp] = useState([])


    const columns = [
        {
            title: 'Id',
            dataIndex: 'name',
            key: 'name',
        },

        {
            title: 'Date début',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Date fin',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Employé',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'actions',
            dataIndex: 'address',
            key: 'address',
            render: (text, record) => {
                return (
                    <>
                        <div style={{ display: 'flex', justifyContent: 'space-around' }} >
                            <i style={{ fontSize: '20px' }} class="las la-trash-alt"></i>
                            <i style={{ fontSize: '20px' }} class="las la-edit"></i>
                        </div>
                    </>
                )
            }
        },
    ];
    return (
        <>
            <Layout>
                <div class="container-fluid py-4">
                    <div
                        style={{ display: 'flex', justifyContent: 'space-between' }}
                    >

                        <h3>Employers</h3>
                        {
                            !display
                            &&
                            <Button type="primary" shape="round" onClick={() => setdisplay(true)} icon={<PlusOutlined />} >
                                ajouter autorisation
                            </Button>
                        }
                    </div>

                </div>
                <div style={{ padding: '20px' }} >
                    {
                        display
                        &&
                        <Form
                            wrapperCol={{ span: 24 }}
                            labelCol={{ span: 24 }}
                        >
                            <Form.Item
                                name='titel'
                                label='titre'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your first name!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name='description'
                                label='Prénom'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your last name!',
                                    },
                                ]}
                            >
                                <Input />
                                <Form.Item

                                    label='Date de d"but'

                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your date!',
                                        },
                                    ]}
                                >
                                    <Input type="Date" name='date' />
                                </Form.Item>
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name='password'
                                label='Mot de passe'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your passowrd!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name='tele'
                                label='Téléphone'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your telephone!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name='adress'
                                label='Addresse'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your address!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name='departement'
                                label='Départment'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your departement!',
                                    },
                                ]}
                            >
                                <Select>
                                    <Option>option 1</Option>
                                    <Option>option 2</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                            >
                                <div style={{ display: 'flex' }} >
                                    <Button shape="round" type="primary" htmlType="submit">
                                        Ajouter
                                    </Button>
                                    <Button onClick={() => setdisplay(false)} style={{ marginLeft: "15px" }} shape="round" type="ghost" >
                                        Annuler
                                    </Button>
                                </div>
                            </Form.Item>
                        </Form>
                    }
                    {
                        !display
                        &&
                        <Table dataSource={emp} columns={columns} />
                    }
                </div>
            </Layout>
        </>
    )
}