import Slider from "react-slick";

const TestimonialData = [
    {
        id: 1,
        name: "Nafiz Kabir",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/101/101",
        delay: 0.2,
    },
    {
        id: 2,
        name: "Nadim Mahmud",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/102/102",
        delay: 0.5,
    },
    {
        id: 3,
        name: "Fahim Hossain",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/104/104",
        delay: 0.8,
    },
    {
        id: 5,
        name: "Abdur Raheem",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/103/103",
        delay: 1.1,
    },
]

const Testimonial = () => {
    const setting = {
        dots: true,
        arrow: false,
        infinite: true,
        slideToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 1000,
                setting: {
                    slideToShow: 3,
                    slideToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                setting: {
                    slideToShow: 2,
                    slideToScroll: 1,
                    initialslide: 2,
                },
            },
            {
                breakpoint: 640,
                setting: {
                    slideToShow: 1,
                    slideToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className="py-14 mb-10">
            <div className="container">
                {/* header section */}
                <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-6">
                    <h1 className="uppercase font-semibold text-orange-600">OUR TESTIMONIAL</h1>
                    <p className="font-semibold text-3xl">What Our Students Say About  Us</p>
                </div>
                {/* testimonial card section */}
                <div>
                    <Slider {...setting}>
                        {
                            TestimonialData.map((item) => {
                                return (
                                    <div key={item.id}>
                                        <div className="flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl bg-secondary/10">
                                            {/* upper section */}
                                            <div className="flex justify-start items-center gap-5">
                                                <img className="w-16 h-16 rounded-full" src={item.img} alt="" />
                                                <div>
                                                    <p className="text-xl font-bold text-black/80">{item.name}</p>
                                                    <p>{item.name}</p>
                                                </div>
                                            </div>
                                            {/* bottom section */}
                                            <div className="py-6 space-y-4">
                                                <p className="text-sm text-gray-500">{item.text}</p>
                                                <p>⭐⭐⭐⭐⭐</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Testimonial