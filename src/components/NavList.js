
import React from "react";
import styled from "styled-components";
import {NavLink} from 'react-router-dom'
import tw from 'twin.macro'

const NavGroup = styled.div`

display: grid;
grid-template-columns: 9em 9em 9em;
align-content: center;
justify-content: center;
grid-gap: 1em;
@media(max-width: 400px) {
  grid-template-columns: 3em 3em 3em;

  
}

`

// const RadioLabel = styled.NavLink`
// border: 1px solid white;
// cursor: pointer;
// padding: 1em;
// background: ${({checked}) =>  (checked? 'white': 'none')};
// color: ${({checked}) =>  (checked? '#707070': 'white')};
// &:hover {
//   background-color: ${({checked}) =>  (checked? 'white': '#707070')};
//   color: ${({checked}) =>  (checked? '#707070': 'white')};
// }
// @media(max-width: 400px) {
//   padding:0.5em;
//   font-size: 0.5em;
  
// }
// `
// const SNavLink = styled(NavLink)`
// display: block;
// text-decoration: none;
// color: white;
// border: 1px solid white;
// cursor: pointer;
// padding: 1em;
// &:hover {
//   background-color:#707070;
//   color:white;
// }
// &.active {
//   background-color: white;
//   color:#707070;

// }
// @media(max-width: 400px) {
//   padding:0.5em;
//   font-size: 0.5em;
  
// }
// `

const activeClassName = 'active'
const SNavLink = styled(NavLink).attrs({
  activeClassName: activeClassName,
})`
${tw`text-xs p-2 rounded box-border sm:px-10 sm:text-base text-gray-600 bg-white  text-center shadow-sm border hover:bg-gray-100`}
&&.${activeClassName} {
  ${tw`bg-gray-200`}
}

`
export default function NavList() {
  return (
    <NavGroup>
          <SNavLink to='/all'>all</SNavLink>
          <SNavLink to='/done'>done</SNavLink>
          <SNavLink to='/todo'>todo</SNavLink>
      </NavGroup>
  );
}