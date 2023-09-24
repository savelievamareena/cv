import Image from "next/image";
import avatar from "../../public/avatar.jpg"

export default function Hello() {
    return (
        <div className="flex flex-row justify-evenly h-2/4 p-2 space-x-5 text-justify">
            <div className="">
                <Image src={avatar} alt="avatar" className="max-w-xs"></Image>
            </div>
            <div className="pl-100">I am a Full Stack Web Developer with 1.5 years of freelancing experience, focused
                on crafting user-centric web solutions for a several clients. With a foundational understanding of
                both front-end and back-end technologies, I am proficient in JavaScript (React) and have a
                growing familiarity with back-end frameworks using PHP, Java, and SQL. <br/> My freelancing journey has
                equipped me with a unique blend of problem-solving skills, adaptability, and a keen eye for design. As
                someone who thrives on learning and improving, I am eager to contribute my skills in a team-oriented,
                professional setting, while continuously advancing my understanding of modern web development practices.<br/>
                I have also attended the IBA Institute and completed a 2-year educational program for retraining managers and
                specialists with higher education. My specialization was 'Software Design for Information Systems.' I
                was graduated with a specialization 'Programmer'.
            </div>
        </div>
    )
}