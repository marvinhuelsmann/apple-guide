import {
    ArrowTrendingDownIcon,
    ArrowsRightLeftIcon,
    ArrowTrendingUpIcon,
    HandThumbUpIcon,
    HandThumbDownIcon,
    NoSymbolIcon
} from '@heroicons/react/24/solid'
import {Fragment, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'

export default function DeviceCheck(data) {
    let [isOpen, setIsOpen] = useState(false)

    const Trade = {
        EXTREM_GOOD: 'Dein neues Gerät ist um ein vielfaches besser als dein jetziges, definitiv nicht zögern, zu kaufen!',
        SUPER_GOOD: 'Dein neues Gerät hat viele neuere Funktionen als dein jetziges iPhone.',
        GOOD: 'Viele Änderungen, ein Kauf Lohnt sich!',
        MIDDLE: 'Mäßige Änderungen, man spürt einen Unterschied, dennoch ist der Umstieg nicht um bedingt sinnvoll',
        SMALL: 'Dein neues Gerät hat ein paar Neuerungen, kaufen, wenn dir dein neues Gerät zu sagt und du das entsprechende Geld dafür hast.',
        EXTRA_SMALL: 'Mit diesem Kauf wirst du nur sehr kleine Änderungen spüren, daher wird der Kauf nur empfohlen, wenn du das Gerät um bedingt brauchst und das benötigte Geld hast.',
        NO: 'Dein Gerät ist fast gleich oder das Identische was du jetzt besitzt.',
    };

    function getResults() {
        if (data != null && data.user_device != null && data.target_device != null) {
            const userDevicePoints = parseInt(data.user_device.points)
            const targetDevicePoints = parseInt(data.target_device.points)

            if (userDevicePoints > targetDevicePoints) {
                if (userDevicePoints === targetDevicePoints) {
                    return Trade.NO
                } else if (targetDevicePoints + 5 >= userDevicePoints) {
                    return Trade.EXTRA_SMALL
                } else if (targetDevicePoints + 10 >= userDevicePoints) {
                    return Trade.SMALL
                } else if (targetDevicePoints + 20 >= userDevicePoints) {
                    return Trade.MIDDLE
                } else if (targetDevicePoints + 30 >= userDevicePoints) {
                    return Trade.GOOD
                } else if (targetDevicePoints + 40 >= userDevicePoints) {
                    return Trade.SUPER_GOOD
                } else if (targetDevicePoints + 50 >= userDevicePoints) {
                    return Trade.EXTREM_GOOD
                } else {
                    return Trade.EXTREM_GOOD
                }
            } else if (userDevicePoints === targetDevicePoints) {
                return Trade.NO
            } else if (userDevicePoints + 5 >= targetDevicePoints) {
                return Trade.EXTRA_SMALL
            } else if (userDevicePoints + 10 >= targetDevicePoints) {
                return Trade.SMALL
            } else if (userDevicePoints + 20 >= targetDevicePoints) {
                return Trade.MIDDLE
            } else if (userDevicePoints + 30 >= targetDevicePoints) {
                return Trade.GOOD
            } else if (userDevicePoints + 40 >= targetDevicePoints) {
                return Trade.SUPER_GOOD
            } else if (userDevicePoints + 50 >= targetDevicePoints) {
                return Trade.EXTREM_GOOD
            } else {
                return Trade.EXTREM_GOOD
            }
        }
    }

    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }

    return (
        <>
            <div className={"text-dark text-2xl xl:mt-9 mt-7"}>
                {data && data.user_device != null && data.target_device != null &&
                    <div>
                     <span onClick={openModal} className={"mb-2"}>
                         {getResults() === Trade.EXTRA_SMALL &&
                             <ArrowTrendingDownIcon className={"h-24 text-red-500/80 mx-auto flex"}/>
                         }
                         {getResults() === Trade.SMALL &&
                             <ArrowTrendingDownIcon className={"h-24 text-red-500/70 mx-auto flex"}/>
                         }
                         {getResults() === Trade.GOOD &&
                             <ArrowTrendingUpIcon className={"h-24 text-green-500/70 mx-auto flex"}/>
                         }
                         {getResults() === Trade.SUPER_GOOD &&
                             <ArrowTrendingUpIcon className={"h-24 text-green-500/80 mx-auto flex"}/>
                         }
                         {getResults() === Trade.MIDDLE &&
                             <ArrowsRightLeftIcon className={"h-24 text-yellow-500/90 mx-auto flex"}/>
                         }
                         {getResults() === Trade.EXTREM_GOOD &&
                             <HandThumbUpIcon className={"h-24 text-green-600/80 mx-auto flex"}/>
                         }
                         {getResults() === Trade.NO &&
                             <HandThumbDownIcon className={"h-24 text-red-600/80 mx-auto flex"}/>
                         }
                     </span>
                        <div className={"w-80 pt-3 mx-auto xl:flex md:flex hidden justify-center text-center"}>
                            <p className={"break-word text-gray-700 leading-7 text-xl"}>{getResults()}</p>
                        </div>
                    </div>
                }
            </div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto transition transform bg-gradient-to-t from-blue-300 to-blue-700"
                    onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0"/>
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
              &#8203;
            </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div
                                className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    Die Unterschiede:
                                </Dialog.Title>
                                <div className="mt-2">
                                    <p className="text-xl text-gray-500">
                                        {getResults()}   </p>
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        onClick={closeModal}
                                    >
                                        Zurück
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
