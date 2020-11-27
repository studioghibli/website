import React, { useEffect, useState } from 'react'
import experienceStyles from '../styles/Experience.module.css'
import 'antd/dist/antd.css';
import Card from './components/Card'
import { Timeline } from 'antd'

function ExperienceMobile() {
    return (
        <div className={experienceStyles.sectionMobile}>
            <Timeline mode={"left"} className={experienceStyles.timeline}>
                <Timeline.Item color={"black"}>
                    <Card
                        title="The Beginning"
                        text="I started learning Java in high school.
                        This was my first time coding, and I started creating little games
                        &mdash; the first game I ever made was inspired by The Stanley Parable."
                    />
                </Timeline.Item>
                <Timeline.Item color={"black"}>
                    <Card
                        title="Entering College"
                        text="The first class I took in college was object-oriented programming.
                        As I started to understand computer science from a high-level perspective,
                        I decided to major in computer science."
                    />
                </Timeline.Item>
                <Timeline.Item color={"black"}>
                    <Card
                        title="Interning at Microsoft"
                    >
                        I interned as part of the Explore Microsoft program.
                        I worked on the <a
                            href="https://azure.microsoft.com/en-us/"
                            target="_blank">
                            azure.microsoft.com
                        </a> team with two other interns to migrate a chatbot extension
                        used internally by developers to a new platform.
                    </Card>
                </Timeline.Item>
                <Timeline.Item color={"black"}>
                    <Card
                        title="First Hackathon"
                    >
                        I joined <a
                            href="https://plasticfreeoceans.org/"
                            target="_blank">
                            Plastic Free Oceans
                        </a> at Hack for Good at Microsoft where we worked on a plastic monitoring tool.
                        This was my first experience seeing computer science applied in a context
                        where the purpose is help others.
                    </Card>
                </Timeline.Item>
                <Timeline.Item color={"black"}>
                    <Card
                        title="Teaching Python"
                    >
                        I became a course consultant for <a
                            href="https://www.cs.cornell.edu/courses/cs1110/2020fa/"
                            target="_blank">
                            CS 1110: Introduction to Computing Using Python
                        </a>. Not only did this help me develop greater teaching skills,
                        it also forced me to relearn and understand the basics of computer science
                        in different ways.
                    </Card>
                </Timeline.Item>
                <Timeline.Item color={"black"}>
                    <Card
                        title="Returning to Microsoft"
                        text="I had a remote internship with Microsoft.
                        I worked with Commerce Mesh team to integrate support
                        for legacy authentication in a .NET Core web service.
                        I used Docker and Kubernetes to test and deploy the service
                        to Azure."
                    />
                </Timeline.Item>
                <Timeline.Item color={"black"}>
                    <Card
                        title="Hack for Social Justice"
                    >
                        This time, I joined two teams: <a
                            href="https://leat.netlify.app/"
                            target="_blank">
                            LEAT
                        </a> and a prosecutorial misconduct tracker. The goal was to create
                        sustainable ways to track and convey data about law enforcement and
                        prosecutorial misconduct.
                    </Card>
                </Timeline.Item>
            </Timeline >
        </div >
    )
}

function ExperienceDesktop() {
    return (
        <div className={experienceStyles.sectionDesktop}>
            <Timeline mode={"alternate"} className={experienceStyles.timeline}>
                <Timeline.Item color={"black"} label={"2015"}>
                    <Card
                        title="The Beginning"
                        text="I started learning Java in high school.
                        This was my first time coding, and I started creating little games
                        &mdash; the first game I ever made was inspired by The Stanley Parable."
                    />
                </Timeline.Item>
                <Timeline.Item color={"black"} label={"2017"}>
                    <Card
                        title="Entering College"
                        text="The first class I took in college was object-oriented programming.
                        As I started to understand computer science from a high-level perspective,
                        I decided to major in computer science."
                    />
                </Timeline.Item>
                <Timeline.Item color={"black"} label={"2019"}>
                    <Card
                        title="Interning at Microsoft"
                    >
                        I interned as part of the Explore Microsoft program.
                        I worked on the <a
                            href="https://azure.microsoft.com/en-us/"
                            target="_blank">
                            azure.microsoft.com
                        </a> team with two other interns to migrate a chatbot extension
                        used internally by developers to a new platform.
                    </Card>
                </Timeline.Item>
                <Timeline.Item color={"black"} label={"2019"}>
                    <Card
                        title="First Hackathon"
                    >
                        I joined <a
                            href="https://plasticfreeoceans.org/"
                            target="_blank">
                            Plastic Free Oceans
                        </a> at Hack for Good at Microsoft where we worked on a plastic monitoring tool.
                        This was my first experience seeing computer science applied in a context
                        where the purpose is help others.
                    </Card>
                </Timeline.Item>
                <Timeline.Item color={"black"} label={"2019"}>
                    <Card
                        title="Teaching Python"
                    >
                        I became a course consultant for <a
                            href="https://www.cs.cornell.edu/courses/cs1110/2020fa/"
                            target="_blank">
                            CS 1110: Introduction to Computing Using Python
                        </a>. Not only did this help me develop greater teaching skills,
                        it also forced me to relearn and understand the basics of computer science
                        in different ways.
                    </Card>
                </Timeline.Item>
                <Timeline.Item color={"black"} label={"2020"}>
                    <Card
                        title="Returning to Microsoft"
                        text="I had a remote internship with Microsoft.
                        I worked with Commerce Mesh team to integrate support
                        for legacy authentication in a .NET Core web service.
                        I used Docker and Kubernetes to test and deploy the service
                        to Azure."
                    />
                </Timeline.Item>
                <Timeline.Item color={"black"} label={"2020"}>
                    <Card
                        title="Hack for Social Justice"
                    >
                        This time, I joined two teams: <a
                            href="https://leat.netlify.app/"
                            target="_blank">
                            LEAT
                        </a> and a prosecutorial misconduct tracker. The goal was to create
                        sustainable ways to track and convey data about law enforcement and
                        prosecutorial misconduct.
                    </Card>
                </Timeline.Item>
            </Timeline >
        </div >
    )
}

export default function Experience() {

    const [width, setWidth] = useState(0);
    useEffect(() => {
        setWidth(window.innerWidth);
    });

    const handleResize = () => setWidth(window.innerWidth)
    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return width < 800 ? <ExperienceMobile /> : <ExperienceDesktop />
}
