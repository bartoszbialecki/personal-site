import React from 'react'

import SocialData from '../data/socialData'

const SocialLink = (props) => (
    <li><a href={props.link.url} className={"icon alt " + props.link.iconClassName}><span className="label">{props.link.name}}</span></a></li>
)

const Footer = (props) => (
    <footer id="footer">
        <section>
            <h2>You can find me here</h2>
            <ul className="icons">
                {SocialData.map((link) => {
                    return <SocialLink key={link.id} link={link} />
                })}
            </ul>
        </section>
        <p className="copyright">&copy; Bartosz Białecki. Design based on the Stellar template from: <a href="https://html5up.net">HTML5 UP</a>.</p>
    </footer>
)

export default Footer
