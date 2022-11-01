import db, {getProduct, updateProductViews} from "../../lib/clientApp";
import {useCollection} from "react-firebase-hooks/firestore";
import {useState} from "react";

export default function DashboardPanel() {
    const [lastUpdate, setLastUpdate] = useState('')

    const [products] = useCollection(
        db.collection('products').orderBy('name'),
        {}
    );

    const registerNewDevice = async (e) => {
        e.preventDefault();
        try {
            db.collection('products').doc().set({
                name: e.target.name.value,
                points: e.target.point.value,
            }).then(r => console.log(r))

            e.target.name.value = ""
            e.target.point.value = ""
        } catch (error) {
            console.log(error)
        }
    }

    const updateDevices = async (e) => {
        e.preventDefault();
        try {
            setLastUpdate(e.target.id.value)
            const product = await db.collection('products').doc(e.target.id.value)
            await product.update({
                name: e.target.name.value,
                points: e.target.point.value,
            })
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }
    return (
        <div>
            <div>
                <h2 className={"text-4xl font-bold p-3"}>
                    Dashboard Panel
                </h2>
            </div>

            <div>
                <form className={"space-x-2 pl-4"} onSubmit={registerNewDevice}>
                    <input
                        className={"border border-slate-300 rounded-md p-2 font-bold ring-1 ring-black placeholder-black placeholder:text-slate-400"}
                        id={"name"}
                        placeholder={"Name"}/>
                    <input
                        className={"border border-slate-300 rounded-md p-2 font-bold ring-1 ring-black placeholder-black placeholder:text-slate-400"}
                        id={"point"}
                        placeholder={"Punkte"}/>
                    <button type={"submit"} className={"font-bold uppercase"}>
                        REGISTER
                    </button>
                </form>
            </div>

            {products && products.docs.map((product) => (
                <div key={product.id} className="group p-4 pt-5 relative">
                    <h1 className={"text-xl"}>Produkt: <span className={"font-bold text-xl"}>{product.id}</span></h1>
                    <div className={"pt-1 pb-5 text-2xl"}>
                        <form className={"space-x-2"} onSubmit={updateDevices}>
                            <input
                                className={"border border-slate-300 rounded-md p-2 font-bold ring-1 ring-black placeholder-black placeholder:text-slate-400"}
                                id={"id"}
                                value={product.id}/>
                            <input
                                className={"border border-slate-300 rounded-md p-2 font-bold ring-1 ring-black placeholder-black placeholder:text-slate-400"}
                                id={"name"}
                                defaultValue={String(product.data()['name'])}/>
                            <input
                                className={"border border-slate-300 rounded-md p-2 font-bold ring-1 ring-black placeholder-black placeholder:text-slate-400"}
                                id={"point"}
                                defaultValue={String(product.data()['points'])}/>
                            <button type={"submit"} className={"font-bold uppercase"}>
                                UPDATE
                            </button>
                        </form>
                        {lastUpdate === product.id &&
                            <span className={"text-green-600/50 text-sm font-medium"}>
                            Erfolgreiche Aktualisierung!
                        </span>
                        }
                    </div>
                </div>
            ))}

        </div>
    )
}
