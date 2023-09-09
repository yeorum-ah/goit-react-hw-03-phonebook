import styled from 'styled-components';

export const Title = styled.h2`
text-align: center;
text-transform: uppercase;
`

export const ContactsList = styled.ul`
display: grid;
margin: 0 auto;
justify-items: center;
border-radius: 5px;
padding: 15px;
width: 400px;
column-gap: 8px;
row-gap: 8px;
list-style: none;
background: #1D1F1F;
color: white;
`

export const NumList = styled.span`
margin-left: 10px;
`

export const DeleteBtn = styled.button`
border-radius: 40px;
margin-left: 10px;
height: 20px;
background-color: #3f5452;
color: #f3f3f3;
font-size: 12px;
font-weight: 600;
text-transform: uppercase;
border:1px solid white;
&:hover {
  scale: 90%;
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
`