import React from 'react';
import {images} from '../constants';

const Header = () => {
  return (
    <div>
      <section>
        <header className="container mx-auto px-5 flex justify-between">
          <div>
            <img src={images.logo} alt="logo" width="115 px" />
          </div>
          <div className="flex gap-x-8">
            <ul className="flex gap-x-8">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Articles</a>
              </li>
              <li>
                <a href="/">Pages</a>
              </li>
              <li>
                <a href="/">Pricing</a>
              </li>
              <li>
                <a href="/">FAQ</a>
              </li>

                <button>Sign In</button>
            </ul>
          </div>
        </header>
      </section>
    </div>
  );
}

export default Header
