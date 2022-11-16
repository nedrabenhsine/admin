import { useEffect, useState } from "react";
import Layout from "../../layouts/Layout";
import { Form, Button, Select, Input, Table, Col, Row } from "antd";
import axios from "axios";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";
const { Option } = Select;

const ListdesCongés = () => {
  const [emp, setemp] = useState([]);
  const [idd, setidd] = useState(0);
  const [data, setData] = useState({
    statut: "",
  });

  const handleChange = (value) => {
    setData({ ...data, [value.id]: value.value });
  };

  const getall = () => {
    axios.get(`http://localhost:5000/holiday/list`).then((res) => {
      // setemp(res.data);

      res.data = res.data.map((e) => {
        return {
          titel: e.holidaytype.name,
          start_date: e.start_date,
          end_date: e.end_date,
          description: e.description,
          holidaytype: e.holidaytype,
          statut: e.statut,
          user: e.user,
          username: e.user.username,
          id: e.id,
        };
      });

      setemp(res.data);
    });
  };
  console.log(data);
  const updateStatut = (id) => {
    console.log(id);
    axios.patch(`http://localhost:5000/holiday/${id}`, data).then((res) => {
      console.log("res.data", res.data);
    });
  };
  useEffect(() => {
    getall();
  }, [emp]);
  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "l'employée",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "type de congé",
      dataIndex: "titel",
      key: "titel",
    },
    {
      title: "date de début",
      dataIndex: "start_date",
      key: "start_date",
    },
    {
      title: "date de fin",
      dataIndex: "end_date",
      key: "end_date",
    },

    {
      title: "description",
      dataIndex: "description",
      key: "description",
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
        return (
          <>
            <div className="text-uppercase fw-bold">{text}</div>
          </>
        );
      },
    },
  ];
  return (
    <Layout>
      <Toaster position="top-right" />
      <div className="bg-light me-5 rounded p-5">
        <div class="container-fluid p-0">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h3 className="text-uppercase">liste des congés</h3>
          </div>
        </div>

        <div>
          <Table dataSource={emp} columns={columns} />
        </div>
      </div>
    </Layout>
  );
};

export default ListdesCongés;
