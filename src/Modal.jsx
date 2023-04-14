import close from "./assets/close.svg"


export default function Modal() {
    return (
        <div className="modal-todo rounded hidden">
            <div className="card">
                <div className=" flex justify-between align-items-center text-xl font-semibold bg-[rgba(0,0,0,0.05)] p-3 rounded">
                    <h5>Change This Todo</h5>
                    <img id="close" src={close} alt="" width="25" height="25" classNameName="cursor-pointer" />
                </div>
                <div className="card-body">
                    <form classNameName="mt-5  p-5">
                        <input type="text" placeholder="Type todo..." classNameName="w-96 p-2 outline-none border-[3px] rounded-xl block" />
                        <button classNameName="mt-4 border-[1.5px] py-2 px-4 rounded-md ml-[315px]  border-[#198154] hover:bg-[#198154] hover:text-[#FFF]  transition-[0.5s] " value={"Add"}>Save Changes </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
