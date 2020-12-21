import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.css'

import Image from 'next/image'
import { Timeline } from 'antd'
import Card from './components/Card'
import Label from './components/Label'

import experienceStyles from '../styles/Experience.module.css'


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
                        I worked with two other interns to migrate a chatbot extension
                        used internally by developers to a new platform. This allowed our
                        team to better analyze and improve the chatbot feature on <a
                            href="https://azure.microsoft.com/en-us/"
                            target="_blank">
                            azure.microsoft.com
                        </a>, which can help customers without having to contact a sales
                        representative.
                    </Card>
                    <div className={experienceStyles.imageWrapper}>
                        <a className={experienceStyles.imageLink}
                            href="https://azure.microsoft.com/en-us/overview/contact-azure-sales/"
                            target="_blank"
                            aria-label="Plastic Free Oceans">                        
                                <Image
                                    src="/explore.png"
                                    width={600}
                                    height={405}
                                    objectFit='cover'
                                    alt="picture of contact sales section of azure.microsoft.com"
                                />
                        </a>
                    </div>
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
                            where the purpose is help others. The picture below links to a Dash application that
                            visualizes the geospatial distribution of plastic debris in rivers, as collected by
                            the river cameras.
                        </Card>
                        <div className={experienceStyles.imageWrapper}>
                            <a className={experienceStyles.imageLink}
                                href="https://riverapp-test.herokuapp.com/"
                                target="_blank"
                                aria-label="Plastic Free Oceans">                        
                                <Image
                                    src="/pfo.png"
                                    width={600}
                                    height={300}
                                    objectFit='cover'
                                    alt="map visualization of Plastic Free Oceans"
                                />
                            </a>
                        </div>
                </Timeline.Item>
                <Timeline.Item color={"black"}>
                    <Card
                        title="Teaching Computer Science"
                    >
                        I became a course consultant for <a
                            href="https://www.cs.cornell.edu/courses/cs1110/2020fa/"
                            target="_blank">
                            CS 1110: Introduction to Computing Using Python
                        </a>. Not only did this help me develop better teaching skills,
                        it also forced me to relearn and rethink the basics of computer science.
                        As a consultant, I lead a lab section, hold weekly consulting hours,
                        and grade assignments throughout the semester.
                    </Card>
                </Timeline.Item>
                <Timeline.Item color={"black"}>
                    <Card
                        title="Returning to Microsoft"
                        text="I had a remote internship with Microsoft.
                        I worked with Commerce Mesh team to integrate support
                        for legacy authentication in a .NET Core web service.
                        I used Docker and Kubernetes to test and deploy the service
                        to Azure, creating a solution that allows customers to
                        migrate their legacy services to Azure."
                    />
                </Timeline.Item>
                <Timeline.Item color={"black"}>
                    <Card
                        title="Hack for Social Justice"
                    >
                        This time, I joined two teams: <a
                            href="https://leat.netlify.app/about"
                            target="_blank">
                            LEAT
                        </a> and a prosecutorial misconduct tracker. The goal was to create
                        sustainable ways to track and convey data about law enforcement and
                        prosecutorial misconduct. I helped design and implement the webpage.
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
                <Timeline.Item color={"black"} label={
                    <Label
                        year="2015"
                    >
                        Java
                    </Label>
                }>
                    <Card
                        title="The Beginning"
                        text="I started learning Java in high school.
                        This was my first time coding, and I started creating little games
                        &mdash; the first game I ever made was inspired by The Stanley Parable."
                    />
                </Timeline.Item>
                <Timeline.Item color={"black"} label={
                    <Label
                        year="2017"
                    >
                        Java
                    </Label>
                }>
                    <Card
                        title="Entering College"
                        text="The first class I took in college was object-oriented programming.
                        As I started to understand computer science from a high-level perspective,
                        I decided to major in computer science. Below is a project from this class
                        where I implemented a path-finding algorithm in Java."
                    />
                    <div className={experienceStyles.imageWrapper}>
                        <video autoPlay={true} controls={false} loop={true} width={'100%'} height={'auto'}
                            style={{ maxWidth: '600px' }}    
                        >
                            <source src="/planetx.mp4" type="video/mp4" />
                        </video>
                    </div>
                </Timeline.Item>
                <Timeline.Item color={"black"} label={
                    <Label
                        year="2019"
                    >
                        <div>
                            C#
                        </div>
                        <div>
                            JavaScript
                        </div>
                        <div>
                            Kusto
                        </div>
                        <div>
                            React
                        </div>
                    </Label>
                }>
                    <Card
                        title="Interning at Microsoft"
                    >
                        I interned as part of the Explore Microsoft program.
                        I worked with two other interns to migrate a chatbot extension
                        used internally by developers to a new platform. This allowed our
                        team to better analyze and improve the chatbot feature on <a
                            href="https://azure.microsoft.com/en-us/"
                            target="_blank">
                            azure.microsoft.com
                        </a>, which can help customers without having to contact a sales
                        representative.
                    </Card>
                    <div className={experienceStyles.imageWrapper}>
                        <a className={experienceStyles.imageLink}
                            href="https://azure.microsoft.com/en-us/overview/contact-azure-sales/"
                            target="_blank"
                            aria-label="Plastic Free Oceans">                        
                                <Image
                                    src="/explore.png"
                                    width={600}
                                    height={405}
                                    objectFit='cover'
                                    alt="picture of contact sales section of azure.microsoft.com"
                                />
                        </a>
                    </div>
                </Timeline.Item>
                <Timeline.Item color={"black"} label={
                    <Label
                        year="2019"
                    >
                        <div>
                            Power BI
                        </div>
                        <div>
                            Python
                        </div>
                    </Label>
                }>
                        <Card
                            title="First Hackathon"
                        >
                            I joined <a
                                href="https://plasticfreeoceans.org/"
                                target="_blank">
                                Plastic Free Oceans
                            </a> at Hack for Good at Microsoft where we worked on a plastic monitoring tool.
                            This was my first experience seeing computer science applied in a context
                            where the purpose is help others. The picture below links to a Dash application that
                            visualizes the geospatial distribution of plastic debris in rivers, as collected by
                            the river cameras.
                        </Card>
                        <div className={experienceStyles.imageWrapper}>
                            <a className={experienceStyles.imageLink}
                                href="https://riverapp-test.herokuapp.com/"
                                target="_blank"
                                aria-label="Plastic Free Oceans">                        
                                <Image
                                    src="/pfo.png"
                                    width={600}
                                    height={300}
                                    objectFit='cover'
                                    alt="map visualization of Plastic Free Oceans"
                                />
                            </a>
                        </div>
                </Timeline.Item>
                <Timeline.Item color={"black"} label={
                    <Label
                        year="2019"
                    >
                        Python
                    </Label>
                }>
                    <Card
                        title="Teaching Computer Science"
                    >
                        I became a course consultant for <a
                            href="https://www.cs.cornell.edu/courses/cs1110/2020fa/"
                            target="_blank">
                            CS 1110: Introduction to Computing Using Python
                        </a>. Not only did this help me develop better teaching skills,
                        it also forced me to relearn and rethink the basics of computer science.
                        As a consultant, I lead a lab section, hold weekly consulting hours,
                        and grade assignments throughout the semester.
                    </Card>
                </Timeline.Item>
                <Timeline.Item color={"black"} label={
                    <Label
                        year="2020"
                    >
                        <div>
                            Docker
                        </div>
                        <div>
                            Kubernetes
                        </div>
                        <div>
                            .NET Core
                        </div>
                    </Label>
                }>
                    <Card
                        title="Returning to Microsoft"
                        text="I had a remote internship with Microsoft.
                        I worked with Commerce Mesh team to integrate support
                        for legacy authentication in a .NET Core web service.
                        I used Docker and Kubernetes to test and deploy the service
                        to Azure, creating a solution that allows customers to
                        migrate their legacy services to Azure."
                    />
                    <div className={experienceStyles.imageWrapper}>
                        <video autoPlay={true} controls={false} loop={true} width={'100%'} height={'auto'}
                            style={{ maxWidth: '600px', marginBottom: '0px' }}    
                        >
                            <source src="/cloud.mov" type="video/mp4" />
                        </video>
                    </div>
                </Timeline.Item>
                <Timeline.Item color={"black"} label={
                    <Label
                        year="2020"
                    >
                        React
                    </Label>
                }>
                    <Card
                        title="Hack for Social Justice"
                    >
                        This time, I joined two teams: <a
                            href="https://leat.netlify.app/about"
                            target="_blank">
                            LEAT
                        </a> and a prosecutorial misconduct tracker. The goal was to create
                        sustainable ways to track and convey data about law enforcement and
                        prosecutorial misconduct. I helped design and implement the webpage.
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