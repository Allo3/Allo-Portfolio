'use client'
import {useEffect, useState} from "react";
import Image from "next/image";
import "./project-page.css";
import {fetchProjectBySlug} from "../../../../lib/api";
import {Loading} from "@/app/shared/components/loading/Loading";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {vscDarkPlus} from "react-syntax-highlighter/dist/esm/styles/prism";


export async function generateStaticParams() {
    const posts = await fetchProjectBySlug().then((res) => res.json())

    return posts.map((post) => ({
        slug: post.slug,
    }))
}
function splitCodeAndText(content) {
    const codeRegex = /```([\w-]+)?\n([\s\S]*?)\n```/g;
    let lastIndex = 0;
    const blocks = [];
    if (typeof content !== "string") {
        throw new Error("The content passed to CodeAndText must be a string.");
    }
    let match;
    while ((match = codeRegex.exec(content)) !== null) {
        const textBefore = content.slice(lastIndex, match.index);
        if (textBefore) {
            blocks.push({type: "text", content: textBefore});
        }
        blocks.push({type: "code", language: match[1], content: match[2]});
        lastIndex = match.index + match[0].length;
    }

    const textAfter = content.slice(lastIndex);
    if (textAfter) {
        blocks.push({type: "text", content: textAfter});
    }

    return blocks;
}

export default function Page({params}) {
    const [project, setProject] = useState();

    useEffect(() => {
        const getData = async () => {
            try {
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
    }, [params.slug]);

    console.log("project", project);
    console.log("params", params);

    const contentBlocks = project ? splitCodeAndText(project.attributes.info) : [];

    return (<>
        <>
            {project ? (<div className="info-logo">
                <div className="infos-desc">
                    {contentBlocks.map((block, index) => block.type === "code" ? (
                        <SyntaxHighlighter key={index} language={block.language} style={vscDarkPlus}>
                            {block.content}
                        </SyntaxHighlighter>) : (
                        <ReactMarkdown className="infos-container" key={index} remarkPlugins={[remarkGfm]}>
                            {block.content}
                        </ReactMarkdown>))}
                    <Image src={project.attributes.screenMedia.data.attributes.url}
                           alt={project.attributes.title}
                           loader={({src}) => src}
                    />
                </div>
            </div>) : (<Loading/>)}
        </>
    </>);
}
