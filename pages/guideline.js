import Footer from "../components/view/Footer";
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import Link from "next/link";

function GuideDisclosure() {
    return (
        <div className="w-full px-4 pt-9">
            <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-1">
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-xl font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                                <span>Was kann ich hier machen?</span>
                                <ChevronUpIcon
                                    className={`${
                                        open ? 'rotate-180 transform' : ''
                                    } h-5 w-5 text-blue-500`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                Diese Applikation hilft, dabei einen allgemeinen Überblick über neue Apple Geräte zu
                                behalten
                                und hilft Ihnen dabei ein besseres Gerät zu finden und die richtige Entscheidung zu treffen,
                                wenn sie dies fordern.
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-xl font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                                <span>  Ist AppleGuide von Apple?</span>
                                <ChevronUpIcon
                                    className={`${
                                        open ? 'rotate-180 transform' : ''
                                    } h-5 w-5 text-blue-500`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                AppleGuide steht in keinen zusammenhang mit Apple, daher ist diese Beratung nur von der Community und
                                nicht von Apple selbst.
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-xl font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                                <span>Sind die Angaben spezifisch und genau?</span>
                                <ChevronUpIcon
                                    className={`${
                                        open ? 'rotate-180 transform' : ''
                                    } h-5 w-5 text-blue-500`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                Die Angaben werden aus Testberichten und aus verschiedenen Communitys gezogen, daher können die Angaben je nach Gerätezustand stark abweichen
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    )
}

export default function Guideline() {
    return (
        <div>
            <div className={"xl:mt-48 flex justify-center mt-40"}>
                <div
                    className="absolute inset-0 z-[-9999] bg-gradient-to-tr from-bg-blue/10 via-bg-blue-300/40 to-bg-blue-300/50"
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
                    <div className={"xl:mb-20 mb-5 flex justify-center w-full"}>
                        <h1 className={"text-8xl -mt-24 font-bold text-blue-900/70 text-shadow text-center"}>
                            <Link href={"../"}>Apple Guide</Link>
                        </h1>
                    </div>
                    <GuideDisclosure/>
                </div>
            </div>
        </div>
    )
}
