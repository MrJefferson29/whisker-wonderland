import React from "react";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import "./Team.css";
import Col from "react-bootstrap/Col";
import i1 from "../Assets/store.jpg";
import i2 from "../Assets/inventory.webp";
import i3 from "../Assets/vet.jpg";
import i4 from "../Assets/trainer.webp";
import i5 from "../Assets/groomer.jpg";
import i6 from "../Assets/deliv.jpg";
import i7 from "../Assets/main.jpg";
import i8 from "../Assets/security.avif";
import i9 from "../Assets/IT.jpg";
import g3 from "../Assets/g3.jpg";

export default function Team() {
  return (
    <Styles>
      <Container>
        <Row style={{padding: '30px', background: 'burlywood'}}>
            <Col md="5" style={{ fontSize: "1.4rem", fontWeight: '700', display: 'flex', alignItems: 'center' }}>
              To speak to any of these staff personel(ex; the Vet) regarding any
              problems you are facing, please contact our customer care on the
              Messages icon on the screen, and request to speak with that
              department, or individual staff. You will be responded to as quick
              as possible.
            </Col>
            <Col md='5'>
                <img src={g3} style={{width: '100%', borderRadius: '5px', boxShadow: '00px 00px 8px 4px'}} />
            </Col>
        </Row>
        <Row>
          <div className="container">
            <div className="row text-center">
              {/* <!-- Team item --> */}
              <div className="col-xl-3 col-sm-6 mb-5">
                <div className="bg-white rounded shadow-sm py-5 px-4">
                  <img src={i1} alt="" width="100" className="cradle" />
                  <h5 className="mb-0">Emilia Nevoresky</h5>
                  <span className="small text-uppercase text-muted">
                    Store Manager
                  </span>
                  <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item">
                      <a href="#" className="social-link">
                        <i className="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="social-link">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* <!-- Team item --> */}
              <div className="col-xl-3 col-sm-6 mb-5">
                <div className="bg-white rounded shadow-sm py-5 px-4">
                  <img src={i7} alt="" width="100" className="cradle" />
                  <h5 className="mb-0">Michele Jenna</h5>
                  <span className="small text-uppercase text-muted">
                    Customer Service Representative
                  </span>
                  <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item">
                      <a href="#" className="social-link">
                        <i className="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="social-link">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* <!-- Team item --> */}
              <div class="col-xl-3 col-sm-6 mb-5">
                <div class="bg-white rounded shadow-sm py-5 px-4">
                  <img src={i2} alt="" width="100" className="cradle" />
                  <h5 class="mb-0">Henry Sunderland</h5>
                  <span class="small text-uppercase text-muted">
                    Inventory Manager
                  </span>
                  <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* <!-- Team item --> */}
              <div class="col-xl-3 col-sm-6 mb-5">
                <div class="bg-white rounded shadow-sm py-5 px-4">
                  <img src={i3} alt="" width="100" className="cradle" />
                  <h5 class="mb-0">John Tarlington</h5>
                  <span class="small text-uppercase text-muted">
                    Chief Vetenarian
                  </span>
                  <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <div class="container">
            <div class="row text-center">
              {/* <!-- Team item --> */}
              <div class="col-xl-3 col-sm-6 mb-5">
                <div class="bg-white rounded shadow-sm py-5 px-4">
                  <img src={i4} alt="" width="100" className="cradle" />
                  <h5 class="mb-0">Sarah Jaye</h5>
                  <span class="small text-uppercase text-muted">
                    Dog Trainer
                  </span>
                  <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* <!-- Team item --> */}
              <div class="col-xl-3 col-sm-6 mb-5">
                <div class="bg-white rounded shadow-sm py-5 px-4">
                  <img src={i5} alt="" width="100" className="cradle" />
                  <h5 class="mb-0">Christopher Bashaar</h5>
                  <span class="small text-uppercase text-muted">
                    Groomer and Care specialist
                  </span>
                  <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* <!-- Team item --> */}
              <div class="col-xl-3 col-sm-6 mb-5">
                <div class="bg-white rounded shadow-sm py-5 px-4">
                  <img
                    src="https://bootstrapious.com/i/snippets/sn-team/teacher-1.jpg"
                    alt=""
                    width="100"
                    className="cradle"
                  />
                  <h5 class="mb-0">Jamie Carter</h5>
                  <span class="small text-uppercase text-muted">
                    Human Resources
                  </span>
                  <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* <!-- Team item --> */}
              <div class="col-xl-3 col-sm-6 mb-5">
                <div class="bg-white rounded shadow-sm py-5 px-4">
                  <img src={i6} alt="" width="100" className="cradle" />
                  <h5 class="mb-0">Temple Gilbert</h5>
                  <span class="small text-uppercase text-muted">
                    Delivery Driver
                  </span>
                  <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <div class="container">
            <div class="row text-center">
              {/* <!-- Team item --> */}
              <div class="col-xl-3 col-sm-6 mb-5">
                <div class="bg-white rounded shadow-sm py-5 px-4">
                  <img
                    src="https://bootstrapious.com/i/snippets/sn-team/teacher-2.jpg"
                    alt=""
                    width="100"
                    className="cradle"
                  />
                  <h5 class="mb-0">Samuel Hardy</h5>
                  <span class="small text-uppercase text-muted">
                    Maintainance And Hygiene
                  </span>
                  <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* <!-- Team item --> */}
              <div class="col-xl-3 col-sm-6 mb-5">
                <div class="bg-white rounded shadow-sm py-5 px-4">
                  <img src={i8} alt="" width="100" className="cradle" />
                  <h5 class="mb-0">Mark Oakingsly</h5>
                  <span class="small text-uppercase text-muted">
                    Security Representative
                  </span>
                  <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* <!-- Team item --> */}
              <div class="col-xl-3 col-sm-6 mb-5">
                <div class="bg-white rounded shadow-sm py-5 px-4">
                  <img src={i9} alt="" width="100" className="cradle" />
                  <h5 class="mb-0">Jim Ling-Hwei</h5>
                  <span class="small text-uppercase text-muted">
                    IT personel
                  </span>
                  <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* <!-- Team item --> */}
              <div class="col-xl-3 col-sm-6 mb-5">
                <div class="bg-white rounded shadow-sm py-5 px-4">
                  <img
                    src="https://bootstrapious.com/i/snippets/sn-team/teacher-7.jpg"
                    alt=""
                    width="100"
                    className="cradle"
                  />
                  <h5 class="mb-0">Robert K.J</h5>
                  <span class="small text-uppercase text-muted">
                    Visual Merchandiser
                  </span>
                  <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </Styles>
  );
}

const Styles = styled.div`
  .cradle {
    width: 50%;
    height: 115px;
    border-radius: 100%;
    margin-bottom: 20px;
  }
`;
