export default function DeviceDetails(deviceDetails) {
    return (
        <div className={"text-dark text-3xl"}>
            {deviceDetails.deviceDetails != null &&
                <div>
                    {deviceDetails.deviceDetails.points}<span className={"text-xl"}>/100 Punkten</span>
                </div>
            }
        </div>
    )
}
