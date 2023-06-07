import React from "react";
import styled from "styled-components";

const Capabilities = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h2>Capabilities</h2>
        <div className="cabilities">
          <i className="fa-solid fa-plus"></i>
          <p>
            Our team has years of experience in digital marketing, and we stay
            up-to-date with the latest industry trends and techniques.
          </p>
        </div>

        <div className="cabilities">
          <i className="fa-solid fa-plus"></i>
          <p>
            We work closely with our clients to understand their unique needs
            and create customized strategies that deliver results.
          </p>
        </div>

        <div className="cabilities">
          <i className="fa-solid fa-plus"></i>
          <p>
            We use data-driven insights to continuously optimize our clients'
            campaigns and maximize their ROI.
          </p>
        </div>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  .content h2 {
    color: var(--clr-primary-5);
    font-size: 24px;
  }
 .cabilities{
    display: flex;
    align-items: baseline;
    margin-top: 2rem;
    i{
        font-size: 1rem;
        color: var(--clr-primary-5);
        margin-right: 1rem;

    }
 }
  p {
    max-width: 45em;
    color: var(--clr-primary-3);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    // height: calc(100vh - 5rem);
    // grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    
    @media (min-width: 992px) {
        // height: calc(100vh - 5rem);
        // grid-template-columns: 1fr 1fr;
        gap: 8rem;
        h1 {
          margin-bottom: 2rem;
        }
        p {
          font-size: 1.25rem;
        }
    
    
`;

export default Capabilities;
