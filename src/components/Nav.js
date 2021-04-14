import React from "react";

const Nav = (props) => {
    const { pages = [], current, handlePageChange } = props;
    
    return(
        <ul className="nav nav-pages">
            {pages.map((page) => (
                <li className="nav-item" key={ page } style={{ backgroundColor: "#3C3D35", color: "#F7F6EF"}}>
                    <a href={"#" + page.toLowerCase()} onClick={ () => props.handlePageChange(page)} 
                    className={current === page ? "nav-link active" : "nav-link" }>
                        {page}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default Nav;