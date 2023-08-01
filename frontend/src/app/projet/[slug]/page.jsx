'use client'
import {useEffect, useState} from "react";
import {fetchProjectBySlug} from "../../../../lib/api";
import {Loading} from "@/app/shared/components/loading/Loading";
import {ProjectCard} from "@/app/shared/components/homepage/projects/projects/project-card";

export default function Page({params}) {
    const [project, setProject] = useState();

    useEffect(() => {
        const getData = async () => {
            try {
                // Récupérer les projets avec les médias
                setTimeout(async () => {
                    const projectsData = await fetchProjectBySlug(params.slug);
                    console.log("Projects data:", projectsData);
                    if (projectsData && projectsData.length > 0) {
                        setProject(projectsData[0]);
                    }
                }, 1000);
            } catch (error) {
                console.error("Erreur lors de la récupération des projets ou des tags :", error);
            }
        };

        getData();
    }, []);

    console.log('project', project);
    console.log("params", params);
    return (
        <div>
            <div>
                {project ? (
                    <div>
                        <h3>{project.attributes.title}</h3>
                        <img src={process.env.NEXT_PUBLIC_STRAPI_STATIC_FILE + project.attributes.media.data.attributes.url} alt={project.attributes.title}/>
                        <p>{project.attributes.desc}</p>
                    </div>
                ) : (
                    <Loading/>
                )}
            </div>
        </div>
    );
}
