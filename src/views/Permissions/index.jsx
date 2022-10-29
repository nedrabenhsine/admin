import { Form, Button, Select, Input, Table, DatePicker } from "antd"
import Layout from "../../layouts/Layout"
import { PlusOutlined } from '@ant-design/icons';
import { useState, useEffect } from "react";
import './index.css'
import axios from "axios";
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
const { Option } = Select
export default () => {

    const [display, setdisplay] = useState(false)
    const [perm, setperm] = useState([])
    const [user, setuser] = useState([])




    const getall = () => {
        axios.get(`http://localhost:5000/permession/list`)
            .then(res => {

                // setemp(res.data);

                console.log(res.data);
        res.data=res.data.map(e => {
            return {
                        titel: e.titel,
                        date: e.date,
                        id: e.id,
                        description: e.description,
                        start_hour: e.start_hour,
                        end_hour: e.end_hour,
                        user: e.user.firstname,
                    }

                })


                setperm(res.data);


            })
        }
    
    
        useEffect(() => {
    
            getall()
    
        }, []);
    



    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'titre',
            dataIndex: 'titel',
            key: 'titel',
        },
        {
            title: 'Date début',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'heure de début',
            dataIndex: 'start_hour',
            key: 'start_hour',
        },
        {
            title: 'heure de fin',
            dataIndex: 'end_hour',
            key: 'end_hour',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Employé',
            dataIndex: 'user',
            key: 'user',
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
                    <h3>Autorisations</h3>
                    <Table dataSource={[{perm}]} columns={columns} />
                </div>
            </Layout>
        </>
    )
}
