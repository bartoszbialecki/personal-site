import React from 'react'

const Footer = (props) => (
    <footer id="footer">
        <section>
            <h2>You can find me here</h2>
            <ul className="icons">
                <li><a href="https://www.facebook.com/profile.php?id=100002071420524" className="icon fa-facebook alt"><span className="label">Facebook</span></a></li>
                <li><a href="https://www.instagram.com/bialek_84/" className="icon fa-instagram alt"><span className="label">Instagram</span></a></li>
                <li><a href="https://twitter.com/BartoszBialecki" className="icon fa-twitter alt"><span className="label">Twitter</span></a></li>
                <li><a href="https://github.com/bartoszbialecki" className="icon fa-github alt"><span className="label">GitHub</span></a></li>
                <li><a href="https://www.linkedin.com/in/bartosz-białecki-502672157" className="icon fa-linkedin alt"><span className="label">LinkedIn</span></a></li>
            </ul>
        </section>
        <p className="copyright">&copy; Bartosz Białecki. Design based on the Stellar template from: <a href="https://html5up.net">HTML5 UP</a>.</p>
    </footer>
)

export default Footer
