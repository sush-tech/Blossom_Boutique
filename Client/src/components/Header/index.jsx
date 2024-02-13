import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
     <Box
    
  component="img"
  className= "header_image"
  alt="The house from the offer."
  src="/images/valentine.jpg"
/>
      </Container>
    </React.Fragment>
  );
}