import './header.scss'
import logo from 'shared/assets/icons/white-logo.png'

export const Header = () => {
    return (
        <header className="header">

            <div className="header_desktop">

                <div className="header_desktop_container">

                    <div className="header_desktop_top">
                        <img src={logo} alt="logo" />
                        <div className="header_desktop_input">
                            
                        </div>
                        <div className="header_desktop_contact">

                        </div>
                    </div>

                    <div className="header_desktop_bottom">

                    </div>
                </div>

                <div className="header_mobile">

                </div>
            </div>
        </header>
    )
}
