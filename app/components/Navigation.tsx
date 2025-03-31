"use client"
import { SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
        "href":"/products/1"
    },
    {
        "id" : 4,
        "name": "User Clients",
        "href" : "/users-client"
    },
    {
        "id" : 5,
        "name": "User Server",
        "href" : "/users-server"
    },
    {
        "id" : 6,
        "name": "Mock-Users",
        "href" : "/mock-users"
    },
];
export default function Navigation() {
    const pathname = usePathname()
    console.log(pathname)
    return (
        <nav className="flex items-center justify-center p-6 bg-slate-800">
            {links.map((link: link) => <Link key={link.id} href={link.href} className={pathname === link.href ? "font-bold mr-4" : "mr-4 text-blue-500"}>{link.name}</Link>)}
            <SignInButton mode="modal" className="bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-400 active:bg-blue-200 mr-4" />
            <UserButton />
        </nav>
    );

}