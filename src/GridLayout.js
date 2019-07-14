import React from 'react';
import {Cell, Grid, Row} from '@material/react-layout-grid';
import '@material/react-layout-grid/dist/layout-grid.css';

const MyGrid=(props)=>{
    const style={backgroundColor: 'yellow'}
    const style1={backgroundColor: 'pink'}
    
    return(
      <Grid>
        <Row>
          <Cell style={style} columns={4}>a</Cell>
          <Cell style={style} columns={4}>b</Cell>
          <Cell style={style} columns={4}>c</Cell>
        
          <Cell style={style} desktopColumns={4} order={1} phoneColumns={4} tabletColumns={4}>d</Cell>
          <Cell style={style} desktopColumns={4} order={2} phoneColumns={4} tabletColumns={4}>e</Cell>
          <Cell style={style} desktopColumns={4} order={3} phoneColumns={4} tabletColumns={4}>f</Cell>
        
          <Cell columns={4}>
            <Row>
              <Cell style={style1} desktopColumns={6} phoneColumns={2} tabletColumns={5}>g</Cell>
              <Cell style={style1} desktopColumns={6} phoneColumns={2} tabletColumns={3}>h</Cell>
            </Row>
          </Cell>
          <Cell columns={4}> i </Cell>
          <Cell columns={4}> j </Cell>
        </Row>
      </Grid>
    )
}
export default MyGrid;