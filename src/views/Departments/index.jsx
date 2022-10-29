import { Form, Button, Select, Input, Table } from "antd"
import Layout from "../../layouts/Layout"
import { PlusOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import './index.css'
import axios from 'axios';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

const { Option } = Select
export default () => {

    const [display, setdisplay] = useState(false)
    const [dep, setdep] = useState([])



    const getall =()=>{
        axios.get(`http://localhost:5000/department/list`)
        .then(res => {
          const dep = res.data;
          console.log("dep : ",dep)
          setdep(dep);
        })
    }
    useEffect(() => {
        
       getall()

    }, []);

    const [data, setData] = useState({
        name:"",
        nb_employer:"",
        


    })
  

    const handleChange=(e)=>{
        setData({
          ...data,
          [e.target.name]:e.target.value
        })
      }

    const onSubmit = values => {
        console.log(values);


        axios.post("http://localhost:5000/department",data).then((res) => {
            console.log("data of department", res.data);
            setData(res.data);
          }).catch(err=>{
            console.log(err)
            
          
          })

    }
    
    const onDelete = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
    
          }).then((result) => {
            if (result.isConfirmed) {
        
            axios.delete(`http://localhost:5000/department/${id}`)
            .then((res) => {
            getall();       
                }).catch(err=>{
                  console.log(err)
                }); 
    
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })   
      };

    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Nom',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Nombre de employé',
            dataIndex: 'nb_employer',
            key: 'nb_employer',
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
                            <Link to={`/updatedep/${record.id}`} >
                            <i onClick={() => setdisplay(false)} style={{ fontSize: '20px' }} class="las la-edit"></i>
                            </Link>
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

                        <h3>Départements</h3>
                        {
                            !display
                            &&
                            <Button type="primary" shape="round" onClick={() => setdisplay(true)} icon={<PlusOutlined />} >
                                ajouter département
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
                                name='name'
                                label='Nom'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your first name!',
                                    },
                                ]}
                            >
                                <Input name='name' onChange={handleChange}/>
                            </Form.Item>




                            <Form.Item
                                name='nb_employer'
                                label='nombre des employé'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your address!',
                                    },
                                ]}
                            >
                                <Input name='nb_employer' onChange={handleChange}/>
                            </Form.Item>
                           
                            <Form.Item
                            >
                                <div style={{ display: 'flex' }} >
                                    <Button shape="round" type="primary" htmlType="submit" onClick={onSubmit}>
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
                        <Table dataSource={dep} columns={columns} />
                    }
                </div>
                
            </Layout>
        </>
    )
}