import { Form, Button, Select, Input, Table, Col } from "antd";
import Layout from "../../layouts/Layout";
import { BsPlus } from "react-icons/bs";
import { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const { Option } = Select;
const Departments = () => {
    const [display, setdisplay] = useState(false);
    const [dep, setdep] = useState([]);

    const getall = () => {
        axios.get(`http://localhost:5000/department/list`).then((res) => {
            const dep = res.data;
            console.log("dep : ", dep);
            setdep(dep);
        });
    };
    useEffect(() => {
        getall();
    }, [dep]);

    const [data, setData] = useState({
        name: "",
        // nb_employer: "",
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = (values) => {
        console.log(values);
        axios
            .post("http://localhost:5000/department", data)
            .then((res) => {
                console.log("data of department", res.data);
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const onDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axios
                    .delete(`http://localhost:5000/department/${id}`)
                    .then((res) => {
                        getall();
                    })
                    .catch((err) => {
                        console.log(err);
                    });

                Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
        });
    };
    const columns = [
        {
            title: "id",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Nom",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Nombre de employé",
            dataIndex: "nb_employer",
            key: "nb_employer",
        },

        {
            title: "actions",
            dataIndex: "address",
            key: "address",
            render: (text, record) => {
                return (
                    <>
                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                            <i
                                style={{ fontSize: "20px" }}
                                class="las la-trash-alt"
                                onClick={() => onDelete(record.id)}
                            ></i>
                            <Link to={`/updatedep/${record.id}`}>
                                <i
                                    onClick={() => setdisplay(false)}
                                    style={{ fontSize: "20px" }}
                                    class="las la-edit"
                                ></i>
                            </Link>
                        </div>
                    </>
                );
            },
        },
    ];

    return (
        <>
            <Layout>
                <div class="container-fluid py-2 mt-5">
                    <div style={{ display: "flex", "justify-content": "space-between" }}>
                        <h3 className="text-uppercase">Départements</h3>
                        <div>
                            <button
                                type="button"
                                className="btn btn-primary p-2"
                                data-bs-toggle="modal"
                                data-bs-target="#ModalOne"
                            >
                                ajouter département
                                <BsPlus size={28} />
                            </button>
                            <div
                                class="modal fade"
                                id="ModalOne"
                                tabindex="-1"
                                aria-labelledby="ModalOneLabel"
                                aria-hidden="true"
                            >
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5 ms-2" id="exampleModalLabel">
                                                {" "}
                                                Ajouter nouveau département{" "}
                                            </h1>
                                            <button
                                                type="button"
                                                class="btn-close"
                                                data-bs-dismiss="modal"
                                                aria-label="Close"
                                            ></button>
                                        </div>
                                        <div class="modal-body">
                                            <Form wrapperCol={{ span: 24 }} labelCol={{ span: 24 }}>
                                                <Col style={{ padding: "10px" }}>
                                                    <Form.Item
                                                        name="name"
                                                        label="Nom"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: "Please input your first name!",
                                                            },
                                                        ]}
                                                    >
                                                        <Input name="name" onChange={handleChange} />
                                                    </Form.Item>

                                                    <Form.Item>
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                                "justify-content": "center",
                                                            }}
                                                        >
                                                            <Button
                                                                type="primary"
                                                                htmlType="submit"
                                                                onClick={onSubmit}
                                                                data-bs-dismiss="modal"
                                                            >
                                                                Ajouter
                                                            </Button>
                                                            <Button
                                                                data-bs-dismiss="modal"
                                                                style={{ marginLeft: "15px" }}
                                                                type="ghost"
                                                            >
                                                                Annuler
                                                            </Button>
                                                        </div>
                                                    </Form.Item>
                                                </Col>
                                            </Form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ padding: "20px" }}>
                    {!display && <Table dataSource={dep} columns={columns} />}
                </div>
            </Layout>
        </>
    );
};
export default Departments;
