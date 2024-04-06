import Icon from '../component/icon/icon.svg';
function Header({About, Project, Skills, Contact}) {
    return (
      <header>
         {
              <nav className="navigation-bar">
              <div className="navigation-bar__left">
                <img src={Icon} alt="Icon" className="navigation-bar__icon" /> 
              </div>
              <div className="navigation-bar__right">
                <ul className="navigation-bar__list">
                  <li className="navigation-bar__item">  
                    <a href="#"className='nav-a'>About</a>
                  </li>
                  <li className="navigation-bar__item">
                    <a href="#" className='nav-a'>Focus</a>
                  </li>
                  <li className="navigation-bar__item">
                    <a href='#' className='nav-a'>Opportunity</a>
                  </li>
                  <li className="navigation-bar__item">
                    <a href='#' className='nav-a'>safety</a>
                  </li>
                  <li className="navigation-bar__item">
                    <a href='#' className='nav-a'>Reporting</a>
                  </li>
                  <li className="navigation-bar__item">
                    <a href='#' className='nav-a'>Community</a>
                  </li>
                  <li className="navigation-bar__item">
                    <a href='#' className='nav-a'>Awards</a>
                  </li>
                  <li className="navigation-bar__item">
                    <div className='searchtoggle'>
                    <span>Search</span> 
                    <svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg" style={{ width: '13px', height: '13px', marginLeft: '3px' }}>
                        <path d="M1216 832q0-185-131.5-316.5t-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5 316.5-131.5 131.5-316.5zm512 832q0 52-38 90t-90 38q-54 0-90-38l-343-342q-179 124-399 124-143 0-273.5-55.5t-225-150-150-225-55.5-273.5 55.5-273.5 150-225 225-150 273.5-55.5 273.5 55.5 225 150 150 225 55.5 273.5q0 220-124 399l343 343q37 37 37 90z"></path>
                    </svg>
                    </div>
                  </li>                 

                  {/* Add more list items as needed */}
                </ul>
                <button className="navigation-bar__button">DONATE</button>
              </div>
            </nav>
          }
      </header>
    );
  }
  
  export default Header;
  