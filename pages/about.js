import Image from 'next/image'
import React from 'react'
import aboutStyles from '../styles/About.module.css'

export default function About() {
    return (

        <div className={aboutStyles.section}>
            <h1 className={aboutStyles.title}>About Me</h1>
            <hr className={aboutStyles.line} />
            <div className={aboutStyles.binder}>
                <div className={aboutStyles.leftPane}>
                    <Image
                        className={aboutStyles.image}
                        src="/linda.jpg"
                        width={350}
                        height={350}
                        objectFit='cover'
                        objectPosition='50% 10%'
                        alt="photo of Linda"
                    />
                </div>
                <div className={aboutStyles.rightPane}>
                    <p className={aboutStyles.text}>
                        Hi! I'm Linda, a senior studying computer science at Cornell University.
                        I love solving problems, whether it's working on a coding project,
                        writing mathematical proofs, or figuring out whether a straw has one or two holes (it's two).
                        I am pursuing a career in software development and I'm particularly interested
                        in cloud platforms and services.
                    </p>
                </div>
            </div>
        </div>

    )
}
