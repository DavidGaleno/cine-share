import BookmarkIcon from '@mui/icons-material/Bookmark';
import { HeaderLink } from './HeaderLink';
import styled from "styled-components";

export const Header = () => {
    return (
        <Container className="header">
            <Nav>
                <HeaderLink to='/' label='Home' color={'white'} fontSize={'1.6rem'} />
                <HeaderLink to='/favorites' label='Favorites' color={'white'} fontSize={'1.6rem'} />
            </Nav>
            <Logo style={{ fontSize: '3rem' }} className='logo' alt="CineShare Logo" />
        </Container>
    )
}

const Container = styled.header`
    display: flex;
    position:relative;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: black;
    color:white;
`
const Nav = styled.nav`
    display:flex;
    justify-content:center;
    align-items:center;
    gap: .5rem;
`
const Logo = styled(BookmarkIcon)`
    font-size:3rem;
`
