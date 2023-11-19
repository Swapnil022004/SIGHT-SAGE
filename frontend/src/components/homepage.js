import styled from "styled-components"
import main from "../assets/eyecarelogo.jpg"
const HomePage = () => {
    return ( 
        <StyledHomeMain>
        <div className="content">
          <h1>Eyes See</h1>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publis
          </p>
        </div>
        <img  alt="wartrade logo"  src={main}  className="wartradeLogo" />
      </StyledHomeMain>
     );
}
 
const StyledHomeMain = styled.main`
  width: 100%;
  height: calc(100vh - var(--header));
  padding: calc(var(--padding) * 2);

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;
  z-index: 2;

  @media only screen and (max-width: 500px) {
    flex-direction: column-reverse;
    justify-content: center;
    gap: 2rem;
    padding: calc(var(--padding));
    > * {
      width: 100%;
    }
  }

  .content {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    gap: clamp(1rem, 2vw, 2rem);

    color: var(--text);

    font-size: clamp(2rem, 5vw, 3.75rem);

    h1 {
      font-size: 2.3em;
      font-weight: 905;
      color:black;
      font-family: 'Times New Roman', Times, serif;

    }
    p {
      font-size: 0.33em;
      line-height: 1.5;
    }

    button {
      padding: calc(var(--padding) / 4) var(--padding);
      font-size: 0.3em;
      border-radius: 5px;
      background: #d3c468;
      color: #000;
      transition: all ease-out 200ms;

      &:hover {
        color: #dd7b2e;
        background: #fff;
      }
    }

    .disabled {
      filter: saturate(50%);
      cursor: no-drop !important;
    }

    @media only screen and (max-width: 500px) {
      width: 100%;
    }
  }
  .wartradeLogo {
    width: clamp(180px, 30%, 600px);
    object-fit: cover;
    filter: contrast(60%) saturate(90%);
    border-radius:50%
  }
`
export default HomePage;