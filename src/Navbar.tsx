import { Link } from "react-router-dom"

export const Navbar: React.FC = () => {
    return (
        <nav id="navbar" className="w-full bg-neutral-200 shadow-md absolute" >
            <ul className="flex justify-around">
                <li> <Link to={"/"} className="text-xl opacity-60 font-semibold hover:opacity-100">HOME</Link> </li>
                <li> <Link to={"/browse-classes"} className="text-xl opacity-60 font-semibold hover:opacity-100">BROWSE CLASSES</Link> </li>
                <li> <Link to={"/major-requirements"} className="text-xl opacity-60 font-semibold hover:opacity-100">MAJOR REQUIREMENTS</Link> </li>
            </ul>
        </nav>
    )
}