import Image from "next/image";

export default function Hero () {
    return (
        <div className="carousel">
        <div id="slide1" className="carousel-item relative w-full">
          <Image
            src="/images/img2.jpg"
            alt="img1"
            width={400}
            height={400}
            className="w-full h-[400px]" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <Image
            src="/images/img3.jpg"
            alt="img2"
            width={400}
            height={400}
            className="w-[100%] h-[400px]" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <Image
            src="/images/img1.jpg"
            alt="img3"
            width={400}
            height={400}
            className="w-[100%] h-[400px]" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    )
}