import React from "react";
import styled from "styled-components";
import Grid from "../elements/Grid";

interface Props {}

type activeType = {};

const Nav = (props: Props) => {
  return (
    <Wrapper>
      <Grid is_flex={{ align_item: "space-between", just_con: "center" }}>
        <Grid>Wg's Portfolio</Grid>
        <Grid>
          <Grid>About me</Grid>
          <Grid>Skills</Grid>
          <Grid>Projects</Grid>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled.nav<activeType>`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
`;

export default Nav;
