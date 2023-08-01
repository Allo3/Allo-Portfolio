import Link from "next/link"
import "./home.css"

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body>
        <div className="navbar">
            <h1>Portfolio</h1>
            <div className="links">
                <Link href="/">Accueil</Link>
                <Link href="/projects">Projets</Link>
                <Link href="#">Contact</Link>

            </div>
        </div>
        {children}
        </body>
        </html>
    )
}