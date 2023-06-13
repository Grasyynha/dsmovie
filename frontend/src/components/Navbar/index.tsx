import { ReactComponent as GithubIcon } from 'assets/img/git.svg';
import  './styles.css';
function Navbar() {

    return (
        <header>
            <nav className='container'>
                <div className='dsmovie--nav-content'>
                    <h1>DSMovie</h1>
                    <a href="https://github.com/grasyynha">
                        <div className='dsmovie-contact-container'>
                            <GithubIcon />
                            <p>/Grasyynha</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;