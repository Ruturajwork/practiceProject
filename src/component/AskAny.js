import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const AskAny = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h5>Ask us anything</h5>
        <hr />
        <p>
          We are <span>always</span> here to help you with any questions or
          concerns you may have.
        </p>
      </article>
      <Link to="/" className="btn hero-btn">
        Contact us
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
//    place-items: center;
  .content h5{
    font-size: 24px;
    color: var(--clr-primary-5);
  }
   hr {
  
      transform: rotate(90deg);
      width: 30px;
      height: 0px;
      position: absolute;
      border: 1px solid var(--clr-primary-3);
      
      } 
  
  .content span{
    color: var(--clr-primary-4);
  }

  p {
    line-height: 147px;
    max-width: 45em;
   
    color: var(--clr-primary-3);
    font-size: 110px;
  }
  span{
    color: var(--clr-primary-4);
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    //  grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 1rem;
    }
    p {
      font-size: 110px;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      border: 1px solid var(--clr-primary-5);
      color: var(--clr-primary-5);
      width: fit-content;
      place-items: start;
      margin-bottom: 5rem;
      
    }
    
    @media (max-width: 500px) {
     p {
      font-size: 40px;
      line-height: 40px;
      }
      .hero-btn {
        width: 100%;
        }
    
        
      }
      
`;

export default AskAny;
