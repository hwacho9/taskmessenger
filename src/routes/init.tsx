import { Hand } from "lucide-react";
import { useNavigate } from "react-router-dom";

const InitPage = () => {
    const navigate = useNavigate();

    return (
        <div className="h-full bg-slate-100">
            <div className="flex items-center justify-center flex-col">
                <div className="flex items-center justify-center flex-col">
                    <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
                        <Hand className="h-6 w-6 mr-2" />
                        <p>This is the init page</p>
                    </div>
                    <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
                        We help to manage your Project
                    </h1>

                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => {
                            navigate("/login");
                            // Navigate to the login page
                            // You can use a router library like react-router-dom
                            // Example: history.push('/login');
                        }}>
                        Go to Login Page
                    </button>
                    {/* <Input type="submit" value={"login"}>
                        {" "}
                    </Input> */}
                </div>
            </div>
        </div>
    );
};

export default InitPage;
