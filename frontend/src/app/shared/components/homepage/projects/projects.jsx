// projects.jsx
'use client'
import {ProjectCard} from "@/app/shared/components/homepage/projects/projects/project-card";
import {fetchProjects} from "../../../../../../lib/api";
import {useEffect, useState} from "react";
import {Loading} from "@/app/shared/components/loading/Loading";

export function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const projectsData = await fetchProjects();
                console.log("Projects data:", projectsData);
                setProjects(projectsData);

            } catch (error) {
                console.error("Erreur lors de la récupération des projets ou des tags :", error);
            }
        };
        getData();
    }, []);


    return (
        <div className="projects-component">
            <div className="project-grid">
                {projects?.length > 0 ? (
                    projects.map((project) => (
                        <div className={project.attributes.slug + " project-card"}>
                        <ProjectCard project={project}/>
                        </div>
                    ))
                ) : (
                    <div className="loading">
                    <Loading/>
                    </div>
                )}
            </div>
        </div>
    );
}