import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Inspiration from "./Inspiration"
import styles from "./index.css";
import Cart from "./Cart";
import * as CartSelector from "../selectors/CartSelectors"
import * as CartActions from "../reducers/cartReducer"
import MenuComponent from "./MenuComponent"
import Checkout from "./Checkout"

import './index.css'

const App = () => (
  <div>
    <header className={styles.menu}>
      <Link className="link" to="/">Nya tavlor</Link>
      <Link className="link" to="/inspiration">Inspiration</Link>
      <Link className="link" to="/about-us">Kontakt</Link>
      <Link className="link" to="/cart"> 
        <MenuComponent />
      </Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/inspiration" component={Inspiration} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/checkout" component={Checkout} />
    </main>
  </div>
)

export default App;