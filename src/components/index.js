// @flow
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Route, Link } from "react-router-dom";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import Paintings from "./Paintings";
import About from "./About";
import Inspiration from "./Inspiration";
import Painting from "./PaintingDetails";
import Posters from "./Posters";
import Poster from "./PosterDetails";
import Icon from "../assets/Icon";
import english from "../assets/en.json";
import swedish from "../assets/sv.json";
import Cart from "./Cart";
import MenuBar from "./MenuBar";
import Checkout from "./Checkout";
import * as styles from "./index.styles";

import "./index.css";

const resources = {
  en: english,
  sv: swedish
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

const App = () => {
  const { t } = useTranslation();
  const changeLanguage = (language: string) => {
    if (language === "sv") {
      i18n.changeLanguage("sv");
    } else if (language === "en") {
      i18n.changeLanguage("en");
    }
  };

  return (
    <div>
      <div css={styles.languages}>
        <div css={styles.language} onClick={() => changeLanguage("sv")}>
          <Icon type="swedish" size={15} />
          Svenska
        </div>
        <div css={styles.language} onClick={() => changeLanguage("en")}>
          <Icon type="swedish" size={15} />
          English
        </div>
      </div>
      <header css={styles.header}>
        <div css={styles.links}>
          <Link className="link" to="/">
            {t("paintings")}
          </Link>
          <Link className="link" to="/posters">
            {t("posters")}
          </Link>
          <Link className="link" to="/inspiration">
            {t("inspiration")}
          </Link>
          <Link className="link" to="/about-us">
            {t("contact")}
          </Link>
        </div>
        <Link css={styles.cartLink} to="/cart">
          <MenuBar />
        </Link>
      </header>

      <main>
        <Route exact path="/" component={Paintings} />
        <Route exact path="/posters" component={Posters} />
        <Route path="/painting" component={Painting} />
        <Route path="/poster" component={Poster} />
        <Route exact path="/inspiration" component={Inspiration} />
        <Route exact path="/about-us" component={About} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
      </main>
    </div>
  );
};

export default App;
