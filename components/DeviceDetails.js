export default function DeviceDetails(deviceDetails, device) {
    return (
        <div className={"text-dark text-3xl"}>
            {deviceDetails.deviceDetails != null && deviceDetails.deviceDetails !== '' &&
                <>
                    <div className={"xl:block md:block hidden"}>
                        {deviceDetails.deviceDetails.points}<span className={"text-xl"}>/100 Punkten</span>
                    </div>
                    <div className={"xl:hidden md:hidden block mx-center"}>
                        {deviceDetails.deviceDetails.points}<span className={"text-xl"}>/100 beim <span className={"font-light"}>{deviceDetails.deviceDetails.name}</span></span>
                    </div>
                </>
            }
        </div>
    )
}
