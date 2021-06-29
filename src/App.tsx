import React from "react";
import "@material/top-app-bar/dist/mdc.top-app-bar.min.css";
import "@material/icon-button/dist/mdc.icon-button.min.css";

const TopAppBar: React.FC = (): React.ReactElement => {
  return (
    <header className="mdc-top-app-bar">
      <div className="mdc-top-app-bar__row">
        <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
          <button
            className="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button"
            aria-label="Open navigation menu"
          >
            menu
          </button>
          <span className="mdc-top-app-bar__title">Page title</span>
        </section>
        <section
          className="mdc-top-app-bar__section flex-row justify-between mr6"
          role="toolbar"
        >
          <button
            className="material-icons mdc-top-app-bar__action-item mdc-icon-button"
            aria-label="Favorite"
          >
            favorite
          </button>
          <button
            className="material-icons mdc-top-app-bar__action-item mdc-icon-button"
            aria-label="Search"
          >
            search
          </button>
          <button
            className="material-icons mdc-top-app-bar__action-item mdc-icon-button"
            aria-label="Options"
          >
            more_vert
          </button>
        </section>
      </div>
    </header>
  );
};

function App(): React.ReactElement {
  return (
    <div className="">
      <TopAppBar />
    </div>
  );
}

export default App;
