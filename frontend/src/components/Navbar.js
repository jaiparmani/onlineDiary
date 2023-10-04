import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/blogs">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/blogs">Blogs</Nav.Link>
                        <Nav.Link href="/streak">Streak</Nav.Link>
                        <Nav.Link href="/pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
         
        </>
    );
}

export default ColorSchemesExample;