
type User = {
    "id": string,
    "name": string
}


export default async function MockUsers(){
    const res = await fetch("https://67ea0efcbdcaa2b7f5bacd1c.mockapi.io/users");
    const users = await res.json();

    return (
        <div className="py-10 px-4">
            <form className="mb-6">
                <input name="name"
                type="text"
                placeholder="Enter the name"
                className="border pl-6 pr-38 py-2 mr-2 rounded-lg text-left"
                required />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg ">Add user</button>
            </form>
            <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 space-y-4">
                {users.map((user: User) => {
                    return <li key={user.id} className="p-6 bg-white rounded-lg text-gray-700">{user.name}</li>
                })}
            </ul>
        </div>
    );
}