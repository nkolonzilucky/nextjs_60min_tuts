import Link from "next/link";

type link = {
    "id": number,
    "name": string,
    "href": string
}
const links = [

    {   
        "id": 1,
        "name": "Home",
        "href": "/"
    },
    {
        "id": 2,
        "name" : "About",
        "href": "/about"
    },
    {
        "id": 3,
        "name":"Product", 
        "href":"/products/1"}
];
export default function Navigation() {
    return (
        <nav className="text-center p-6 bg-slate-800">
            {links.map((link: link) => <Link key={link.id} href={link.href} className="mr-4 text-blue-500">{link.name}</Link>)}
        </nav>
    );

}