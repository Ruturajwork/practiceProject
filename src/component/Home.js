import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h5>
          Unlock the Power of Digital Marketing
          <br />
          with <span>THRIVE</span>
        </h5>
        <hr />
        <p>
          We specialize in delivering results-driven digital marketing solutions
          that help businesses like yours achieve their goals.
        </p>
        {/* <Link to='/products' className='btn hero-btn'>
          shop now
        </Link> */}
      </article>
      <article>
        <div class="rectangle">
          <div class="circle">
            <i class="fa-solid fa-chevron-down"></i>
          </div>
        </div>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr;
  .content h5 {
    font-size: 92px;
    width: 9em;
    font-family: "Mont Blanc";
    font-style: normal;
    color: var(--clr-primary-3);
  }
  .content span {
    color: var(--clr-primary-4);
  }
  hr {
    transform: rotate(90deg);
    width: 30px;
    height: 0px;
    position: absolute;
    color: var(--clr-primary-3);
  }
  .img-container {
    display: none;
  }
  .rectangle {
    height: 500px;
    width: 361px;
    background: linear-gradient(180deg, #bc4e9c -10.15%, #f80759 119.71%);
  }
  .circle {
    position: absolute;
    width: 100px;
    height: 100px;
    left: 1070px;
    top: 334px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(17.5px);
  }
  .circle > i {
    position: absolute;
    font-size: 30px;
    left: 34px;
    top: 38px;
    color: var(--clr-primary-3);
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin-top: 3rem;
    margin-bottom: 2rem;
    color: var(--clr-primary-3);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    // grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }

    @media (max-width: 992px) {
      .rectangle{
        display: none
      }
      .circle{
        display: none
        }

    }
    @media (max-width: 767px) {
       h5 {
        font-size: 60px;
      }
      p {
        font-size: 0.75rem;
      }
      .hero-btn {
        padding: 0.7rem 0.75rem;
        font-size: 0.5rem;
      }
      .rectangle{
        display: none
      }
      .circle{
        display: none
        }
`;

export default Home;
