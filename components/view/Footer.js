import Link from "next/link";

export default function Footer() {
    return (
        <div className={"justify-center text-center"}>
            <p className={"fixed bottom-0 left-1/2 -translate-y-1/2 -translate-x-1/2 text-xl text-blue-800/90 text-shadow"}>
                <a className={"hover:text-blue-600 transition"} rel="noreferrer" href={"https://marvhuelsmann.com"} target={"_blank"}>Marvin Hülsmann</a> - 2022 - <Link href={"/guideline"}>Terms</Link>
            </p>
        </div>
    )
}
