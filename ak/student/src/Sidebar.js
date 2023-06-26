import React from 'react'
import { Link } from 'react-router-dom'
function Sidebar() {
    return (
        <div>
            <nav class="sidebar sidebar-offcanvas" id="sidebar">
                <ul class="nav">
                    <li class="nav-item">
                        <Link to="/" class="nav-link" href="index.html">
                            <i class="mdi mdi-grid-large menu-icon"></i>
                            <span class="menu-title">Dashboard</span>
                        </Link>
                    </li>
                    <li class="nav-item nav-category">Students</li>
                    <li class="nav-item">
                        <Link to="/student" class="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                            <i class="menu-icon mdi mdi-floor-plan"></i>
                            <span class="menu-title">Attendance</span>
                            <i class="menu-arrow"></i>
                        </Link>
                        <div class="collapse" id="ui-basic">
                            <ul class="nav flex-column sub-menu">
                                <li class="nav-item"> <a class="nav-link" href="pages/ui-features/buttons.html">Buttons</a></li>
                                <li class="nav-item"> <a class="nav-link" href="pages/ui-features/dropdowns.html">Dropdowns</a></li>
                                <li class="nav-item"> <a class="nav-link" href="pages/ui-features/typography.html">Typography</a></li>
                            </ul>
                        </div>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Sidebar
