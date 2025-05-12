import React, { Component } from "react";
import "./About/About.css";
import {Socials} from "./Social/Socials"

type AboutProps = {
    onMainClick: () => void,
}

type AboutState = {
    currentIndex: number,
    content: string[],
}

export class About extends Component<AboutProps, AboutState> {
    private interval?: ReturnType<typeof setInterval>;
    constructor(props: AboutProps) {
        super(props);

        this.state = {
            currentIndex: 0,
            content: [
                "studying Computer Science",
                "a Coder",
                "a Software Developer",
                "looking for a full-time SWE position",
            ]
        };
    }

    componentDidMount() {
        this.startAnimation();
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    startAnimation() {
        this.interval = setInterval(() => {
            const { currentIndex, content } = this.state;
            const nextIndex = (currentIndex + 1) % content.length;
            this.setState({ currentIndex: nextIndex });
        }, 2000);
    }

    render = () => {
        const { content, currentIndex } = this.state;
        return (
            <div>
                <div>
                    <button className="btn" onClick={this.doMainClick}>Home</button>
                </div>
                <div className="about-container">
                    <h1 className="about-heading">Hi my name is <span className="cool-color">Denny</span></h1>
                    <div className="animated-text">
                        <h2 className="semi-bold">
                            I am <span className="content-color">{content[currentIndex]}</span>
                        </h2>
                    </div>
                </div>
                <div className="info-container" style={{position: "absolute", top:'40%', maxWidth: 500}}>
                    <div>
                        <h1 className="info-heading">Who I Am</h1>
                        <p>A Chinese Born American Studying Computer Science @ The University of Washington</p>
                    </div>
                </div>
                <Socials />
            </div>
        )
    };

    doMainClick = () => {
        this.props.onMainClick();
    }
}
