import Footer from "../components/view/Footer";

export default function Guideline() {
    return (
        <div>
            <div className={"xl:mt-48 flex justify-center mt-40"}>
                <div
                    className="absolute inset-0 z-[-9999] bg-gradient-to-tr from-bg-purple/10 via-bg-blue-300/40 to-bg-purple-300/50"
                >
                    <div
                        className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-blue-300/70 to-transparent"
                    ></div>
                </div>
                <div className="relative max-w-sm hidden ml:block xl:block">
                    <div
                        className="-translate-x-1/2vite absolute -top-70 left-1/4 h-24 w-40 rounded-full bg-blue-300 blur-3xl"
                    ></div>
                    <div
                        className="absolute left-1/2 h-32 w-62 -translate-x-1/4 rounded-full bg-blue-200/40 blur-3xl"
                    ></div>
                </div>
                <div>
                    <div className={"xl:mb-20 mb-16 flex justify-center w-full"}>
                        <h1 className={"text-8xl -mt-24 font-bold text-blue-900/70 text-shadow text-center"}>
                            Apple Guide
                        </h1>
                    </div>
                    <div className={"container text-center w-38 pb-12"}>
                        <h2 className={"font-bold text-3xl"}>Informationen</h2>
                        <p className={"mt-1 text-black text-xl font-medium"}>
                            Diese Applikation hilft, dabei einen allgemeinen Überblick über neue Apple Geräte zu
                            behalten
                            und hilft Ihnen dabei ein besseres Gerät zu finden und die richtige Entscheidung zu treffen,
                            wenn sie dies fordern.
                        </p>
                        <h2 className={"font-bold text-3xl mt-12"}>Achtung</h2>
                        <p className={"mt-1 text-black text-xl font-medium"}>
                            AppleGuide steht in keinen zusammenhang mit Apple, daher ist diese Beratung nur von der Community und nicht von Apple selbst.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
