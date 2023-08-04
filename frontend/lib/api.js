import axios from "axios";


const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function fetchProjects() {
    try {
        const response = await axios.get(`${API_URL}/projects?populate[media]=media&populate[tags][populate][logo]=tags`);
        return response.data.data;
    } catch (error) {
        throw new Error("Erreur lors de la récupération des projets :", error);
    }
}

export async function fetchProjectBySlug(slug) {
    try {
        const res = await axios.get(`${API_URL}/projects?populate[media]=media&populate[screenMedia]=screenMedia&populate[tags][populate][logo]=tags&filters[slug][$eq]=${slug}`);
        return res.data.data;
    } catch (e) {
        throw new Error(`Erreur lors de la récupération du projet ${slug} : ${e.message}`);
    }
}

export async function createContact(contact) {
    try {
        const res = await axios.post(`${API_URL}/contacts`, contact);
        return res.data.data;
    } catch (e) {
        throw new Error(`Erreur lors de la récupération du projet ${slug} : ${e.message}`);
    }
}


