import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import config from '../../utils/siteConfig'

// Styles
import '../../styles/app.css'

/**
* Main layout component
*
* The Layout component wraps around each page and tmeplate.
* It also provides the header, footer as well as the main
* styles, and meta data for each page.
*
*/
const DefaultLayout = ({ children, bodyClass }) => (
    <>
        <Helmet>
            <html lang={config.lang} />
            <body className={bodyClass} />
        </Helmet>

        <div className="viewport">

            <div className="viewport-top">
                {/* The main header section on top of the screen */}
                <header className="site-head">
                    <div className="container">
                        <div className="site-mast">
                            <div className="site-mast-left">
                                <Link to="/">
                                    <img className="site-logo" src="/images/logo.svg" alt="" />
                                </Link>
                            </div>
                            <div className="site-mast-right">
                                <Link className="site-nav-item" to="/">Twitter</Link>
                                <Link className="site-nav-item" to="/">Facebook</Link>
                                <Link className="site-nav-item" to="/">RSS</Link>
                            </div>
                        </div>
                        <div className="site-banner">
                            <h1 className="site-banner-title">Site Title</h1>
                            <p className="site-banner-desc">Site description goes here description goes here description goes here description goes here description goes here description goes here</p>
                        </div>
                        <nav className="site-nav">
                            <div className="site-nav-left">
                                <Link className="site-nav-item" to="/">Home</Link>
                                <Link className="site-nav-item" to="/">Home</Link>
                                <Link className="site-nav-item" to="/">Home</Link>
                            </div>
                            <div className="site-nav-right">
                                <Link className="site-nav-item" to="/">Subscribe</Link>
                            </div>
                        </nav>
                    </div>
                </header>

                <main className="site-main">
                    {/* All the main content gets inserted here, index.js, post.js */}
                    {children}
                </main>

            </div>

            <div className="viewport-bottom">
                {/* The footer at the very bottom of the screen */}
                <footer className="site-foot">
                    <div className="site-foot-nav container">
                        <div className="site-foot-nav-left">
                    All content © 2019 London &mdash; Published with <a className="site-foot-nav-item" href="https://ghost.org" target="_blank" rel="noopener noreferrer">Ghost</a>
                        </div>
                        <div className="site-foot-nav-right">
                            <Link className="site-foot-nav-item" to="/">Home</Link>
                        </div>
                    </div>
                </footer>

            </div>
        </div>

    </>
)

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    bodyClass: PropTypes.string,
}

export default DefaultLayout