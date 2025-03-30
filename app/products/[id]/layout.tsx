import React from "react";

export default function ProductLayout({children} : {children : React.ReactNode}) {
    return (<div>
        <header className="bg-slate-700 text-white text-center">Products</header>
        {children}
        <footer className="bg-slate-700 text-white text-center">Products Footer</footer>
        </div>);
}