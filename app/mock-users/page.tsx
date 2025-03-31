import { revalidatePath } from "next/cache";

type User = {
    "id": string,
    "name": string
}


export default async function MockUsers(){
    const res = await fetch("https://67ea0efcbdcaa2b7f5bacd1c.mockapi.io/users");
    const users = await res.json();

    // Server action
    async function addUser(formData: FormData) {
        "use server"
        const name = formData.get("name");
        const res = await fetch("https://67ea0efcbdcaa2b7f5bacd1c.mockapi.io/users", 
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Since it is server code, it is safe to include private key here."
            },
            body: JSON.stringify({ name })
        })
        const newUser = await res.json()
        revalidatePath('mock-users')
        console.log(newUser);
    }

    return (
        <div className="py-10 px-4">
            <form action={addUser} className="mb-6">
                <input name="name"
                type="text"
                placeholder="Enter the name"
                className="border pl-6 pr-38 py-2 mr-2 rounded-lg text-left"
                required />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg
                hover:bg-blue-400 active:bg-blue-200 ">Add user</button>
            </form>
            <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 space-y-4">
                {users.map((user: User) => {
                    return <li key={user.id} className="p-6 bg-white rounded-lg text-gray-700">{user.name}</li>
                })}
            </ul>
        </div>
    );
}