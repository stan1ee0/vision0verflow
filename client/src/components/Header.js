import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import headerlogo from '../images/headerlogo.png';
import hamlogo from '../images/hamburger.jpg';

const HeaderContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  border-top: 3px solid #e5883e;
  border-bottom: 1px solid #d6d9db;
  background-color: #ffffff;
  position: sticky;
  top: 0;
`;

const Inner = styled.div`
  width: 82%;
  height: 50px;
  align-items: center;
  display: inline-flex;
  justify-content: space-between;
`;

const Ham = styled.img`
  width: 16px;
  height: 12px;
  display: inline-block;
`;

const MainLogo = styled.img`
  width: 140px;
`;

const Nav = styled.div`
  width: 240px;
  display: flex;
  p {
    display: inline-block;
    justify-content: space-between;
    padding: 5px 10px;
    margin-right: 5px;
    font-size: 14px;
    border-radius: 5px;
    cursor: pointer;
  }
  p:nth-child(3) {
    margin-right: 0;
  }
  p:hover {
    background-color: #eee;
  }
`;

const Search = styled.input`
  width: 550px;
  padding: 6px 10px;
`;

const Button = styled.div`
  display: inline-block;
  margin-top: 0px;
  button {
    padding: 8px 15px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
  }
  button:nth-child(1) {
    background-color: #e3ecf3;
    color: #487299;
    border: 1px solid #487299;
  }
  button:nth-child(1):hover {
    background-color: #b9d2e8;
  }
  button:nth-child(2) {
    background-color: #4393f7;
    color: #fff;
    border: 1px solid #4393f7;
  }
  button:nth-child(2):hover {
    background-color: #316db9;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Inner>
        <Ham src={hamlogo}></Ham>
        <Link to="/">
          <MainLogo src={headerlogo} alt="" />
        </Link>
        <Nav>
          <p>About</p>
          <p>Products</p>
          <p>For Teams</p>
        </Nav>
        <Search type="text" placeholder="search..." />
        <Button>
          <Link to="/loginpage">
            <button>Log in</button>
          </Link>
          <button>Sign up</button>
        </Button>
      </Inner>
    </HeaderContainer>
  );
}
