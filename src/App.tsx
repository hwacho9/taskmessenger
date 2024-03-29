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
import Task from "./routes/taskmanager";
import Chat from "./routes/chat";

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
            {
                path: "tasks",
                element: <Task />,
            },
            {
                path: "chat",
                element: <Chat />,
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

import { createTheme, MantineProvider } from "@mantine/core";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const init = async () => {
        await auth.authStateReady();
        setIsLoading(false);
    };

    const theme = createTheme({
        /** Put your mantine theme override here */
    });

    useEffect(() => {
        init();
    }, []);

    return (
        <MantineProvider theme={theme}>
            <Wrapper>
                {isLoading ? (
                    <LoadingScreen />
                ) : (
                    <RouterProvider router={router} />
                )}
            </Wrapper>
        </MantineProvider>
    );
}

export default App;
