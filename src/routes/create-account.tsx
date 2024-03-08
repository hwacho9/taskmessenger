import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import {
    Input,
    Switcher,
    Title,
    Form,
    Wrapper,
    Error,
} from "../components/auth-components";
import { Firestore, doc, setDoc } from "firebase/firestore";

export default function CreateAccount() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: { name, value },
        } = e;
        if (name === "name") setName(value);
        else if (name === "email") setEmail(value);
        else if (name === "password") setPassword(value);
    };

    const onSubmint = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        if (isLoading || name === "" || email === "" || password === "") return;
        try {
            setIsLoading(true);
            const credentials = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            console.log(credentials.user);
            await updateProfile(credentials.user, { displayName: name });
            navigate("/");
            // create an account
            // set the name of the user
            // redirect to home
        } catch (e) {
            if (e instanceof FirebaseError) {
                setError(e.message);
            }
            //setError(e.message);
        } finally {
            setIsLoading(false);
        }
        console.log(name, email, password);
    };

    return (
        <Wrapper>
            <Title>Sign in ??? </Title>
            <Form onSubmit={onSubmint}>
                <Input
                    onChange={onChange}
                    value={name}
                    name="name"
                    placeholder="Name"
                    type="text"
                    required
                />
                <Input
                    onChange={onChange}
                    value={email}
                    name="email"
                    placeholder="Email"
                    type="email"
                    required
                />
                <Input
                    onChange={onChange}
                    value={password}
                    name="password"
                    placeholder="Password"
                    type="password"
                    required
                />
                <Input
                    type="submit"
                    value={isLoading ? "Loading" : "Create Account"}
                />
            </Form>
            {error !== "" ? <Error>{error}</Error> : null}
            <Switcher>
                Already have an account? <Link to="/login">Log in &rarr;</Link>
            </Switcher>
        </Wrapper>
    );
}
