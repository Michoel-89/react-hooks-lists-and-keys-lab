import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linksMapped = links.map((link) => {
    return (
     <a key={link} href={`#${link}`}>{link}</a>
    )
  })
  return <nav>{linksMapped}</nav>
}

export default NavBar;
