export default function Login()
{
    return(
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white shadow-md p-8 rounded-md w-96">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <form>
                    <div className="mb-4">
                        <input type="email" className="w-full p-2 border rounded" placeholder="Email" />
                    </div>
                    
                    <div className="mb-4">
                        <input type="password" className="w-full p-2 border rounded" placeholder="Password" />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}