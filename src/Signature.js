import React from 'react';
import { 
    Typography,
    Container
} from '@mui/material';

const signatureStyle = {
    color: '#541b9d',
    padding: '1.3rem',
    fontSize: '.9rem',
    textAlign: 'center'
}

const Signature = () => {
    return (
        <Container>
            <Typography sx={signatureStyle}>
                &copy; {new Date().getFullYear()} samouchka
            </Typography>
        </Container>
    )
}

export default Signature;