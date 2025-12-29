export default function TestimonialCard({data}) {
  return (
    <div
      className="
        relative
        w-full
        max-w-[92%]
        sm:max-w-[520px]
        md:max-w-[638px]
        lg:max-w-[822px]
        border-2
        border-dotted
        border-[#70C879]
        rounded-xl
        px-4 sm:px-6
        py-6 sm:py-8
        text-center
      "
    >
      {/* Name */}
      <h3 className="text-[#E9C05F] font-semibold text-xl md:text-2xl">
       {data.name}
      </h3>

      {/* Role */}
      <p className=" text-xs md:text-[14px] text-white/70 mb-3 font-normal">
        {data.role}
      </p>

      {/* Testimonial */}
      <p className="text-base sm:text-[22px] text-gray-200 leading-5 md:leading-7 font-normal max-w-[520px] mx-auto">
        {data.testimonial}
      </p>

      {/* Stars */}
      <div className="flex justify-center gap-1 mt-4">
        {Array.from({ length: data.stars }).map((_, i) => (
          <span key={i} className="text-[#70C879] text-sm md:text-[22px]">
            ★
          </span>
        ))}
      </div>
    </div>
  );
}
