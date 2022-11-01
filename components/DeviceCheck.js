export default function DeviceCheck(data) {

    const Trade = {
        EXTREM_GOOD: 'Dein neues Gerät ist um ein vielfaches besser als dein jetziges, definitiv nicht zögern, zu kaufen!',
        SUPER_GOOD: 'Dein neues Gerät hat viele neuere Funktionen als dein jetziges iPhone.',
        GOOD: 'Viele Änderungen, ein Kauf Lohnt sich!',
        MIDDLE: 'Mäßige Änderungen, man spürt einen Unterschied, dennoch ist der Umstieg nicht um bedingt sinnvoll',
        SMALL: 'Dein neues Gerät hat ein paar Neuerungen, kaufen, wenn dir dein neues Gerät zu sagt und du das entsprechende Geld dafür hast.',
        EXTRA_SMALL: 'Mit diesem Kauf wirst du nur sehr kleine Änderungen spüren, daher wird der Kauf nur empfohlen, wenn du das Gerät um bedingt brauchst und das benötigte Geld hast.',
        NO: 'Dein Gerät ist fast gleich oder das Identische was du jetzt besitzt.',
        TARGET_IS_OLDER: "Dein altes Gerät ist neuer als dein ausgewähltes neues iPhone?"
    };
    function getResults() {
        console.log(data)
        if (data != null && data.user_device != null && data.target_device != null) {
            const userDevicePoints = parseInt(data.user_device.points)
            const targetDevicePoints = parseInt(data.target_device.points)

            if (userDevicePoints > targetDevicePoints) {
                return Trade.TARGET_IS_OLDER
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

    return (
        <div className={"text-dark text-3xl xl:mt-12 mt-7"}>
            {data &&
                <div className={"w-80 mx-auto flex justify-center text-center"}>
                    <p className={"break-word text-gray-700 leading-7"}>{getResults()}</p>
                </div>
            }
        </div>
    )
}