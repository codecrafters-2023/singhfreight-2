// components/Sidebar.js
import Link from 'next/link';

function Sidebar({ isOpen, toggleSidebar }) {
    return (
        <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div >
                <h2>Sidebar</h2>
                <button onClick={toggleSidebar}>Close</button>
            </div>
            <ul >
                <li>
                    <Link href="/">
                    Home
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                    About
                    </Link>
                </li>
                {/* Add more links as needed */}
            </ul>
        </nav>
    );
};

export default Sidebar;
