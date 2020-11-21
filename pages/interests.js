import React from 'react'
import Image from 'next/image'
import Card from './Components/Card'

import aboutStyles from '../styles/About.module.css'
import interestsStyles from '../styles/Interests.module.css'

export default function Interests() {
    return (
        <div className={aboutStyles.section}>
            <div className={interestsStyles.experienceTitleContainer}>
                <h1 className={interestsStyles.title}>Interests</h1>
                <hr className={interestsStyles.line} />
            </div>
            <div className={interestsStyles.overlapLeft}>
                <Image src="/idp.jpg" width={850} height={500} />
                <div className={interestsStyles.overlayLeft}>
                    <Card
                        style={{ marginBottom: 0, backgroundColor: "black" }}
                        title="Intergroup Dialogue Project"
                    >
                        <p>
                            <a href="https://idp.cornell.edu" target="_blank">IDP</a> is
                            an academic initiative that creates
                            community across difference through dialogue.
                            I have facilitated the undergraduate course
                            three times. I first took this class in
                            my second semester at Cornell. Since then, it has
                            helped me grow as a listener, a communicator, a student
                            and a teacher.
                        </p>
                    </Card>
                </div>
            </div>
            <div className={interestsStyles.overlapRight}>
                <Image src="/rise.jpg" width={900} height={500} />
                <div className={interestsStyles.overlayRight}>
                    <Card
                        style={{ marginBottom: 0, backgroundColor: "black" }}
                        title="Rise Dance Group"
                    >
                        <p>
                            <a href="https://www.risedancegroupcornell.com/" target="_blank">Rise</a> is
                            a dance group that mainly focuses on contemporary, lyrical, and jazz.
                            Before Rise, I had only ever learned ballet. Through Rise, I have been
                            able to grow as a dancer and find a community of people who enjoy dancing
                            as much as I do.
                        </p>
                    </Card>
                </div>
            </div>
        </div>
    )
}
