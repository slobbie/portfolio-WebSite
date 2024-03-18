// =============================================================================
// File    : GlobalStyle.ts
// Class   :
// Purpose : GlobalStyle.ts 스타일
// Date    : 2024.03
// Author  : JHS
// History :
// =============================================================================
// Copyright (C) 2024 JHS All rights reserved.
// =============================================================================

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 body {
    margin: 0;
    min-height: 100vh;
    /* overflow: auto; */
    color: white;
 }
 ul,nav, section {
  margin: 0;
 }
 ul, li{
  list-style: none;
  padding: 0;
 }
 h2,h3,h4,h5,h6 {
  margin: 0;
  display: inline;
 }
 a{
  text-decoration: none;
  color: white;
 }
`;

export default GlobalStyle;
