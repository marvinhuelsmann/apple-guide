import Link from "next/link";

export default function Footer() {
    return (
        <div className={"justify-center text-center"}>
            <p className={"text-xl text-blue-800/80 text-shadow"}>
                <a className={"hover:text-blue-600 transition"} rel="noreferrer" href={"https://marvhuelsmann.com"} target={"_blank"}>Marvin Hülsmann</a> © 2022 - <Link href={"/guideline"}>Terms</Link>
            </p>
        </div>
    )
}
