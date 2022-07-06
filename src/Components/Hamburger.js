import React, {useState} from 'react';
import {SidebarData} from './SidebarData';
import './Hamburger.css';

const Hamburger = () => {
	const [open, setOpen] = useState(false);

	return (
		
		<>
			<div className="nav-toggler" onClick={() => setOpen(!open)}>
					<span></span>
			</div>
			{open && <div className="ham-nav">
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
			</div>}
		</>
	)
}

export default Hamburger
