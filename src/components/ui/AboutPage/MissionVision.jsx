"use client";
import Image from "next/image";
import Container from "../../common/Layout/Container";
import PillerAnimation from "@/components/animation/PillerAnimation";
import SectionTitle from "@/components/common/Headers/SectionTitle";
import { useLanguage } from "@/context/LanguageContext";

export default function MissionVisionSection() {
    const { t } = useLanguage();
    return (
        <section className="relative w-full   py-10 md:py-20">
            <PillerAnimation />
            <Container>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* MISSION CARD */}
                    <div className="relative rounded-2xl  ">
                        <div className=" rounded-2xl   h-full flex flex-col gap-5">

                            <div className="flex items-center gap-3">
                                <SectionTitle title={t("aboutPage.mission", "Mission")} />

                            </div>

                            <p className=" text-lg md:text-xl max-w-xl  font-medium leading-relaxed  py-4">
                                Our mission is to deliver high-quality commercial display solutions that help businesses communicate, collaborate, and operate more effectively. We focus on providing reliable, certified screens with expert installation and support to ensure every project performs at the highest standard.
                            </p>

                            <div className="w-full flex justify-start">
                                <div className="relative w-full lg:w-[60%] h-64 rounded-xl overflow-hidden group">
                                    <div className="absolute inset-0 rounded-xl border-2 border-dashed border-[#70C879] pointer-events-none"></div>

                                    <Image
                                        src="/assets/images/mission_vision/mission.png"
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
                                <SectionTitle title={t("aboutPage.vision", "Vision")} />


                            </div>

                            <p className=" text-lg md:text-xl max-w-xl font-medium leading-relaxed  py-4">
                                Our vision is to become a trusted leader in display technology by providing innovative, dependable, and future-ready screen solutions. We aim to support businesses worldwide with cutting-edge visual systems that enhance engagement, productivity, and decision-making.
                            </p>

                            <div className="w-full flex justify-start">
                                <div className="relative w-full lg:w-[60%] h-64 rounded-xl overflow-hidden group">
                                    <div className="absolute inset-0 rounded-xl border-2 border-dashed border-[#70C879] pointer-events-none"></div>

                                    <Image
                                        src="/assets/images/mission_vision/vision.png"
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
