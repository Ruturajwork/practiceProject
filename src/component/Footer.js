import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>Address</Heading>
            <p>500-21 Lorem Ave. Hamilton, LA BLD 902 Los Angeles</p>
          </Column>
          <Column>
            <Heading>Follow</Heading>
            <FooterLink href="#">Facebook</FooterLink>
            <FooterLink href="#">Instagram</FooterLink>
            <FooterLink href="#">Linkedin</FooterLink>
            <FooterLink href="#">Twitter</FooterLink>
          </Column>
          <Column>
            <Heading>INQUIRIES</Heading>
            <p>info@thrive.com</p>
          </Column>
          <Column>
            <Heading>CALL US</Heading>
            <p>+1 098 890 6751</p>
          </Column>
          <Column>
            <Heading>NEWSLETTER</Heading>
            <p style={{ color: "#7D7D7D" }}>Email Id</p>
          </Column>
        </Row>
        <div className="policy ">
          <p className="p-4">© 2023 Ruturaj</p>
          <p className="p-4">Privacy Policy </p>
        </div>
      </Container>
    </Box>
  );
};

export const Box = styled.div`
  padding: 80px 60px;
  background: var(--clr-primary-2);
  bottom: 0;
  margin-top: 13rem;
  width: 100%;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
  .policy {
    display: flex;
    justify-content: start;
    padding-top: 40px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(184px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: var(--clr-primary-3);
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #7d7d7d;
  font-weight: bold;
  text-transform: uppercase;
`;

export default Footer;
