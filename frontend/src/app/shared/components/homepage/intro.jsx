import Image from "next/image";

export function Intro() {
    return (
        <div className="intro">
            <div className="intro-text">
                <h4>Je m&apos;appelle <span>Alex</span> et je suis <span>développeur web</span>
                </h4>
                <p>J&apos;ai toujours aimé le développement de loin, et après avoir expérimenté divers métiers dans
                    d&apos;autres branches, j&apos;ai décidé de m&apos;y remettre sérieusement</p>
            </div>

            <div className="intro-img">
                <Image width={720} height={257} unoptimized={true} className="img-intro" src="/screenshot.png" alt="test"/>
            </div>
        </div>
    )
}