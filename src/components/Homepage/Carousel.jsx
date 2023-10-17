import React from "react";
import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import carousalImg1 from "../../Assets/AmericanEagle_Images/carosualImage/CarousalImg1.png";
import carousalImg2 from "../../Assets/AmericanEagle_Images/carosualImage/CarousalImg2.png";
import carousalImg3 from "../../Assets/AmericanEagle_Images/carosualImage/CarousalImg3.png";
import carousalImg4 from "../../Assets/AmericanEagle_Images/carosualImage/CarousalImg4.png";
import carousalImg5 from "../../Assets/AmericanEagle_Images/carosualImage/CarousalImg5.png";
import carousalImg6 from "../../Assets/AmericanEagle_Images/carosualImage/CarousalImg6.png";
import carousalImg7 from "../../Assets/AmericanEagle_Images/carosualImage/CarousalImg7.png";

// Settings for the slider
const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
};

export default function Carousel() {
   
    // change the state
    const [slider, setSlider] = React.useState(null);

  

    // These are the images used in the slide
    const cards = [
        carousalImg1,
        carousalImg2,
        carousalImg3,
        carousalImg4,
        carousalImg5,
        carousalImg6,
        carousalImg7,
    ];

    return (
        <Box
            position={"relative"}
            height={"570px"}
            width={"full"}
            overflow={"hidden"}
            zIndex={"hide"}
        >
            {/* CSS files for react-slick */}
            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
          
            {/* Slider */}
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {cards.map((url, index) => (
                    <Box
                        key={index}
                        height={"527px"}
                        position="relative"
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        backgroundSize="cover"
                        backgroundImage={url}
                        _hover={{ cursor: "pointer" }}
                    />
                ))}
            </Slider>
        </Box>
    );
}
