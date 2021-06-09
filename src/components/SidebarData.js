import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import { IoMdPaper } from 'react-icons/io';

export const SidebarData = [
    {
        title: "Bank Account",
        path:"/bankaccount",
        icon: <AiIcons.AiFillBank/>,
        cName:"pt-8 pr-10 pb-8 pl-10 flex justify-start items-center h-10 list-none text-white text-md rounded hover:bg-blue-400"
    },
    {
        title: "Deposit",
        path:"/deposit",
        icon: <AiIcons.AiFillDollarCircle/>,
        cName:"pt-8 pr-q0 pb-8 pl-10 flex justify-start items-center h-10 list-none text-white text-md rounded hover:bg-blue-400"
    },
    {
        title: "Withdraw",
        path:"/withdraw",
        icon: <AiIcons.AiFillWallet/>,
        cName:"pt-8 pr-10 pb-8 pl-10 flex justify-start items-center h-10 list-none text-white text-md rounded hover:bg-blue-400"
    },
    {
        title: "Message",
        path:"/message",
        icon: <FaIcons.FaEnvelopeOpenText/>,
        cName:"pt-8 pr-10 pb-8 pl-10 flex justify-start items-center h-10 list-none text-white text-md rounded hover:bg-blue-400"
    },
    {
        title: "Favorite",
        path:"/favorite",
        icon: <AiIcons.AiFillHeart/>,
        cName:"pt-8 pr-10 pb-8 pl-10 flex justify-start items-center h-10 list-none text-white text-md rounded hover:bg-blue-400"
    },
    {
        title: "Complain",
        path:"/complain",
        icon: <AiIcons.AiFillCustomerService/>,
        cName:"pt-8 pr-10 pb-8 pl-10 flex justify-start items-center h-10 list-none text-white text-md rounded hover:bg-blue-400"
    },
    {
        title: "Help Center",
        path:"/help",
        icon: <AiIcons.AiFillQuestionCircle/>,
        cName:"pt-8 pr-10 pb-8 pl-10 flex justify-start items-center h-10 list-none text-white text-md rounded hover:bg-blue-400"
    },
    {
        title: "Terms And Condition",
        path:"/terms",
        icon: <IoMdPaper/>,
        cName:"pt-8 pr-10 pb-8 pl-10 flex justify-start items-center h-10 list-none text-white text-md rounded hover:bg-blue-400"
    },
    {
        title: "About Us",
        path:"/about",
        icon: <IoMdPaper/>,
        cName:"pt-8 pr-10 pb-8 pl-10 flex justify-start items-center h-10 list-none text-white text-md rounded hover:bg-blue-400"
    },
    {
        title: "Refund/Cancellation",
        path:"/refund",
        icon: <AiIcons.AiFillExclamationCircle/>,
        cName:"pt-8 pr-10 pb-8 pl-10 flex justify-start items-center h-10 list-none text-white text-md rounded hover:bg-blue-400"
    },
    {
        title: "Privacy Policy",
        path:"/privacypolicy",
        icon: <IoMdPaper/>,
        cName:"pt-8 pr-10 pb-8 pl-10 flex justify-start items-center h-10 list-none text-white text-md rounded hover:bg-blue-400"
    },
    {
        title: "Logout",
        path:"/login",
        icon: <AiIcons.AiOutlineLogout/>,
        cName:"pt-8 pr-10 pb-8 pl-10 flex justify-start items-center h-10 list-none text-white text-md rounded hover:bg-blue-400"
    },
];