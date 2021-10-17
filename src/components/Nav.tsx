import React from "react";
import { withRouter } from "react-router";
import styled from "styled-components";
import Grid from "../elements/Grid";

interface Props {}

type activeType = {

}

const Nav = (props: Props) => {
  return <Wrapper>
    <Grid is_flex={{align_item: "space-between", just_con:"center"}}>
    <Grid>
  
      Wg's Portfolio

    </Grid>
    <Grid>
  Box   
    </Grid>
      </Grid>
  </Wrapper>;
};


const Wrapper = styled.nav<activeType>`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
`

export default withRouter(Nav);
