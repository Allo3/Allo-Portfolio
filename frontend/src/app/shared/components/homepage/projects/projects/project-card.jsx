// projects/project-card.jsx
import {Tags} from "@/app/shared/components/homepage/projects/tags/tags";

import "./project-card.css";

export function ProjectCard({project}) {
    return (
        <div key={project.id}>
            <div className="project-img">
                <a href={"https://github.com/Allo3/" + project.attributes.slug} target="_blank">
                    <img
                        src={process.env.NEXT_PUBLIC_STRAPI_STATIC_FILE + project.attributes.media.data.attributes.url}
                        alt="asdf"
                    />
                </a>
            </div>
            <Tags
                tags={project.attributes.tags}
            />
            <div className="project-desc">
                <p>{project.attributes.desc}</p>
                <a href={"https://github.com/Allo3/" + project.attributes.slug} target="_blank">
                    <button className="custom-btn btn-12"><span>Cliquez ici !</span><span>GitHub</span></button>
                </a>
            </div>

        </div>
    );
}
