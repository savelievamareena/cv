"use client"
import React from "react";
export default function ContactForm() {
    const [form, setForm] = React.useState({
        name: "",
        email: "",
        text: ""
    })
    const [isLoading, setIsLoading] = React.useState(false);
    const [successMessage, setSuccessMessage] = React.useState("")

    async function onSubmitHandler(e) {
        e.preventDefault();
        const isEmailValid = validateEmail(form.email);
        if(!isEmailValid) {
            const emailError = document.getElementById("errorEmail");
            emailError.classList.remove("invisible");
            setTimeout(()=>{emailError.classList.add("invisible");}, 2000)
            return;
        }

        setIsLoading(true);
        let res = await fetch("http://localhost:4000/messages", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(form)
        })

        if(res.status === 201) {
            setForm({
                name: "",
                email: "",
                text: ""
            })
            setIsLoading(false)
            setSuccessMessage("Message sent");
            setTimeout(()=>{setSuccessMessage("")}, 2000);
        }
    }

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
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
        <form className="flex flex-col justify-between gap-2 2xl:text-2xl xl:text-xl lg:text-lg text-base">
            <div className="flex flex-row justify-between gap-4">
                <label className="2xl:text-2xl xl:text-xl lg:text-lg text-base" htmlFor="">Name</label>
                <input
                    value={form.name}
                    required={true}
                    type="text"
                    className="grow block p-2.5 w-full bg-gray-50 rounded-lg border border-gray-300 text-gray-900 self-end"
                    name="name"
                    placeholder="Your Name"
                    onChange={onChangeHandler}
                />
            </div>
            <div className="py-2"></div>
            <div className="flex flex-row justify-between gap-4">
                <label className="2xl:text-2xl xl:text-xl lg:text-lg text-base" htmlFor="">Email</label>
                <input
                    value={form.email}
                    required
                    type="email"
                    className="grow block p-2.5 w-full bg-gray-50 rounded-lg border border-gray-300 text-gray-900 self-end"
                    name="email"
                    placeholder="Your Email"
                    onChange={onChangeHandler}
                />
            </div>
            <div className="text-coral-pink text-sm py-0 text-right invisible" id="errorEmail">Please, enter valid email</div>
            <div className="flex flex-row justify-between gap-4">
                <label className="2xl:text-2xl xl:text-xl lg:text-lg text-base" htmlFor="text">Text</label>
                <textarea
                    value={form.text}
                    required={true}
                    name="text"
                    id="text"
                    placeholder="Write your message here"
                    className="grow block p-2.5 w-full bg-gray-50 rounded-lg border border-gray-300 text-gray-900 self-end"
                    onChange={onChangeHandler}
                >
                </textarea>
            </div>
            <div className="py-2"></div>
            <button
                onClick={onSubmitHandler}
                className="rounded-lg bg-mint-green border p-2.5 text-gray-900 w-1/3 self-end"
                disabled={isLoading}
            >
                {isLoading && "Sending"}
                {!isLoading && "Send"}
            </button>
            <div className="text-mint-green">
                {successMessage !== "" && successMessage}
            </div>
        </form>
    )
}
