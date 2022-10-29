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

    const [displayupdate, setdisplayUpdate] = useState(false)
    const [emp,setemp] = useState([])

    
    const getall =() =>{
    axios.get(`http://localhost:5000/users/list`)
    .then(res => {

        // setemp(res.data);

        console.log(res.data);
        res.data=res.data.map(e => {
            return {
                departement: e.departement.name,
                firstname: e.firstname,
                username: e.username,
                id: e.id,
                email: e.email,
                telephone: e.telephone,
                adress: e.adress,
            }
        })


        setemp(res.data);


    })
}


    useEffect(() => {

        getall()

    }, []);

    
    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Nom',
            dataIndex: 'firstname',
            key: 'firstname',
        },
        {
            title: 'Prénom',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
       
        {
            title: 'Addresse',
            dataIndex: 'adress',
            key: 'adress',
        },
        {
            title: 'Département',
            dataIndex: 'departement',
            key: 'departement',
        },
        {
            title: 'telephone',
            dataIndex: 'telephone',
            key: 'telephone',
        },
        {
            title: 'actions',
            dataIndex: 'address',
            key: 'address',
            render: (text, record) => {
                return (
                    <>
                    
                        
                            <div style={{ display: 'flex', justifyContent: 'space-around' }} >
                            <i style={{ fontSize: '20px' }} class="las la-trash-alt" onClick={() => onDelete(record.id)}></i>
                            <i onClick={() => setdisplayUpdate(true)} style={{ fontSize: '20px' }} class="las la-edit"></i>
                        </div>
                        
                    </>
                )
            }
        },

    ];
    const onDelete = (id) => {

        Swal.fire({
            title: 'vous etes sure ?',
            text: "Vous ne pourrez pas revenir en arrière!",
            icon: 'Attention',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Oui, supprimez-le!'
    
          }).then((result) => {
            if (result.isConfirmed) {
        
            axios.delete(`http://localhost:5000/users/${id}`)
            .then((res) => {
            getall();       
                }).catch(err=>{
                  console.log(err)
                }); 
    
              Swal.fire(
                'Supprimé !',
                ' Votre employes a été supprimé.',
                'Succès'
              )
            }
          })   
      };



    return (
        <>
            <Layout>
                <div class="container-fluid py-6">
                    <div
                        style={{ display: 'flex', justifyContent: 'space-between' }}
                    >

                        <h3>Employers</h3>
                        {
                            !display
                            &&
                            <Button type="primary" shape="round" onClick={() => setdisplay(true)} icon={<PlusOutlined />} >
                                ajouter employé
                            </Button>
                        }
                    </div>

                </div>
                <div style={{ padding: '20px' }} >
                    {
                        display
                        &&
                        <Form
                            wrapperCol={{ span: 12 }}
                            labelCol={{ span: 24 }}
                        >
                            <Form.Item
                                name='firstname'
                                label='Nom'
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
                                name='lastname'
                                label='Prénom'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your last name!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name='email'
                                label='Email'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your email!',
                                    },
                                ]}
                            >
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
                        displayupdate
                        &&
                        <Form
                            wrapperCol={{ span: 12 }}
                            labelCol={{ span: 24 }}
                        >
                            <Form.Item
                                name='firstname'
                                label='Nom'
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
                                name='lastname'
                                label='Prénom'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your last name!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name='email'
                                label='Email'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your email!',
                                    },
                                ]}
                            >
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
                                        Update
                                    </Button>
                                    <Button onClick={() => setdisplay(false)} style={{ marginLeft: "15px" }} shape="round" type="ghost" >
                                        Annuler
                                    </Button>
                                </div>
                            </Form.Item>
                        </Form>
                    }
                    {
                        !display && !displayupdate
                        &&
                        <Table dataSource={emp} columns={columns} />
                    }
                </div>
            </Layout>
        </>
    )
}