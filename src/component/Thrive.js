import React from "react";
import styled from "styled-components";
import vinicius from "../assest/img/vinicius.jpg";
import shubham from "../assest/img/shubham.jpg";
import maxim from "../assest/img/maxim.jpg";

const Thrive = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <div className="thrive">
          <h2>THRIVE in action</h2>
          <hr />

          <p>
            We pride ourselves on delivering measurable results for our clients.
            Check out some of our recent success stories below.
          </p>
        </div>

        <div className="content">
          <img src={vinicius} alt="vibicius" />
          <div className="contact-form ">
            <h5>
              Synthexa <span>2022</span>{" "}
            </h5>
            <p>
              Our team worked closely with the Synthexa to ensure that their
              vision was fully realized, and the end result was a success.
            </p>
          </div>
        </div>
      </div>

      <div className="section-center">
        <div className="content">
          <div className="contact-form ">
            <h5>
              Veritasia <span>2021</span>{" "}
            </h5>
            <p>
              Despite the challenges that arose during the project, we were able
              to find innovative solutions.
            </p>
          </div>
          <img src={shubham} alt="shubham" />
        </div>
      </div>

      <div className="section-center">
        <div className="content">
          <img src={maxim} alt="vibicius" />
          <div className="contact-form ">
            <h5>
              Novarise <span>2020</span>{" "}
            </h5>
            <p>
              Novarise had a specific vision for their brand, and we worked
              closely with them to bring it to life.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 5rem 0;
  h2 {
    color: var(--clr-primary-5);
    font-size: 24px;
  }
  hr {
    transform: rotate(90deg);
    width: 30px;
    height: 0px;
    position: absolute;
    // border: 1px solid var(--clr-primary-3);
    color: var(--clr-primary-3);
  }

  h5 {
    color: var(--clr-primary-3);
  }
  img {
    text-transform: none;
    width: 400px;
    height: 300px;
  }
  p {
    margin-top: 2rem;
    line-height: 3;

    color: var(--clr-primary-3);
  }
  .contact-form {
    // width: 90vw;
    // max-width: 500px;
    display: flex;
    display: grid;
  }

  .contact-form h5 {
    font-size: 50px;
  }
  .contact-form span {
    color: var(--clr-primary-4);
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }

  @media (min-width: 500px) {
    p {
      margin-bottom: 0;
    }
    img{
      width: 350px;
      height: 250px;
      margin-top: 30px
    }
  }
  
`;

export default Thrive;
