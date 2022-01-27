
import Link from 'next/link'
import { withRouter } from 'next/router'
import { Container, Navbar, Nav } from 'react-bootstrap'

export const NavLink = (props) => {

  let className = classNames({
    "nav-link": true,
    "is-active": props.pathname
  })
  return <Link href={props.path}><a className={className}>{props.label}</a></Link>

}

const Navig = ({ router: { pathname } }) => (
    <div class="flex flex-col fixed sm:relative sm:mr-8 sm:flex-row py-20 sm:py-0 font-sans h-full justify-between text-white font-bold text-lg sm:text-sm inset-0 sm:inset-auto">
        <Navbar expand="lg">
        <Container >
          <Navbar.Brand href="#home">studioThirteen</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavLink path="/mint" label="mint" pathname/>
              <NavLink path="/explore" label="ourNFTs" pathname/>
              <NavLink path="/about-us" label="theTeam" pathname/>
              <NavLink path="/faq" label="FAQs" pathname/>
            </Nav>
          </Navbar.Collapse>
        </Container>
        </Navbar>    
    </div>
)

export default withRouter(Navig)