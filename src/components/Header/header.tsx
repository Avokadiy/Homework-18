import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/beans'>Beans</Link>
            <Link to='/facts'>Facts</Link>
            <Link to='/combinations'>Combinations</Link>
            <Link to='/history'>History</Link>
            <Link to='/about'>About</Link>
            <Link to='/review'>Review</Link>
        </nav>
    )
}