// @flow 

export const Form = ({change,onKey ,value}) => {
    return (
        <div >
            <input autoFocus onChange={change} value={value} onKeyDown={onKey} type="text" placeholder="Type todo..." className="w-96 p-3 outline-none border-[3px] mt-16 rounded-xl block" />
            <button className="mt-2 border-[1.5px] py-2 px-4 rounded-md ml-[315px]  border-[#0D6EFD] hover:bg-[#0D6EFD] hover:text-[#FFF]  transition-[0.5s]">Add</button>
        </div>
    );
};