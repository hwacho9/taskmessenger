import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import Profile from "./routes/profile";
import Home from "./routes/home";
import Login from "./routes/login";
import CreateAccount from "./routes/create-account";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/loading-screen";
import { auth } from "./firebase";
import { styled } from "styled-components";
import ProtectedRoute from "./components/protected-route";
import InitPage from "./routes/init";

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #f5f5f5;
`;

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <ProtectedRoute>
                <Layout />
            </ProtectedRoute>
        ),
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "profile",
                element: <Profile />,
            },
        ],
    },
    {
        path: "/init",
        element: <InitPage />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/create-account",
        element: <CreateAccount />,
    },
]);

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const init = async () => {
        await auth.authStateReady();
        setIsLoading(false);
    };

    useEffect(() => {
        init();
    }, []);

    return (
        <Wrapper>
            {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}

        </Wrapper>


    );
}

export default App;
