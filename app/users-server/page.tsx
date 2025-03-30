
type User = {
    "id": number,
    "name": string,
    "email": string
}

export default async function Users() {
    //Purposely delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const res = await fetch("https://jsonplaceholder.typicode.com/users1")
    if(!res.ok) return <div>Error</div> //could not make Error.tsx load automatically like the Loading.tsx component does.
    const users = await res.json()

    return (
        <ul className="space-y-4 p-4">
            {users.map((user:User) => {
                return <li key={user.id} className="p-4 bg-white text-gray-700 rounded-lg">{user.name} (user.email)</li>
            })}

        </ul>
    );
}