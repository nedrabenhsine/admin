import { Form, Button, Select, Input, Table } from "antd";
import Layout from "../../layouts/Layout";
import { PlusOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
import Swal from "sweetalert2";
const { Option } = Select;
const Remote = () => {
  const [display, setdisplay] = useState(false);
  const [remote, setremote] = useState([]);
  const getall = () => {
    axios.get(`http://localhost:5000/permession/list`).then((res) => {
      // setemp(res.data);

      res.data = res.data.map((e) => {
        return {
          titel: e.titel,
          date: e.date,
          id: e.id,
          description: e.description,
          start_hour: e.start_hour,
          end_hour: e.end_hour,
          user: e.user.firstname,
        };
      });

      setremote(res.data);
    });
  };

  useEffect(() => {
    getall();
  }, []);

  const columns = [
    {
      title: "Id",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "Date début",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Date fin",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Employé",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "actions",
      dataIndex: "address",
      key: "address",
      render: (text, record) => {
        return (
          <>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <i style={{ fontSize: "20px" }} class="las la-trash-alt"></i>
              <i style={{ fontSize: "20px" }} class="las la-edit"></i>
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
            <h3>Autorisations</h3>
            <Table dataSource={remote} columns={columns} />
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Remote;
