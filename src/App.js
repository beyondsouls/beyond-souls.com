import React, { Component } from "react";
import CanvasContainer from "./components/CanvasContainer";
import Release from "./components/Release";
import releases from "./releases";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div>
                <header>
                    <img src="./assets/logo.png" className="a-brand" alt="Beyond Souls Logo" />
                    <CanvasContainer />
                </header>
                <main>
                    <section className="m-releases">
                        {releases.map((data, index) => {
                            const { artist, code, type, link } = data;

                            return (
                                <Release
                                    {...data}
                                    type={type}
                                    artist={artist}
                                    image={`./assets/releases/${code.toLowerCase()}.jpg`}
                                    text={`Release type: ${data.type}`}
                                    link={{ href: link, text: "Listen Now" }}
                                    key={code}
                                />
                            );
                        })}
                    </section>
                </main>
                <footer>
                    <p>
                        <strong>Pushing underground music to the next level</strong>
                    </p>
                    <p>{new Date().getFullYear()} &copy; Beyond Souls Records KLG</p>
                    <p>Switzerland, St. Gallen, Widnau</p>
                </footer>
            </div>
        );
    }
}

export default App;
