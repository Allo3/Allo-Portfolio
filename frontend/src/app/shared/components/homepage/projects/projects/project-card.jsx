// projects/project-card.jsx
import {Tags} from "@/app/shared/components/homepage/projects/tags/tags";

import "./project-card.css";

export function ProjectCard({project}) {
    return (
        <div className="project-card" key={project.id}>
            <div className="project-img">
                <a href={'/projet/' + project.attributes.slug}>
                    <img
                        src={process.env.NEXT_PUBLIC_STRAPI_STATIC_FILE + project.attributes.media.data.attributes.url}
                        alt="asdf"
                    />
                </a>

            </div>
            <Tags
                tags={project.attributes.tags}
            />
            <div className="project-title">
                <h3>{project.attributes.title}</h3>
            </div>
            <div className="project-desc">
                <p>{project.attributes.desc}</p>
                <a href="">
                    <button className="custom-btn btn-12"><span>Cliquez ici !</span><span>GitHub</span></button>
                </a>
            </div>

        </div>
);
}
