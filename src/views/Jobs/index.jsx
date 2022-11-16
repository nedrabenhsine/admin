import { Form, Button, Select, Input, Table, Col } from "antd";
import Layout from "../../layouts/Layout";
import { BsPlus } from "react-icons/bs";
import { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";
import Swal from "sweetalert2";
const { Option } = Select;
const Jobs = () => {
  const [display, setdisplay] = useState(false);
  const [job, setjob] = useState([]);
  const [jobtype, setjobtype] = useState([]);
  const [jobtypeid, setjobtypeid] = useState(0);

  const [data, setData] = useState({
    titel: "",
    salary: "",
    description: "",
    start_date: "",
    end_date: "",
    jobtype: 0,
  });

  const handleChange = (e) => {
    console.log(e.target);
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (values) => {
    console.log("data of add ", data);

    data.jobtype = jobtypeid;
    console.log("data of add ", data);

    axios
      .post("http://localhost:5000/Job", data)
      .then((res) => {
        console.log("data of job", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios.get(`http://localhost:5000/Jobtype/list`).then((res) => {
      const jobtype = res.data;
      //console.log("jobtype : ",jobtype)
      setjobtype(jobtype);
    });
  }, []);

  const getall = () => {
    axios.get(`http://localhost:5000/job/list`).then((res) => {
      // setemp(res.data);

      console.log(res.data);
      res.data = res.data.map((e) => {
        return {
          jobtype: e.jobtype.name,
          titel: e.titel,
          salary: e.salary,
          id: e.id,
          description: e.description,
          start_date: e.start_date,
          end_date: e.end_date,
        };
      });

      setjob(res.data);
    });
  };

  useEffect(() => {
    getall();
  }, [job]);

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
          .delete(`http://localhost:5000/job/${id}`)
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
      title: "Titre",
      dataIndex: "titel",
      key: "titel",
    },
    {
      title: "Type",
      dataIndex: "jobtype",
      key: "jobtype",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Date début",
      dataIndex: "start_date",
      key: "start_date",
    },
    {
      title: "Date fin",
      dataIndex: "end_date",
      key: "end_date",
    },

    {
      title: "salaire",
      dataIndex: "salary",
      key: "salary",
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
              <i
                onClick={() => setdisplay(true)}
                style={{ fontSize: "20px" }}
                class="las la-edit"
              ></i>
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
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3 className="text-uppercase">offres d'emploi</h3>
              {/* {!display && (
                            <Button
                                type="primary"
                                shape="round"
                                onClick={() => setdisplay(true)}
                                icon={<PlusOutlined />}
                            >
                                ajouter une offre
                            </Button>
                        )} */}
              <div>
                <button
                  type="button"
                  className="btn btn-primary p-2"
                  data-bs-toggle="modal"
                  data-bs-target="#ModalOne"
                >
                  ajouter une offre
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
                          Ajouter nouveau offre{" "}
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
                              name="titel"
                              label="Titre"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your first name!",
                                },
                              ]}
                            >
                              <Input name="titel" onChange={handleChange} />
                            </Form.Item>
                            <Form.Item
                              name="name"
                              label="type"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your last name!",
                                },
                              ]}
                            >
                              <Select
                                name="jobtype"
                                onChange={(value) => {
                                  setjobtypeid(value);
                                }}
                              >
                                {jobtype.map((j) => {
                                  return (
                                    <Option key={j.id} value={j.id}>
                                      {j.name}
                                    </Option>
                                  );
                                })}
                              </Select>
                            </Form.Item>
                            <Form.Item
                              label="salary"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your first name!",
                                },
                              ]}
                            >
                              <Input name="salary" onChange={handleChange} />
                            </Form.Item>
                            <Form.Item
                              label='Date de d"but'
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your passowrd!",
                                },
                              ]}
                            >
                              <Input
                                type="Date"
                                name="start_date"
                                onChange={handleChange}
                              />
                            </Form.Item>
                            <Form.Item
                              label="Date de fin"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your telephone!",
                                },
                              ]}
                            >
                              <Input
                                type="Date"
                                name="end_date"
                                onChange={handleChange}
                              />
                            </Form.Item>
                            <Form.Item
                              name="description"
                              label="description"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your first name!",
                                },
                              ]}
                            >
                              <Input
                                name="description"
                                onChange={handleChange}
                              />
                            </Form.Item>

                            <Form.Item>
                              <div style={{ display: "flex" }}>
                                <Button
                                  type="primary"
                                  htmlType="button"
                                  onClick={onSubmit}
                                  data-bs-dismiss="modal"
                                >
                                  Ajouter
                                </Button>
                                <Button
                                  onClick={() => setdisplay(false)}
                                  style={{ marginLeft: "15px" }}
                                  type="ghost"
                                  data-bs-dismiss="modal"
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
            {/* {display && (
                        <Form wrapperCol={{ span: 24 }} labelCol={{ span: 24 }}>
                            <Form.Item
                                name="titel"
                                label="Titre"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your first name!",
                                    },
                                ]}
                            >
                                <Input name="titel" onChange={handleChange} />
                            </Form.Item>
                            <Form.Item
                                name="name"
                                label="type"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your last name!",
                                    },
                                ]}
                            >
                                <Select
                                    name="jobtype"
                                    onChange={(value) => {
                                        setjobtypeid(value);
                                    }}
                                >
                                    {jobtype.map((j) => {
                                        return (
                                            <Option key={j.id} value={j.id}>
                                                {j.name}
                                            </Option>
                                        );
                                    })}
                                </Select>
                            </Form.Item>
                            <Form.Item
                                label="salary"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your first name!",
                                    },
                                ]}
                            >
                                <Input name="salary" onChange={handleChange} />
                            </Form.Item>
                            <Form.Item
                                label='Date de d"but'
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your passowrd!",
                                    },
                                ]}
                            >
                                <Input type="Date" name="start_date" onChange={handleChange} />
                            </Form.Item>
                            <Form.Item
                                label="Date de fin"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your telephone!",
                                    },
                                ]}
                            >
                                <Input type="Date" name="end_date" onChange={handleChange} />
                            </Form.Item>
                            <Form.Item
                                name="description"
                                label="description"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your first name!",
                                    },
                                ]}
                            >
                                <Input name="description" onChange={handleChange} />
                            </Form.Item>

                            <Form.Item>
                                <div style={{ display: "flex" }}>
                                    <Button
                                        shape="round"
                                        type="primary"
                                        htmlType="button"
                                        onClick={onSubmit}
                                    >
                                        Ajouter
                                    </Button>
                                    <Button
                                        onClick={() => setdisplay(false)}
                                        style={{ marginLeft: "15px" }}
                                        shape="round"
                                        type="ghost"
                                    >
                                        Annuler
                                    </Button>
                                </div>
                            </Form.Item>
                        </Form>
                    )} */}
            {!display && <Table dataSource={job} columns={columns} />}
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Jobs;
