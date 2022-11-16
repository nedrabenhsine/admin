import { Form, Button, Select, Input, Table, DatePicker } from "antd";
import Layout from "../../layouts/Layout";
import { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";
import Swal from "sweetalert2";

const Permissions = () => {
  const [perm, setperm] = useState([]);
  const [idd, setidd] = useState(0);
  const [data, setData] = useState({
    statut: "",
  });

  const handleChange = (value) => {
    setData({ ...data, [value.id]: value.value });
  };
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
          statut: e.statut,
          user: e.user.firstname,
        };
      });

      setperm(res.data);
    });
  };
  const updateStatut = (id) => {
    console.log(id);
    axios.patch(`http://localhost:5000/permession/${id}`, data).then((res) => {
      console.log("res.data", res.data);
    });
  };

  useEffect(() => {
    getall();
  }, [perm]);

  console.log("perm", perm);
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "titre",
      dataIndex: "titel",
      key: "titel",
    },
    {
      title: "Date début",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "heure de début",
      dataIndex: "start_hour",
      key: "start_hour",
    },
    {
      title: "heure de fin",
      dataIndex: "end_hour",
      key: "end_hour",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Employé",
      dataIndex: "user",
      key: "user",
    },
    {
      title: "Actions",
      dataIndex: "action",
      key: "action",
      render: (text, record) => {
        return (
          <div className="col">
            <Select
              id="statut"
              placeholder="Changer le statut"
              style={{ width: "100px" }}
              onChange={(value, obj) => {
                console.log(obj);
                setidd(obj.demandeid);
                handleChange({
                  value: value,
                  id: "statut",
                });
              }}
              options={[
                {
                  value: "accepté",
                  demandeid: record.id,
                  label: "accepté",
                },
                {
                  value: "réfusé",
                  demandeid: record.id,
                  label: "réfusé",
                },
              ]}
            />
            {data.statut && idd === record.id ? (
              <button
                className="btn btn-outline-primary btn-sm p-0 m-0 mt-2"
                style={{ width: "100px" }}
                onClick={() => updateStatut(record.id)}
              >
                Change
              </button>
            ) : null}
          </div>
        );
      },
    },
    {
      title: "statut",
      dataIndex: "statut",
      key: "statut",
      render: (text, record) => {
        console.log(record);
        return (
          <>
            <div className="text-uppercase fw-bold">{text}</div>
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
            <Table dataSource={perm} columns={columns} />
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Permissions;
