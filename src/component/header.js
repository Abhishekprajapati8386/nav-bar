import Icon from '../component/icon/icon.svg';

function Header() {
    return (
        <header>
            <nav className="navigation-bar">
                <div className="navigation-bar__left">
                    <img src={Icon} alt="Icon" className="navigation-bar__icon" />
                </div>
                <div className="navigation-bar__right">
                    <ul className="navigation-bar__list">
                        <li className="navigation-bar__item">
                            <a href="#" className='nav-a'>About</a>
                            <ul className="dropdown-list">
                                <li  ><a href="#">Board of Directors</a></li>
                                <li><a href="#">Staff</a></li>
                                <li><a href="#">Meet Our Donors</a></li>
                                <li><a href="#">News</a></li>
                                <li><a href="#">Impact</a></li>
                                <li><a href="#">Resources</a></li>
                            </ul>
                        </li>
                        <li className="navigation-bar__item">
                            <a href="#" className='nav-a'>Focus</a>
                            <ul className="dropdown-list">
                                <li  ><a href="#">Safety</a></li>
                                <li><a href="#">Opportunity</a></li>
                                <li><a href="#">Reporting</a></li>
                                <li><a href="#">Recognisition</a></li>
                                <li><a href="#">Equility</a></li>
                                <li><a href="#">Resources</a></li>
                            </ul>
                        </li>
                        <li className="navigation-bar__item">
                            <a href='#' className='nav-a'>Opportunity</a>
                            <ul className="dropdown-list">
                                <li  ><a href="#">Board of Directors</a></li>
                                <li><a href="#">Staff</a></li>
                                <li><a href="#">Meet Our Donors</a></li>
                                <li><a href="#">News</a></li>
                                <li><a href="#">Impact</a></li>
                                <li><a href="#">Resources</a></li>
                            </ul>
                        </li>
                        <li className="navigation-bar__item">
                            <a href='#' className='nav-a'>Safety</a>
                            <ul className="dropdown-list">
                                <li  ><a href="#">Board of Directors</a></li>
                                <li><a href="#">Staff</a></li>
                                <li><a href="#">Meet Our Donors</a></li>
                                <li><a href="#">News</a></li>
                                <li><a href="#">Impact</a></li>
                                <li><a href="#">Resources</a></li>
                            </ul>
                        </li>
                        <li className="navigation-bar__item">
                            <a href='#' className='nav-a'>Reporting</a>
                            <ul className="dropdown-list">
                                <li  ><a href="#">Board of Directors</a></li>
                                <li><a href="#">Staff</a></li>
                                <li><a href="#">Meet Our Donors</a></li>
                                <li><a href="#">News</a></li>
                                <li><a href="#">Impact</a></li>
                                <li><a href="#">Resources</a></li>
                            </ul>
                        </li>
                        <li className="navigation-bar__item">
                            <a href='#' className='nav-a'>Community</a>
                            <ul className="dropdown-list">
                                <li  ><a href="#">Board of Directors</a></li>
                                <li><a href="#">Staff</a></li>
                                <li><a href="#">Meet Our Donors</a></li>
                                <li><a href="#">News</a></li>
                                <li><a href="#">Impact</a></li>
                                <li><a href="#">Resources</a></li>
                            </ul>
                        </li>
                        <li className="navigation-bar__item">
                            <a href='#' className='nav-a'>Awards</a>
                            <ul className="dropdown-list">
                                <li  ><a href="#">Board of Directors</a></li>
                                <li><a href="#">Staff</a></li>
                                <li><a href="#">Meet Our Donors</a></li>
                                <li><a href="#">News</a></li>
                                <li><a href="#">Impact</a></li>
                                <li><a href="#">Resources</a></li>
                            </ul>
                        </li>
                    </ul>
                    <button className="navigation-bar__button">DONATE</button>
                </div>
            </nav>
        </header>
    );
}

export default Header;
