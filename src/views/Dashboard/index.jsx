import Layout from "../../layouts/Layout";
import { Col, Row } from "@themesberg/react-bootstrap";

import {
  CounterWidgetCust,
  CounterWidgetRev,
  CounterWidgetUsers,
  SalesValueWidget,
  SalesValueWidgetPhone,
} from "./Widgets";
import { faCashRegister, faChartLine } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  return (
    <>
      <Layout>
        <div class="row me-2">
          <div class="col-xl-4 mb-4">
            <CounterWidgetCust
              category="Visitors"
              title="345k"
              period="Feb 1 - Apr 1"
              percentage={18.2}
              icon={faChartLine}
              iconColor="shape-secondary"
            />
          </div>
          <div class="col-xl-4 mb-4">
            <CounterWidgetRev
              category="Revenue"
              title="$3,594"
              period="Feb 1 - Apr 1"
              percentage={-8.4}
              icon={faCashRegister}
              iconColor="shape-tertiary"
            />
          </div>
          <div class="col-xl-4 mb-4">
            <CounterWidgetUsers
              category="Users"
              title="6,5K"
              period="May 1 - Aug 1"
              percentage={13.7}
              icon={faCashRegister}
              iconColor="shape-tertiary"
            />
          </div>
          {/* <div class="col-xl-3 col-sm-6">
            <div class="card">
              <div class="card-body p-3">
                <div class="row">
                  <div class="col-8">
                    <div class="numbers">
                      <p class="text-sm mb-0 text-capitalize font-weight-bold">
                        les condidatures
                      </p>
                      <h5 class="font-weight-bolder mb-0">
                        $103,430
                        <span class="text-success text-sm font-weight-bolder">
                          +5%
                        </span>
                      </h5>
                    </div>
                  </div>
                  <div class="col-4 text-end">
                    <div class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                      <i
                        class="ni ni-cart text-lg opacity-10"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
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
