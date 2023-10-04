"use client"
import React from "react";
import {useRouter} from "next/navigation";
export default function ContactForm() {
    let router = useRouter();
    const [form, setForm] = React.useState({
        name: "",
        email: "",
        text: ""
    })
    const [isLoading, setIsLoading] = React.useState(false);

    async function onClickHandler(e) {
        e.preventDefault();
        setIsLoading(true);
        let res = await fetch("http://localhost:4000/messages", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(form)
        })
        console.log(res);

        if(res.status === 201) {
            router.push("/");
        }
    }

    function onChangeHandler(e) {
        let inputName = e.target.name;
        let inputValue = e.target.value;

        setForm(prevState => ({
            ...prevState,
            [inputName]: inputValue
        }))
    }

    return(
        <form className="flex flex-col justify-evenly gap-4">
            <div className="flex flex-row justify-between gap-4">
                <label htmlFor="">Name</label>
                <input
                    required={true}
                    type="text"
                    className="grow block p-2.5 w-full bg-gray-50 rounded-lg border border-gray-300 text-gray-900 text-2xl"
                    name="name"
                    onChange={onChangeHandler}
                />
            </div>
            <div className="flex flex-row justify-between gap-4">
                <label htmlFor="">Email</label>
                <input
                    required={true}
                    type="text"
                    className="grow block p-2.5 w-full bg-gray-50 rounded-lg border border-gray-300 text-gray-900 text-2xl"
                    name="email"
                    onChange={onChangeHandler}
                />
            </div>
            <div className="flex flex-row justify-between gap-4">
                <label htmlFor="text">Text</label>
                <textarea
                    required={true}
                    name="text"
                    id="text"
                    placeholder="Write your message here"
                    className="grow block p-2.5 w-full bg-gray-50 rounded-lg border border-gray-300 text-gray-900 text-2xl"
                    onChange={onChangeHandler}
                >
                </textarea>
            </div>
            <button
                onClick={onClickHandler}
                className="rounded-lg bg-mint-green border p-2.5 text-gray-900 text-2xl w-1/3 self-end"
                disabled={isLoading}
            >
                {isLoading && "Sending"}
                {!isLoading && "Send"}
            </button>
        </form>
    )
}
