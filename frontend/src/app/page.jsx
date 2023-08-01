import "./page.css"
import {Intro} from "@/app/shared/components/homepage/intro";

import {Projects} from "@/app/shared/components/homepage/projects/projects";

export default function Page() {
    return (
        <main>
            <Intro/>
            <Projects/>
        </main>
    )
}