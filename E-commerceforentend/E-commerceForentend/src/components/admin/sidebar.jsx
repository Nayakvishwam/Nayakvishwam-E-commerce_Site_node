import { Link } from "react-router-dom"

export default function SideNavbar() {
    return (
        <aside id="sidebar" className="sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">
                <li className="nav-item">
                    <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#" >
                        <i className="ri ri-user-6-line"></i><span>Manage Users</span><i className="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                        <li>
                            {/* <Link> */}
                            <a href="">
                                <i className="ri ri-user-add-fill"></i><span>Users</span>
                            </a>
                            {/* </Link> */}
                        </li>
                    </ul>
                </li>
            </ul>

        </aside>
    )
}