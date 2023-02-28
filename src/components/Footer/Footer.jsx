import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import styled from 'styled-components';
export const Footer = () => {
    return (
        <Container>
            <Links>
                <a href="https://www.linkedin.com/in/david-galeno-2a76b61a9/">
                    <LinkedInIcon style={{ fontSize: '3rem' }} />
                </a>
                <a href="https://github.com/DavidGaleno">
                    <GitHubIcon style={{ fontSize: '3rem' }} />
                </a>
            </Links>
            <MainText>Developed by David Galeno</MainText>
            <SubText>Brazil - Brasilia - Federal District</SubText>
        </Container>
    )
}

const Container = styled.footer`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 1rem 2rem;
    background-color: black;
    color:white;
    a{
        color:white;

    }
`
const Links = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:1rem;
`
const MainText = styled.h4`
    font-size: 1.8rem;
`
const SubText = styled.h4`
    font-size: 1.5rem;
`