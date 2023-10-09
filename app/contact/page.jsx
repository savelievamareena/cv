import ContactForm from "@/app/contact/ContactForm";

export default function ContactMe() {
    return(
        <div className="lg:w-3/5 sm:w-3/4 text-center">
            <h2 className="text-3xl mb-10">Want to contact me?</h2>
            <ContactForm/>
        </div>
    )
}