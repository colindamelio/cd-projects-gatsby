import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const NavItem = styled.li`
  margin: 20px 0;
  text-align: center;

  a {
    font-size: 30px;
  }
`;

const Menu = ({ items }) => (
  <Nav>
    <ul>
      {items.map((item, i) =>
        item.isSubPage ? (
          <NavItem key={i}>
            <Link to={item.href}>{item.title}</Link>
          </NavItem>
        ) : (
          <NavItem key={i}>
            <a
              href={item.href}
              aria-label={item.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.title}
            </a>
          </NavItem>
        )
      )}
    </ul>
  </Nav>
);

Menu.propTypes = {
  items: PropTypes.array,
};

export default Menu;
