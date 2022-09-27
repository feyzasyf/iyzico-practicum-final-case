import styled from "styled-components";

export const LoadingContainer = styled.div`

width: 6rem;
  height: 6rem;
  border: 5px solid var(--grey-400);
  border-radius: 50%;
  border-top-color: var(--primary-500);
  animation: spinner 0.6s linear infinite;
margin: 0 auto;
margin-top: 20px;

@keyframes spinner{
  to{
      transform: rotate(360deg);
  }
}

`