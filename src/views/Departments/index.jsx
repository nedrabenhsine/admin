import { Form, Button, Select, Input, Table, Col } from "antd";
import Layout from "../../layouts/Layout";
import { BsPlus } from "react-icons/bs";
import { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
import { Link,useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Departments = () => {
  const [dep, setdep] = useState([]);
  const [data, setData] = useState({
    name: "",
  });

  const [depp, setdepp] = useState([]);

  const { id } = useParams();
  const getbyid = () => {
    axios.get(`http://localhost:5000/department/${id}`).then((res) => {
      const dep = res.data;
      console.log("dep : ", dep);
      setdep(dep);
    });
  };
  const handleChangee = (e) => {
    setdep({
      ...dep,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitt = (e) => {
    e.preventDefault();

    axios
      .patch(`http://localhost:5000/department/${id}`, depp)
      .then((res) => {
        console.log("data of department", res.data);
        setdepp(res.data);
        window.location = "/departments";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const getall = () => {
    axios.get(`http://localhost:5000/department/list`).then((res) => {
      const dep = res.data;
      console.log("dep : ", dep);
      setdep(dep);
    });
  };
  useEffect(() => {
    getall();
    getbyid();
  }, [dep]);

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
              <Link>
                <i
                  style={{ fontSize: "20px" }}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal2"
                  class="las la-edit"
                ></i>
              </Link>
              <div
                class="modal fade"
                id="exampleModal2"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5 ms-2" id="exampleModalLabel">
                        {" "}
                        Éditer les infos d'un{" "}
                      </h1>
                      <button
                        type="button"
                        class="btn-close text-dark"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      {" "}
                      <div class="container">
                        <h2
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "red",
                          }}
                        >
                          editer Départment
                        </h2>

                        <form className="form-inline" onSubmit={onSubmitt}>
                          <div className="form-group">
                            <label>nom:</label>

                            <input
                              type="text"
                              className="form-control"
                              value={depp.name}
                              name="name"
                              onChange={handleChangee}
                            />
                          </div>
                          <div class="form-group">
                            <label>nombre de employee:</label>
                            <input
                              type="text"
                              className="form-control"
                              value={depp.nb_employer}
                              name="nb_employer"
                              onChange={handleChangee}
                            />
                          </div>

                          <button
                            type="submit"
                            shape="round"
                            style={{ fontSize: "15px" }}
                            className="btn btn-default"
                          >
                            editer
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      },
    },
  ];

  return (
    <>
      <Layout>
        <div className="bg-light me-5 rounded p-5">
          <div class="container-fluid p-0">
            <div
              style={{ display: "flex", "justify-content": "space-between" }}
            >
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
                        <h1
                          class="modal-title fs-5 ms-2"
                          id="exampleModalLabel"
                        >
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
            <Table dataSource={dep} columns={columns} />
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Departments;
