import { Form, ErrorMessage, Field  } from 'formik';
import styled from 'styled-components';


export const MainTitle = styled.h1`
text-align: center;
text-transform: uppercase;
`
export  const SubmitForm = styled(Form)`
display: grid;
margin: 0 auto;
justify-items: center;
border-radius: 5px;
padding: 15px;
width: 400px;
gap: 8px;
background: #1D1F1F;
`;

export const ErrorMsg = styled(ErrorMessage )`
 font-size: 15px;  
color: red;
`;

export const FormField = styled(Field)`
border-radius: 10px;
width: 70%;
height: 30px;
padding-left: 15px;

`

export const Styledlabel = styled.label`
font-weight: bold;
color: white;
`

export const SubmitBtn= styled.button`
border-radius: 40px;
width: 70%;
height: 50px;
margin-top: 24px;
background-color: #3f5452;
color: #f3f3f3;
font-size: 16px;
font-weight: 700;
line-height: 1.13;
letter-spacing: -0.16px;
text-transform: uppercase;
border: 1px solid whitesmoke;
&:hover {
  scale: 105%;
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
`