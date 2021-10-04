import React from "react";
import "../assets/css/navbar.css"

const Navbar = () => {
	return (
		<div className="navbar-container" >
			<div>
				Raven Technologies
			</div>

			<div>
				<ul className="list">
					<li>
						item 1
					</li>
					<li>
						item 2
					</li>
					<li>
						item 3
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar;
