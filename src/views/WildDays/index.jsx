import Layout from "../../layouts/Layout"
import { Row, Col, Calendar, Badge, Table } from 'antd'
export default () => {

    const getListData = (value) => {
        let listData;

        switch (value.date()) {
            case 8:
                listData = [
                    {
                        type: 'warning',
                        content: 'This is warning event.',
                    },
                    {
                        type: 'success',
                        content: 'This is usual event.',
                    },
                ];
                break;

            case 10:
                listData = [
                    {
                        type: 'warning',
                        content: 'This is warning event.',
                    },
                    {
                        type: 'success',
                        content: 'This is usual event.',
                    },
                    {
                        type: 'error',
                        content: 'This is error event.',
                    },
                ];
                break;

            case 15:
                listData = [
                    {
                        type: 'warning',
                        content: 'This is warning event',
                    },
                    {
                        type: 'success',
                        content: 'This is very long usual event。。....',
                    },
                    {
                        type: 'error',
                        content: 'This is error event 1.',
                    },
                    {
                        type: 'error',
                        content: 'This is error event 2.',
                    },
                    {
                        type: 'error',
                        content: 'This is error event 3.',
                    },
                    {
                        type: 'error',
                        content: 'This is error event 4.',
                    },
                ];
                break;

            default:
        }

        return listData || [];
    };

    const getMonthData = (value) => {
        if (value.month() === 8) {
            return 1394;
        }
    };

    const monthCellRender = (value) => {
        const num = getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    };

    const dateCellRender = (value) => {
        const listData = getListData(value);
        return (
            <ul className="events">
                {listData.map((item) => (
                    <li key={item.content}>
                        <Badge status={item.type} text={item.content} />
                    </li>
                ))}
            </ul>
        );
    };

    const columns = [
        {
            title: 'Id',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Date',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Heure début',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Heure fin',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Description',
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
                    <h3>Congées</h3>

                    <Row>
                        <Col xs={24} sm={24} md={24} lg={24} >
                            <Calendar style={{ border: '1px solid lightgrey', padding: '10px' }} dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} >
                            <br />
                            <br />
                            <br />
                            <Table dataSource={[{}]} columns={columns} />

                        </Col>
                    </Row>
                </div>
            </Layout>
        </>
    )
}