// projects/project-card.jsx
import {Tags} from "@/app/shared/components/homepage/projects/tags/tags";
import Image from "next/image";


import "./project-card.css";
import Link from "next/link";

export function ProjectCard({project}) {
    console.log("process.env.NEXT_PUBLIC_ENVIRONMENT", process.env.NEXT_PUBLIC_ENVIRONMENT);
    console.log("project.attributes.media.data.attributes.url", project.attributes.media.data.attributes.url);
    console.log("project.attributes.media.data.attributes.name", project.attributes.media.data.attributes.name);
    return (
        <div key={project.id}>
            <div className="project-img">
                <Link href={'/project/' + project.attributes.slug} as="/project">
                    <Image width={500} height={500}
                        src={project.attributes.media.data.attributes.url}
                        alt={project.attributes.media.data.attributes.name}
                        loader={({src}) => src}
                    />
                </Link>
            </div>
            <Tags
                tags={project.attributes.tags}
            />
            <div className="project-desc">
                <p>{project.attributes.desc}</p>
                <div className="buttons-container">
                    <a href={'/project/' + project.attributes.slug} target="_blank">
                        <button className="custom-btn btn-12"><span>Cliquez ici !</span><span>Détaills</span>
                        </button>
                    </a>
                <a href={"https://github.com/Allo3/" + project.attributes.slug} target="_blank">
                    <button className="custom-btn btn-12"><span>Cliquez ici !</span><span>GitHub</span></button>
                </a>
            </div>
        </div>

</div>
)
    ;
}
