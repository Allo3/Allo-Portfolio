import Link from 'next/link'
import "./page.css"
export default function NotFound() {
    return (
        <div className="error-format">
            <h2>404</h2>
            <p>La page que vous cherchez n&apos;existe pas ! (pas encore)</p>
            <Link href="/">Retour à l&apos;accueil</Link>
        </div>
    )
}