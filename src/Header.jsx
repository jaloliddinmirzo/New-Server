// @flow 

export const Header = ({ }) => {
    return (
        <div className="flex flex-col items-center">
            <h2 className="font-semibold text-2xl mb-2"><span>15</span> April 2023</h2>
            <p className="text-md mb-6">01 : 59 : 59</p>
            <div id="overlay" className="overlay hidden"></div>
            <h1 className="text-[#0D6EFD] text-7xl mb-3">Todo list</h1>
            <span>by  <a href="https://github.com/Jaloliddin7" target="_blank" className="text-[#0D6EFD] underline ">Jaloliddin Abdutolipov</a></span>
        </div>
    );
};