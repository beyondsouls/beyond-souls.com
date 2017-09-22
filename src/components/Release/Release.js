import React, { Component } from "react";
import "./Release.css";

export default class Release extends Component {
    static displayName = "Release";

    render() {
        const { artist, type, title, link, image, code } = this.props;

        return (
            <div className="a-release">
                <img
                    className="a-release__cover"
                    src={image}
                    title={`${artist} - ${title} (${code})`}
                    alt={`Cover ${code}`}
                />
                <div className="a-release__info">
                    <h3 className="a-release__title">{title}</h3>
                    <p className="a-release__text">
                        {type} by {artist}
                    </p>
                </div>
                <a className="a-release__link a-link" href={link.href}>
                    {link.text}
                </a>
            </div>
        );
    }
}
