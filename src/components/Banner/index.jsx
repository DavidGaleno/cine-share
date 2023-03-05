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
     //For some reason when I use absolute path for importing images and a react-router-path has more than 2 '/', the image wont render. So I will use this relative path.
     background-image: ${({ route }) => `url('../../assets/images/${route}_banner.png')`};
`