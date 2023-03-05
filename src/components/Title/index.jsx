import styled from "styled-components"
export const Title = ({ label }) => {
    return (
        <Text>{label}</Text>
    )
}

const Text = styled.h1`
    text-align: center;
    font-size:3rem;
    padding:3rem;
    font-weight:500;
    background-color:black;
    color:white;
`