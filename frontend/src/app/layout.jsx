import Link from "next/link"
import "./home.css"

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <link rel="icon" href="/favicon-32x32.png" sizes="any" />
            <body>
                <header>    
                    <nav className="navbar">
                        <h1>Portfolio</h1>
                            <div className="links">
                                <Link href="/#contact">Contact</Link>
                            </div>
                    </nav>
                    <svg xmlns="http://www.w3.org/2000/svg" width="90%" height="4" opacity="0.5" viewBox="0 0 511 2" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M511 1.5H0V0.5H511V1.5Z" fill="#C778DD"/>
                    </svg>
                </header>
                {children}
            <footer>
                <div className="footer">
                    <div className="footer-links">
                        <p>© 2023 Alex Louchet. Tous droits réservés.</p>
                        <Link href="//https://www.linkedin.com/in/alex-louchet/">LinkedIn</Link>
                        <Link href="//https://github.com/Allo3">Github</Link>
                    </div>
                </div>
            </footer>
            </body>
        </html>
    )
}