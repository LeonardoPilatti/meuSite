import styled from 'styled-components';

export const SectionHeader = styled.section`
  padding: 20px;
  color: #fff;
  display: flex;
  flex-direction: column;
  .fotoPerfil img {
    border-radius: 50%;
    height: 200px;
    width: auto;
    margin: 0 auto;
    margin-bottom: 30px;
    border: 5px solid #b7b7b7;
  }
  h1 {
    font-size: 1em;
    text-align: center;
  }

  .redesSociais {
    height: 80px;

    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      align-items: flex-end;
      height: 60px;
      li {
        margin-right: 8px;
        padding: 5px;
        transition: all ease 0.3s;
        img {
          height: 22px;
          width: 22px;
        }
        &:hover {
          margin-bottom: 10px;
        }
      }
    }
  }

  .navegacao {
    flex: 1;
    ul {
      display: flex;
      flex-direction: column;
      margin: 10px 0px;
      li {
        margin: 5px;
      }
    }
  }

  .darkWhite {
    /* The switch - the box around the slider */
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    margin: 10px 30px;
    align-items: center;

    .switch {
      position: relative;
      display: inline-block;
      width: 50px;
      height: 20px;
    }

    /* Hide default HTML checkbox */
    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    /* The slider */
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    .slider:before {
      position: absolute;
      content: '';
      height: 20px;
      width: 20px;
      left: 2px;
      bottom: 0px;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    input:checked + .slider {
      background-color: #2196f3;
    }

    input:focus + .slider {
      box-shadow: 0 0 1px #2196f3;
    }

    input:checked + .slider:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }

    /* Rounded sliders */
    .slider.round {
      border-radius: 34px;
    }

    .slider.round:before {
      border-radius: 50%;
    }
  }
`;
