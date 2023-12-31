// tags/tags.jsx
import React from "react";
import Image from "next/image";
import "./tags.css";

export function Tags({tags}) {
    return (
        <div className="tags-container">
            {tags.data && tags.data.length > 0 ? (
                <>
                    {tags.data.map((tag) => {
                        return (
                            <div className="tag-form" key={tag.id}>
                                <a href={tag.attributes.link ? (
                                    tag.attributes.link
                                ) : (
                                    "//www.google.com/search?q=" + tag.attributes.name
                                )
                                }>
                                    <Image width={40} height={40}
                                        src={tag.attributes.logo.data.attributes.url}
                                        alt={tag.attributes.slug}
                                    />
                                </a>
                            </div>
                        );
                    })}
                </>
            ) : (
                <p>Aucun tag à afficher pour le moment.</p>
            )}
        </div>
    );
}
