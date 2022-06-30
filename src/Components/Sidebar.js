import React from 'react'
import { Link } from 'react-router-dom';
import "../App.css";
import {SidebarData} from './SidebarData';

const Sidebar = () => {
	return (
		<div className="aside">
			<div className="logo">
				<Link to="/"><span>P</span>ortfolio</Link>
			</div>
			<ul className="nav">
				{SidebarData.map((val, key) => {
					return <li key={key} 
					className={window.location.pathname === val.link ? "active" : ""}
					onClick={() => {
						window.location.pathname = val.link;
					}}>
						{" "}
						{val.Icon}{val.title}
					</li>
				})}
			</ul>
		</div>
	)
}

export default Sidebar
