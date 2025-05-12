import React, { Component } from "react";
import "./About.css";

type AboutProps = {
    onMainClick: () => void,
    onSkillClick: () => void,
    onProjectClick: () => void,
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
                    <button className="btn" onClick={this.doSkillClick}>Skills</button>
                    <button className="btn" onClick={this.doProjectClick}>Project</button>
                </div>
                <div className="about-container">
                    <div className="animated-text">
                        <h1 className="semi-bold">
                            I am <span className="content-color">{content[currentIndex]}</span>
                        </h1>
                    </div>
                    <div className="info-grid">
                        <div className="info-container">
                            <h1 className="info-heading">Who I Am</h1>
                        </div>
                        <div className="info-container">
                            <h1 className="info-heading">Hobbies</h1>
                        </div>
                        <div className="info-container">
                            <h1 className="info-heading">Interest</h1>
                        </div>
                        <div className="info-container">
                            <h1 className="info-heading">More Info</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    doMainClick = () => {
        this.props.onMainClick();
    }

    doSkillClick = () => {
        this.props.onSkillClick();
    }
    doProjectClick = () => {
        this.props.onProjectClick();
    }
}
