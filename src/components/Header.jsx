import guyStaring from "../assets/guy-staring.jpeg"

export default function Header() {
    return (
        <header className="header">
            <img 
                src={guyStaring} 
            />
            <h1>Meme Generator</h1>
        </header>
    )
}