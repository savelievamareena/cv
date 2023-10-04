import Link from "next/link";

export default function NotFound() {
    return(
        <main className="text-center">
            <h2 className="text-3xl mt-20 mb-4">
                This page does not exist.
            </h2>
            <Link href="/" className="underline">Go back to the main page.</Link>
        </main>
    )
}