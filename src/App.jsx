import Li from "./li";
import edit from "./assets/edit.svg"
import delet from "./assets/delete.svg"
import Modal from "./Modal";




export default function App() {
  return (
    <div className="flex flex-col items-center py-10">
      <h2 className="font-semibold text-2xl mb-2"><span>15</span> April 2023</h2>
      <p className="text-md mb-6">01 : 59 : 59</p>
      <h1 className="text-[#0D6EFD] text-7xl mb-3">Todo list</h1>
      <span>by  <a href="https://github.com/Jaloliddin7" target="_blank" className="text-[#0D6EFD] underline ">Jaloliddin Abdutolipov</a></span>
      <form className="mt-16 ">
        <input type="text" placeholder="Type todo..." className="w-96 p-3 outline-none border-[3px] rounded-xl block"/>
        <button  className="mt-2 border-[1.5px] py-2 px-4 rounded-md ml-[315px]  border-[#0D6EFD] hover:bg-[#0D6EFD] hover:text-[#FFF]  transition-[0.5s] " value={"Add"}>Add</button>
      </form>

      <ul className="list">
        <Li key={1} src={edit} src2={delet} text={"dvd"}></Li>
      </ul>
      <Modal></Modal>
      <div id="overlay" class="overlay "></div>
    </div>
  )
}