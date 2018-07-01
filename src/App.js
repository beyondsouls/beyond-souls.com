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
                <!-- Facebook Pixel Code -->
                <script>
                  !function(f,b,e,v,n,t,s)
                  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                  fbq('init', '299967940457009');
                  fbq('track', 'PageView');
                </script>
                <noscript><img height="1" width="1" style="display:none"
                  src="https://www.facebook.com/tr?id=299967940457009&ev=PageView&noscript=1"
                /></noscript>
                <!-- End Facebook Pixel Code -->
            </div>
        );
    }
}

export default App;
