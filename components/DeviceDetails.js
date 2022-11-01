export default function DeviceDetails(deviceDetails) {
    return (
        <div className={"text-dark text-3xl"}>
            {deviceDetails.deviceDetails != null &&
                <div>
                    {deviceDetails.deviceDetails.id}
                    <br/>
                    {deviceDetails.deviceDetails.points} Punkte
                </div>
            }
        </div>
    )
}
