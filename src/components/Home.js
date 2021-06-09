import Banner from "./Banner";
import Body from "./Body";

function Home({handleLogout}) {
    return (
        <div className="bg-gray-800 h-auto overflow-x-hidden">
            <Banner/>
            <Body/>
        </div>
    )
}

export default Home
