import Layout from "../../layouts/Layout";
import { Col, Row } from "@themesberg/react-bootstrap";
import { SalesValueWidget } from "./Widgets";
import { MyResponsiveLine, MyResponsivePie, MyResponsiveBar } from "./Chartss";

const Dashboard = () => {
  return (
    <>
      <Layout>
        <div class="row me-2">
          <div class="col-xl-4 mb-4">
            <MyResponsiveLine />
          </div>
          <div class="col-xl-4 mb-4">
            <MyResponsivePie />
          </div>
          <div class="col-xl-4 mb-4">
            <MyResponsiveBar />
          </div>
        </div>
        <div class="card-body p-3">
          <Row className="justify-content-md-center me-2">
            <Col xs={12} className="mb-4 d-none d-sm-block">
              <SalesValueWidget
                title="Sales Value"
                value="10,567"
                percentage={10.57}
              />
            </Col>
            {/* <Col xs={12} className="mb-4 d-sm-none">
              <SalesValueWidgetPhone
                title="Sales Value"
                value="10,567"
                percentage={10.57}
              />
            </Col> */}
          </Row>
        </div>
      </Layout>
    </>
  );
};
export default Dashboard;
