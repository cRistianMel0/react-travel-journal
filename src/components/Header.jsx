import globeImage from '../assets/globe.png'
export default function Header() {
    return (
        <header>
            <nav>
                <img src={globeImage} alt="" />
                <h1>my travel journal.</h1>
            </nav>
        </header>
    )
}