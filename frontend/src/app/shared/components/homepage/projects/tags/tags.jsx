// tags/tags.jsx
import React from "react";
import "./tags.css";

export function Tags({tags}) {
    return (
        <div className="tags-container">
            {tags.data && tags.data.length > 0 ? (
                <>
                    {tags.data.map((tag) => {
                            return (
                                <div className="tag-form" key={tag.id}>
                                    <img
                                        src={process.env.NEXT_PUBLIC_STRAPI_STATIC_FILE + tag.attributes.logo.data.attributes.url}
                                        alt={tag.attributes.slug}
                                    />
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