import './globals.css'
import Hello from "@/app/components/Hello";

export default function Home() {
    return (
        <main className="text-2xl h-full flex flex-col w-2/3 xl:w-3/4 justify-center">
            <Hello/>
        </main>
    );
}

