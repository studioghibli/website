import React from 'react'
import Image from 'next/image'
import Card from './components/Card'
import interestsStyles from '../styles/Interests.module.css'


export default function Interests() {
    return (
        <div className={interestsStyles.section}>
            <div className={interestsStyles.overlapLeft}>
                <a className={interestsStyles.imageLink}
                    href="https://idp.cornell.edu" target="_blank">
                    <Image
                        src="/idp.jpg"
                        width={850}
                        height={500}
                        objectFit='cover'
                        alt="photo of the teaching team of Intergroup Dialogue Project"
                    />
                </a> 
                <div className={interestsStyles.overlayLeft}>
                    <Card
                        style={{ marginBottom: "0px" }}
                        title="Intergroup Dialogue Project"
                    >
                        IDP is an academic initiative that creates
                        community across difference through dialogue.
                        I have facilitated the undergraduate course
                        three times. I first took this class in
                        my second semester at Cornell. Since then, it has
                        helped me grow as a listener, a communicator, a student
                        and a teacher.
                    </Card>
                </div>
            </div>
            <div className={interestsStyles.overlapRight}>
                <a className={interestsStyles.imageLink}
                    href="https://www.risedancegroupcornell.com/" target="_blank">
                    <Image
                        src="/rise.jpg"
                        width={850}
                        height={500}
                        objectFit='cover'
                        alt="photo of members of Rise Dance Group during performance"
                    />
                </a>
                <div className={interestsStyles.overlayRight}>
                    <Card
                        style={{ marginBottom: "0px" }}
                        title="Rise Dance Group"
                    >
                        Rise is a dance group that mainly focuses on contemporary, lyrical, and jazz.
                        Before Rise, I had only ever learned ballet. Through Rise, I have been
                        able to grow as a dancer and find a community of people who enjoy dancing
                        as much as I do.
                    </Card>
                </div>
            </div>
        </div>
    )
}