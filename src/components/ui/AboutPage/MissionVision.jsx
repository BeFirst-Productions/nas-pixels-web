import Image from "next/image";
import Container from "../../common/Layout/Container";

export default function MissionVisionSection() {
    return (
        <section className="relative w-full   py-10 md:py-20">
            <div className="hidden md:block absolute inset-y-0 left-0 w-[90px] 
    bg-[linear-gradient(180deg,rgba(112,200,121,0.5)_50%,rgba(112,200,121,0.15)_100%,rgba(112,200,121,0.5)_100%)]
    blur-2xl pointer-events-none">
            </div>

            {/* RIGHT GLOW */}
            <div className="hidden md:block absolute inset-y-0 right-0 w-[90px] 
    bg-[linear-gradient(180deg,rgba(112,200,121,0.5)_50%,rgba(112,200,121,0.15)_100%,rgba(112,200,121,0.5)_100%)]
    blur-2xl pointer-events-none">
            </div>


            <Container>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* MISSION CARD */}
                    <div className="relative rounded-2xl  ">
                        <div className=" rounded-2xl   h-full flex flex-col gap-5">

                            <div className="flex items-center gap-3">
                                <h2 className=" font-host inline-block text-3xl md:text-4xl xl:text-[2.625rem] font-semibold  py-1  rounded-full ">
                                    Mission
                                </h2>

                                <div className="relative -left-[8%] lg:-left-[5%]  flex items-center justify-center w-11 h-11 md:w-12 md:h-12 lg:w-[52px] lg:h-[52px] rounded-full flex-shrink-0">
                                    <svg
                                        className="absolute inset-0 w-full h-full -rotate-45 transition-all duration-300"
                                        viewBox="0 0 52 52"
                                        style={{ opacity: 0.7 }}
                                    >
                                        <defs>
                                            <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" style={{ stopColor: "#0000", stopOpacity: 1 }} />
                                                <stop offset="100%" style={{ stopColor: "#70C879", stopOpacity: 1 }} />
                                            </linearGradient>
                                        </defs>
                                        <circle
                                            cx="26"
                                            cy="26"
                                            r="25"
                                            fill="none"
                                            stroke="url(#borderGradient)"
                                            strokeWidth="1.5"
                                        />
                                    </svg>
                                </div>
                            </div>

                            <p className=" text-lg md:text-xl max-w-xl  font-medium leading-relaxed  py-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
                                turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
                                nec fringilla accumsan. Maecenas eget condimentum velit, sit amet
                                feugiat lectus.
                            </p>

                            <div className="w-full flex justify-start">
                                <div className="relative w-full lg:w-[60%] h-64 rounded-xl overflow-hidden group">
                                    <div className="absolute inset-0 rounded-xl border-2 border-dashed border-[#70C879] pointer-events-none"></div>

                                    <Image
                                        src="/assets/images/mission_vision/01.png"
                                        alt="Mission"
                                        fill
                                        className="object-cover group-hover:scale-105 p-4 rounded-3xl transition-transform duration-500"
                                    />
                                </div>

                            </div>

                        </div>
                    </div>

                    {/* VISION CARD */}
                    <div className="relative rounded-2xl  ">
                        <div className=" rounded-2xl  h-full flex flex-col gap-5">

                            <div className="flex items-center gap-3">
                                <h2 className=" font-host inline-block text-3xl md:text-4xl xl:text-[2.625rem] font-semibold  py-1  rounded-full ">
                                    Vision
                                </h2>

                                <div className="relative -left-[8%] lg:-left-[5%]  flex items-center justify-center w-11 h-11 md:w-12 md:h-12 lg:w-[52px] lg:h-[52px] rounded-full flex-shrink-0">
                                    <svg
                                        className="absolute inset-0 w-full h-full -rotate-45 transition-all duration-300"
                                        viewBox="0 0 52 52"
                                        style={{ opacity: 0.7 }}
                                    >
                                        <defs>
                                            <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" style={{ stopColor: "#0000", stopOpacity: 1 }} />
                                                <stop offset="100%" style={{ stopColor: "#70C879", stopOpacity: 1 }} />
                                            </linearGradient>
                                        </defs>
                                        <circle
                                            cx="26"
                                            cy="26"
                                            r="25"
                                            fill="none"
                                            stroke="url(#borderGradient)"
                                            strokeWidth="1.5"
                                        />
                                    </svg>
                                </div>
                            </div>

                            <p className=" text-lg md:text-xl max-w-xl font-medium leading-relaxed  py-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
                                turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
                                nec fringilla accumsan. Maecenas eget condimentum velit, sit amet
                                feugiat lectus.
                            </p>

                            <div className="w-full flex justify-start">
                                <div className="relative w-full lg:w-[60%] h-64 rounded-xl overflow-hidden group">
                                    <div className="absolute inset-0 rounded-xl border-2 border-dashed border-[#70C879] pointer-events-none"></div>

                                    <Image
                                        src="/assets/images/mission_vision/01.png"
                                        alt="Mission"
                                        fill
                                        className="object-cover group-hover:scale-105 p-4 rounded-3xl transition-transform duration-500"
                                    />
                                </div>

                            </div>
 
                        </div>

                    </div>


                </div>
            </Container>
            <div className=" hidden lg:flex">
                <div className="w-full  flex  justify-start">
                    <div className="relative w-[80%]  h-96 rounded-xl overflow-hidden group">

                        <Image
                            src="/assets/images/mission_vision/bg02.png"
                            alt="Mission"
                            fill
                            className="object-cover   rounded-3xl transition-transform duration-500"
                        />
                    </div>

                </div>
                <div className="w-full flex justify-end">
                    <div className="relative w-[80%]  h-96 rounded-xl overflow-hidden group">

                        <Image
                            src="/assets/images/mission_vision/bg01.png"
                            alt="Mission"
                            fill
                            className="object-cover  rounded-3xl transition-transform duration-500"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
