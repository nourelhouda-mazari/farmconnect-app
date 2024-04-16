import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
    } from "mdb-react-ui-kit";
    import React from "react";
    import { useTranslation } from 'react-i18next';
    import i18n from '../i18n';
    
    export default function Panier() {
      const { t, i18n } = useTranslation();

      const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  }; 
    return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard>
              <MDBCardBody className="p-4">
                <MDBRow>
                  <MDBCol lg="7">
                    <MDBTypography tag="h5">
                      <a href="#!" className="text-body">
                        <MDBIcon fas icon="long-arrow-alt-left me-2" /> {t("Continue shopping")}
                      </a>
                    </MDBTypography>
    
                    <hr />
    
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p className="mb-1">{t("Shopping cart")}</p>
                        <p className="mb-0">{t("You have 4 items in your cart")}</p>
                      </div>
                      <div>
                        <p>
                          <span className="text-muted">{t("Sort by:")}</span>
                          <a href="#!" className="text-body">
                           {t(" price")}
                            <MDBIcon fas icon="angle-down mt-1" />
                          </a>
                        </p>
                      </div>
                    </div>
    
                    <MDBCard className="mb-3">
                      <MDBCardBody>
                        <div className="d-flex justify-content-between">
                          <div className="d-flex flex-row align-items-center">
                            <div>
                              <MDBCardImage
                                src=" "
                                fluid className="rounded-3" style={{ width: "65px" }}
                                alt={4("Shopping item")} />
                            </div>
                            <div className="ms-3">
                              <MDBTypography tag="h5">
                                {t("Product")}
                              </MDBTypography>
                              <p className="small mb-0">{t("Description")}</p>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center">
                            <div style={{ width: "50px" }}>
                              <MDBTypography tag="h5" className="fw-normal mb-0">
                                2
                              </MDBTypography>
                            </div>
                            <div style={{ width: "80px" }}>
                              <MDBTypography tag="h5" className="mb-0">
                                {t("Price")}
                              </MDBTypography>
                            </div>
                            <a href="#!" style={{ color: "#cecece" }}>
                              <MDBIcon fas icon="trash-alt" />
                            </a>
                          </div>
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
    );
    }