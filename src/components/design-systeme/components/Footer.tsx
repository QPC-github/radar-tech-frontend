import * as React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
  return (
    <footer
      className="rf-footer"
      role="contentinfo"
      id="footer"
      style={{ marginTop: `1rem` }}
    >
      <div className="rf-container">
        <div className="rf-footer__body">
          <div className="rf-footer__brand">
            <div className="rf-logo" title="république française">
              <span className="rf-logo__title">
                république
                <br />
                française
              </span>
            </div>
          </div>
          <div className="rf-footer__content">
            <p className="rf-footer__content-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <ul className="rf-footer__content-list">
              <li>
                <Link
                  className="rf-footer__content-link"
                  to="https://legifrance.gouv.fr"
                >
                  legifrance.gouv.fr
                </Link>
              </li>
              <li>
                <Link
                  className="rf-footer__content-link"
                  to="https://gouvernement.fr"
                >
                  gouvernement.fr
                </Link>
              </li>
              <li>
                <Link
                  className="rf-footer__content-link"
                  to="https://service-public.fr"
                >
                  service-public.fr
                </Link>
              </li>
              <li>
                <Link
                  className="rf-footer__content-link"
                  to="https://data.gouv.fr"
                >
                  data.gouv.fr
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="rf-footer__bottom">
          <ul className="rf-footer__bottom-list">
            <li className="rf-footer__bottom-item">
              <a className="rf-footer__bottom-link" href="#">
                Plan du site
              </a>
            </li>
            <li className="rf-footer__bottom-item">
              <a className="rf-footer__bottom-link" href="#">
                Accessibilité: non/partiellement/totalement conforme
              </a>
            </li>
            <li className="rf-footer__bottom-item">
              <a className="rf-footer__bottom-link" href="#">
                Mentions légales
              </a>
            </li>
            <li className="rf-footer__bottom-item">
              <a className="rf-footer__bottom-link" href="#">
                Données personnelles
              </a>
            </li>
            <li className="rf-footer__bottom-item">
              <a className="rf-footer__bottom-link" href="#">
                Gestion des cookies
              </a>
            </li>
          </ul>
          <div className="rf-footer__bottom-copy">
            © République Française 2020
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
