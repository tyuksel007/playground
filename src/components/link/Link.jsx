export default function Link({href, description, setMenuOpen}){
    return (
        <li onClick={()=> setMenuOpen(false)}>
            <a href={href}>{description}</a>
        </li>
    );
}