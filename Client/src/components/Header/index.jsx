import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container  maxWidth="sm">
     <Box
    
  component="img"
  
  alt="The house from the offer."
  src="/images/bouquet.jpg"
/>
      </Container>
    </React.Fragment>
  );
}