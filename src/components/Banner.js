import React , {useEffect} from 'react';
import { AiFillGift, AiFillMessage, AiFillSound } from 'react-icons/ai';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import  {useDispatch , useSelector} from "react-redux" ; 
import {useLocation} from "react-router-dom" ; 
import {gethomepageimage} from "../redux/actions/auth" ; 
function Banner() {
    const location = useLocation() ; 
    const dispatch = useDispatch()
    const images = useSelector(state => state.auth.gethomeimage) ; 
  
    useEffect(() => {
        dispatch(gethomepageimage()) ; 
    }, [location])

    return (
        <div className="relative z-0">
            <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={5000}
            >
                <div>
                    <img style={{height:"700px"}} loading="lazy" src={images?.image1} alt=""/>
                </div>

                <div>
                    <img style={{height:"700px"}} loading="lazy" src={images?.image2} alt=""/>
                </div>

                <div>
                    <img style={{height:"700px"}} loading="lazy" src={images?.image3} alt=""/>
                </div>
            </Carousel>
            <div className="p-2 flex space-x-4 justify-between">
                <div className="flex pl-5 space-x-2 items-center ">
                    <AiFillSound className="text-yellow-400"/>
                    <h3 className="text-white">Announcements</h3>
                </div>
                <h4 className="text-white lg:text-md sm:text-sm line-clamp-2 truncate ">
                    Dear member, due to bank ( IDIB ) is maintenance, your withdrawal may take up to 24 hours before it reached to your account, please wait patiently. And for members who want to use ( IDIB ) to withdraw we advice you withdraw when the bank maintenance is done. Sorry for the inconvenience caused. If you have any question please contact our Customer Support. Thank you for your understanding.
                </h4>
            </div>
            <div className="flex justify-between bg-gray-700 p-2">
                <div className="flex space-x-2 p-1 pl-5">
                    <AiFillGift className="text-white p-1 bg-yellow-500 rounded-full items-center justify-center h-7 w-7"/>
                    <h3 className="text-white sm:text-lg">Redeem coupon</h3>
                </div>
                <div className="flex space-x-2 p-1 pr-5">
                    <AiFillMessage className="text-white p-1 bg-red-500 rounded-full items-center justify-center h-7 w-7"/>
                    <h3 className="text-white sm:text-lg">Message</h3>
                </div>
            </div>
        </div>
    )
}

export default Banner
