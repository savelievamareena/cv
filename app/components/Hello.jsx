import Image from "next/image";
import avatar from "../../public/avatar.jpg"

export default function Hello() {
    return (
        <div className="flex flex-row justify-evenly gap-0 flex-wrap h-full">
            <div className="p-4">
                <Image src={avatar} alt="avatar" className="max-w-xs"></Image>
            </div>
            <div className="pl-100 text-justify w-1/2 h-full">I am a Full Stack Web Developer with 1.5 years of freelancing experience, focused
                on crafting user-centric web solutions for a several clients. With a foundational understanding of
                both front-end and back-end technologies, I am proficient in JavaScript (React) and have a
                growing familiarity with back-end frameworks using PHP, Java, and SQL. <br/> My freelancing journey has
                equipped me with a unique blend of problem-solving skills, adaptability, and a keen eye for design.
                I have also attended the IBA Institute and completed a 2-year educational program for retraining managers and
                specialists with higher education. My specialization was &quot;Software Design for Information Systems.&quot; I
                was graduated with a specialization &quot;Programmer&quot;.
            </div>
        </div>
    )
}