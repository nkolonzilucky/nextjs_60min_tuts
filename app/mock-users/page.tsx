
type User = {
    "id": string,
    "name": string
}


export default async function MockUsers(){
    const res = await fetch("https://67ea0efcbdcaa2b7f5bacd1c.mockapi.io/users");
    const users = await res.json();

    return (
        <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 space-y-4 p-4">
            {users.map((user: User) => {
                return <li key={user.id} className="p-6 bg-white rounded-lg text-gray-700">{user.name}</li>
            })}

        </ul>
    );
}