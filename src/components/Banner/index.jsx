import styled from "styled-components"
export const Banner = ({ route }) => {
    return (
        <Container route={route}>

        </Container >
    )
}

const Container = styled.div`
     width:100%;
     height:34.5rem;
     background-size:cover;
     background-repeat: no-repeat;
     background-image: ${({route}) => `url('assets/images/${route}_banner.png')`};
`