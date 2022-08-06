import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactStar from "react-rating-stars-component";

function Testimonial() {

    const settings = {
        dots: true,
        infinite: true,
        sliderToShow: 1,
        sliderToScroll:1,
        autoplay: true,
        arrows:true,
        appendDots: (dots) => {
            return <ul style={{ margin: "0px",bottom:"-40px" }}>{dots}</ul>
        }
    }

    return (
        <div className='relative pt-10 pb-16 overflow-hidden font-poppins'>
            <p className='text-center text-blue-500'>Testimonial</p>
            <h1 className='text-center text-3xl pb-20 md:text-4xl'>Client say something</h1>
            <div className='max-w-5xl px-4 m-auto extra_md:px-0'>
                <Slider {...settings}>
                    <div>
                        <div className='flex flex-col top w-full md:flex-row'>
                            <div className='w-full px-0 flex items-start my-5 md:my-0 md:px-5 md:w-1/2'>
                                <img className='rounded-t-3xl rounded-l-3xl' src="./img/client/3.jpg" alt="" />
                                <div className='pl-4'>
                                    <div className='flex w-full justify-between items-center'>
                                        <p className='font-medium'>Abraham linkon</p>
                                        <ReactStar
                                            edit={false}
                                            color={"#ddd"}
                                            activeColor={"gold"}
                                            size={18}
                                            isHalf={true}
                                            value={4.5}
                                        />
                                    </div>
                                    <p>web developer</p>
                                    <p className='pt-5 text-sm text-gray-700'>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using
                                    </p>
                                </div>
                            </div>
                            <div className='w-full px-0 flex items-start my-5 md:my-0 md:px-5 md:w-1/2'>
                                <img className='rounded-t-3xl rounded-l-3xl' src="./img/client/4.jpg" alt="" />
                                <div className='pl-4'>
                                    <div className='flex w-full justify-between items-center'>
                                        <p className='font-medium'>Abraham linkon</p>
                                        <ReactStar
                                            edit={false}
                                            color={"#ddd"}
                                            activeColor={"gold"}
                                            size={18}
                                            isHalf={true}
                                            value={4.5}
                                        />
                                    </div>
                                    <p>web developer</p>
                                    <p className='pt-5 text-sm text-gray-700'>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 2 */}
                    <div>
                        <div className='flex flex-col top w-full md:flex-row'>
                            <div className='w-full px-0 flex items-start my-5 md:my-0 md:px-5 md:w-1/2'>
                                <img className='rounded-t-3xl rounded-l-3xl' src="./img/client/1.jpg" alt="" />
                                <div className='pl-4'>
                                    <div className='flex w-full justify-between items-center'>
                                        <p className='font-medium'>Abraham linkon</p>
                                        <ReactStar
                                            edit={false}
                                            color={"#ddd"}
                                            activeColor={"gold"}
                                            size={18}
                                            isHalf={true}
                                            value={4.5}
                                        />
                                    </div>
                                    <p>web developer</p>
                                    <p className='pt-5 text-sm text-gray-700'>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using
                                    </p>
                                </div>
                            </div>
                            <div className='w-full px-0 flex items-start my-5 md:my-0 md:px-5 md:w-1/2'>
                                <img className='rounded-t-3xl rounded-l-3xl' src="./img/client/2.jpg" alt="" />
                                <div className='pl-4'>
                                    <div className='flex w-full justify-between items-center'>
                                        <p className='font-medium'>Abraham linkon</p>
                                        <ReactStar
                                            edit={false}
                                            color={"#ddd"}
                                            activeColor={"gold"}
                                            size={18}
                                            isHalf={true}
                                            value={4.5}
                                        />
                                    </div>
                                    <p>web developer</p>
                                    <p className='pt-5 text-sm text-gray-700'>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Testimonial;