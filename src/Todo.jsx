import edit from "./assets/edit.svg"
import delet from "./assets/delete.svg"

export default function Todo({ text, deleteOdam ,id , editFunc}) {
    return (
        <li className="w-[500px] flex px-4 items-center py-2 border-solid rounded-md mt-4 border-[2.5px] text-xl font-semibold mr-2 justify-between text-start hover:bg-slate-100 ease-in ">{text}
            <div className="flex">
                <img src={edit}  onClick={()=> editFunc(id)} className="hover:scale-125" alt="" width={35} height={40} />
                <img src={delet} onClick={()=> deleteOdam(id)} className="hover:scale-125" alt="" width={35} height={40} />
            </div>
        </li>
    )
}
