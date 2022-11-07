import Head from 'next/head'
import Image from 'next/image'
import {Fragment, useState} from 'react'
import {Combobox, Transition} from '@headlessui/react'
import {CheckIcon, ChevronUpDownIcon} from '@heroicons/react/20/solid'
import {getAllProducts, reloadAllProducts} from "../lib/clientApp";

import DeviceDetails from "../components/DeviceDetails";
import DeviceCheck from "../components/DeviceCheck";
import Footer from "../components/view/Footer";

const device = reloadAllProducts()

export default function Home() {
    const [selected, setSelected] = useState(device[0])
    const [query, setQuery] = useState('')

    const [targetSelected, setTargetSelected] = useState(device[0])
    const [targetQuery, setTargetQuery] = useState('')

    const filteredDevice = query === '' ? device : device.filter((type) => type.name
        .toLowerCase()
        .replace(/\s+/g, '')
        .includes(query.toLowerCase().replace(/\s+/g, '')))

    const filteredTargetDevice = targetQuery === '' ? device : device.filter((type) => type.name
        .toLowerCase()
        .replace(/\s+/g, '')
        .includes(targetQuery.toLowerCase().replace(/\s+/g, '')))

    function getDeviceName(device) {
        if (device != null) {
            return device.name
        } else {
            return ""
        }
    }

    return (
        <div>
            <Head>
                <title>Apple Guide</title>
                <meta name="description" content="Super fast image transporter"/>
                <link rel="icon" href="https://i.imgur.com/rHW4Mgp.png"/>
                <link href="https://fonts.cdnfonts.com/css/sf-pro-display" rel="stylesheet"/>
            </Head>

            <div className={"justify-center text-center xl:mt-48 mt-40"}>
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
                <div className={"xl:mb-20 mb-16"}>
                    <h1 className={"text-8xl -mt-24 font-bold text-blue-900/70 text-shadow"}>
                        Apple Guide
                    </h1>
                </div>
                <div className={"xl:grid md:grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-center mx-auto"}>
                    <div className={"text-left justifiy-center flex mx-auto"}>
                        <div className="flex mx-auto justify-center">
                            <Combobox value={selected} onChange={setSelected}>
                                <div className="relative mt-1">
                                    <div
                                        className="relative text-2xl font-medium font-medium w-full cursor-default overflow-hidden rounded-lg text-left text-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300">
                                        <Combobox.Input
                                            autoFocus={true}
                                            placeholder={"Gerät auswählen..."}
                                            className="autofocus w-full xl:text-5xl md:text-5xl text-4xl py-2 pl-5 pr-10 leading-5 bg-transparent place-holder-blue-400 text-center border w-full border-transparent focus:outline-none text-black font-bold placeholder:font-medium rounded-lg focus:ring-transparent focus:border-transparent block"
                                            displayValue={(type) => getDeviceName(type)}
                                            onChange={(event) => setQuery(event.target.value)}
                                        />
                                        {query !== '' &&
                                            <Combobox.Button
                                                className="absolute inset-y-0 right-0 flex items-center pr-2">
                                                <ChevronUpDownIcon
                                                    className="h-5 w-5 text-gray-400"
                                                    aria-hidden="true"
                                                />
                                            </Combobox.Button>
                                        }
                                    </div>
                                    {query !== '' &&
                                        <Transition
                                            as={Fragment}
                                            leave="transition ease-in duration-100"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                            afterLeave={() => setQuery('')}
                                        >
                                            <Combobox.Options
                                                className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                {filteredDevice.length === 0 && query !== '' ? (
                                                    <div
                                                        className="relative cursor-default select-none py-2 text-xl px-4 text-gray-700">
                                                        Kein <span className={"font-bold"}>Gerät</span> gefunden.
                                                    </div>) : (filteredDevice.map((type) => (<Combobox.Option
                                                    key={type.id}
                                                    className={({active}) => `relative text-xl cursor-pointer select-none py-2 pl-10 pr-4 ${active ? 'bg-black text-white font-bold' : 'text-gray-900'}`}
                                                    value={type}
                                                >
                                                    {({selected, active}) => (<>
                                <span
                                    className={`block truncate flex mx-auto ${selected ? 'font-medium' : 'font-normal'}`}
                                >
                                    {type.name}
                                </span>

                                                        {selected ? (<span
                                                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'}`}>
                                    <CheckIcon className="h-5 w-5" aria-hidden="true"/>
                                </span>) : null}
                                                    </>)}
                                                </Combobox.Option>)))}
                                            </Combobox.Options>
                                        </Transition>
                                    }
                                </div>
                            </Combobox>
                        </div>
                    </div>
                    <div className={"xl:hidden md:hidden block"}>
                        {query === '' &&
                            <div>
                                <div
                                    className={"text-left justifiy-center xl:flex md:flex hidden mx-auto xl:mt-0 md:mt-0 -mt-5"}>
                                    <div className="flex mx-auto justify-center">
                                        <Combobox value={targetSelected} onChange={setTargetSelected}>
                                            <div className="relative mt-1">
                                                <div
                                                    className="relative text-2xl font-medium font-medium w-full cursor-default overflow-hidden rounded-lg text-left text-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300">
                                                    <Combobox.Input
                                                        autoFocus={true}
                                                        placeholder={"Gerät auswählen..."}
                                                        className="autofocus w-full py-2 pl-5 pr-10 xl:text-5xl md:text-5xl text-4xl leading-5 bg-transparent place-holder-blue-400 text-center border w-full border-transparent focus:outline-none text-black font-bold placeholder:font-medium rounded-lg focus:ring-transparent focus:border-transparent block"
                                                        displayValue={(type) => getDeviceName(type)}
                                                        onChange={(event) => setTargetQuery(event.target.value)}
                                                    />
                                                    {targetQuery !== '' &&
                                                        <Combobox.Button
                                                            className="absolute inset-y-0 right-0 flex items-center pr-2">
                                                            <ChevronUpDownIcon
                                                                className="h-5 w-5 text-gray-400"
                                                                aria-hidden="true"
                                                            />
                                                        </Combobox.Button>
                                                    }
                                                </div>
                                                {targetQuery !== '' &&
                                                    <Transition
                                                        as={Fragment}
                                                        leave="transition ease-in duration-100"
                                                        leaveFrom="opacity-100"
                                                        leaveTo="opacity-0"
                                                        afterLeave={() => setTargetQuery('')}
                                                    >
                                                        <Combobox.Options
                                                            className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                            {filteredTargetDevice.length === 0 && targetQuery !== '' ? (
                                                                <div
                                                                    className="relative cursor-default select-none py-2 text-xl px-4 text-gray-700">
                                                                    Kein <span
                                                                    className={"font-bold"}>Gerät</span> gefunden.
                                                                </div>) : (filteredTargetDevice.map((type) => (
                                                                <Combobox.Option
                                                                    key={type.id}
                                                                    className={({active}) => `relative text-xl cursor-pointer select-none py-2 pl-10 pr-4 ${active ? 'bg-black text-white font-bold' : 'text-gray-900'}`}
                                                                    value={type}
                                                                >
                                                                    {({targetSelected, active}) => (<>
                                <span
                                    className={`block truncate flex mx-auto ${targetSelected ? 'font-medium' : 'font-normal'}`}
                                >
                                    {type.name}
                                </span>

                                                                        {targetSelected ? (<span
                                                                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'}`}>
                                    <CheckIcon className="h-5 w-5" aria-hidden="true"/>
                                </span>) : null}
                                                                    </>)}
                                                                </Combobox.Option>)))}
                                                        </Combobox.Options>
                                                    </Transition>
                                                }
                                            </div>
                                        </Combobox>
                                    </div>
                                </div>
                                <div
                                    className={"text-left justifiy-center xl:hidden md:hidden flex mx-auto xl:mt-0 md:mt-0 -mt-5"}>
                                    {selected != null &&
                                        <div className="flex mx-auto justify-center">
                                            <Combobox value={targetSelected} onChange={setTargetSelected}>
                                                <div className="relative mt-1">
                                                    <div
                                                        className="relative text-2xl font-medium font-medium w-full cursor-default overflow-hidden rounded-lg text-left text-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300">
                                                        <Combobox.Input
                                                            autoFocus={true}
                                                            placeholder={"Gerät auswählen..."}
                                                            className="autofocus w-full py-2 pl-5 pr-10 xl:text-5xl md:text-5xl text-4xl leading-5 bg-transparent place-holder-blue-400 text-center border w-full border-transparent focus:outline-none text-black font-bold placeholder:font-medium rounded-lg focus:ring-transparent focus:border-transparent block"
                                                            displayValue={(type) => getDeviceName(type)}
                                                            onChange={(event) => setTargetQuery(event.target.value)}
                                                        />
                                                        {targetQuery !== '' &&
                                                            <Combobox.Button
                                                                className="absolute inset-y-0 right-0 flex items-center pr-2">
                                                                <ChevronUpDownIcon
                                                                    className="h-5 w-5 text-gray-400"
                                                                    aria-hidden="true"
                                                                />
                                                            </Combobox.Button>
                                                        }
                                                    </div>
                                                    {targetQuery !== '' &&
                                                        <Transition
                                                            as={Fragment}
                                                            leave="transition ease-in duration-100"
                                                            leaveFrom="opacity-100"
                                                            leaveTo="opacity-0"
                                                            afterLeave={() => setTargetQuery('')}
                                                        >
                                                            <Combobox.Options
                                                                className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                {filteredTargetDevice.length === 0 && targetQuery !== '' ? (
                                                                    <div
                                                                        className="relative cursor-default select-none py-2 text-xl px-4 text-gray-700">
                                                                        Kein <span
                                                                        className={"font-bold"}>Gerät</span> gefunden.
                                                                    </div>) : (filteredTargetDevice.map((type) => (
                                                                    <Combobox.Option
                                                                        key={type.id}
                                                                        className={({active}) => `relative text-xl cursor-pointer select-none py-2 pl-10 pr-4 ${active ? 'bg-black text-white font-bold' : 'text-gray-900'}`}
                                                                        value={type}
                                                                    >
                                                                        {({targetSelected, active}) => (<>
                                <span
                                    className={`block truncate flex mx-auto ${targetSelected ? 'font-medium' : 'font-normal'}`}
                                >
                                    {type.name}
                                </span>

                                                                            {targetSelected ? (<span
                                                                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'}`}>
                                    <CheckIcon className="h-5 w-5" aria-hidden="true"/>
                                </span>) : null}
                                                                        </>)}
                                                                    </Combobox.Option>)))}
                                                            </Combobox.Options>
                                                        </Transition>
                                                    }
                                                </div>
                                            </Combobox>
                                        </div>
                                    }
                                </div>
                            </div>
                        }
                    </div>
                    <div className={"xl:block md:block hidden"}>
                        <div
                            className={"text-left justifiy-center xl:flex md:flex hidden mx-auto xl:mt-0 md:mt-0 -mt-5"}>
                            <div className="flex mx-auto justify-center">
                                <Combobox value={targetSelected} onChange={setTargetSelected}>
                                    <div className="relative mt-1">
                                        <div
                                            className="relative text-2xl font-medium font-medium w-full cursor-default overflow-hidden rounded-lg text-left text-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300">
                                            <Combobox.Input
                                                autoFocus={true}
                                                placeholder={"Gerät auswählen..."}
                                                className="autofocus w-full py-2 pl-5 pr-10 xl:text-5xl md:text-5xl text-4xl leading-5 bg-transparent place-holder-blue-400 text-center border w-full border-transparent focus:outline-none text-black font-bold placeholder:font-medium rounded-lg focus:ring-transparent focus:border-transparent block"
                                                displayValue={(type) => getDeviceName(type)}
                                                onChange={(event) => setTargetQuery(event.target.value)}
                                            />
                                            {targetQuery !== '' &&
                                                <Combobox.Button
                                                    className="absolute inset-y-0 right-0 flex items-center pr-2">
                                                    <ChevronUpDownIcon
                                                        className="h-5 w-5 text-gray-400"
                                                        aria-hidden="true"
                                                    />
                                                </Combobox.Button>
                                            }
                                        </div>
                                        {targetQuery !== '' &&
                                            <Transition
                                                as={Fragment}
                                                leave="transition ease-in duration-100"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                                afterLeave={() => setTargetQuery('')}
                                            >
                                                <Combobox.Options
                                                    className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                    {filteredTargetDevice.length === 0 && targetQuery !== '' ? (
                                                        <div
                                                            className="relative cursor-default select-none py-2 text-xl px-4 text-gray-700">
                                                            Kein <span
                                                            className={"font-bold"}>Gerät</span> gefunden.
                                                        </div>) : (filteredTargetDevice.map((type) => (
                                                        <Combobox.Option
                                                            key={type.id}
                                                            className={({active}) => `relative text-xl cursor-pointer select-none py-2 pl-10 pr-4 ${active ? 'bg-black text-white font-bold' : 'text-gray-900'}`}
                                                            value={type}
                                                        >
                                                            {({targetSelected, active}) => (<>
                                <span
                                    className={`block truncate flex mx-auto ${targetSelected ? 'font-medium' : 'font-normal'}`}
                                >
                                    {type.name}
                                </span>

                                                                {targetSelected ? (<span
                                                                    className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'}`}>
                                    <CheckIcon className="h-5 w-5" aria-hidden="true"/>
                                </span>) : null}
                                                            </>)}
                                                        </Combobox.Option>)))}
                                                </Combobox.Options>
                                            </Transition>
                                        }
                                    </div>
                                </Combobox>
                            </div>
                        </div>
                        <div
                            className={"text-left justifiy-center xl:hidden md:hidden flex mx-auto xl:mt-0 md:mt-0 -mt-5"}>
                            {selected != null &&
                                <div className="flex mx-auto justify-center">
                                    <Combobox value={targetSelected} onChange={setTargetSelected}>
                                        <div className="relative mt-1">
                                            <div
                                                className="relative text-2xl font-medium font-medium w-full cursor-default overflow-hidden rounded-lg text-left text-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300">
                                                <Combobox.Input
                                                    autoFocus={true}
                                                    placeholder={"Gerät auswählen..."}
                                                    className="autofocus w-full py-2 pl-5 pr-10 xl:text-5xl md:text-5xl text-4xl leading-5 bg-transparent place-holder-blue-400 text-center border w-full border-transparent focus:outline-none text-black font-bold placeholder:font-medium rounded-lg focus:ring-transparent focus:border-transparent block"
                                                    displayValue={(type) => getDeviceName(type)}
                                                    onChange={(event) => setTargetQuery(event.target.value)}
                                                />
                                                {targetQuery !== '' &&
                                                    <Combobox.Button
                                                        className="absolute inset-y-0 right-0 flex items-center pr-2">
                                                        <ChevronUpDownIcon
                                                            className="h-5 w-5 text-gray-400"
                                                            aria-hidden="true"
                                                        />
                                                    </Combobox.Button>
                                                }
                                            </div>
                                            {targetQuery !== '' &&
                                                <Transition
                                                    as={Fragment}
                                                    leave="transition ease-in duration-100"
                                                    leaveFrom="opacity-100"
                                                    leaveTo="opacity-0"
                                                    afterLeave={() => setTargetQuery('')}
                                                >
                                                    <Combobox.Options
                                                        className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                        {filteredTargetDevice.length === 0 && targetQuery !== '' ? (
                                                            <div
                                                                className="relative cursor-default select-none py-2 text-xl px-4 text-gray-700">
                                                                Kein <span
                                                                className={"font-bold"}>Gerät</span> gefunden.
                                                            </div>) : (filteredTargetDevice.map((type) => (
                                                            <Combobox.Option
                                                                key={type.id}
                                                                className={({active}) => `relative text-xl cursor-pointer select-none py-2 pl-10 pr-4 ${active ? 'bg-black text-white font-bold' : 'text-gray-900'}`}
                                                                value={type}
                                                            >
                                                                {({targetSelected, active}) => (<>
                                <span
                                    className={`block truncate flex mx-auto ${targetSelected ? 'font-medium' : 'font-normal'}`}
                                >
                                    {type.name}
                                </span>

                                                                    {targetSelected ? (<span
                                                                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'}`}>
                                    <CheckIcon className="h-5 w-5" aria-hidden="true"/>
                                </span>) : null}
                                                                </>)}
                                                            </Combobox.Option>)))}
                                                    </Combobox.Options>
                                                </Transition>
                                            }
                                        </div>
                                    </Combobox>
                                </div>
                            }
                        </div>
                    </div>
                    <DeviceDetails deviceDetails={selected}/>
                    <DeviceDetails deviceDetails={targetSelected}/>
                </div>
                <DeviceCheck user_device={selected} target_device={targetSelected}/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>)
}
