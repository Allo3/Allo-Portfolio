import Link from "next/link"
import "./home.css"

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body>
                <header>    
                    <nav className="navbar">
                        <h1>Portfolio</h1>
                            <div className="links">
                                <Link href="/">Accueil</Link>
                                <Link href="#contact">Contact</Link>
                            </div>
                    </nav>
                </header>
                {children}
            </body>
        </html>
    )
}