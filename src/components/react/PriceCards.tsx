import { m } from "../../paraglide/messages";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export default function PriceCardsData() {
  const data = [
    {
      id: 1,
      name: "Free",
      price_yearly: "0",
      price_monthly: 0,
      price_monthly_annual: "0",
      cta_text: "Sign up",
      description: [
        `1 ${m["index.pricing.analyse"]()}`,
        `50 ${m["index.pricing.explores"]()}`,
      ],
      subheader: m["index.pricing.individuals, small businesses"](),
    },
    {
      id: 2,
      name: "Core",
      price_yearly: "960",
      price_monthly: 100,
      price_monthly_annual: "80",
      cta_text: "Upgrade",
      description: [
        `20 ${m["index.pricing.analyses"]()}`,
        `1,000 ${m["index.pricing.explores"]()}`,
      ],
      subheader: m["index.pricing.individuals, small businesses"](),
    },
    {
      id: 3,
      name: "Plus",
      price_yearly: "2,100",
      price_monthly: 220,
      price_monthly_annual: "175",
      cta_text: "Upgrade",
      description: [
        `50 ${m["index.pricing.analyses"]()}`,
        `2,500 ${m["index.pricing.explores"]()}`,
      ],
      subheader: m["index.pricing.small businesses"](),
    },
    {
      id: 4,
      name: "Prime",
      price_yearly: "3,600",
      price_monthly: 375,
      price_monthly_annual: "300",
      cta_text: "Upgrade",
      description: [
        `100 ${m["index.pricing.analyses"]()}`,
        `5,000 ${m["index.pricing.explores"]()}`,
      ],
      subheader: m["index.pricing.large businesses"](),
    },
  ];

  return (
    <div className="max-w-full">
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 w-full mt-14">
        {data.length > 0 ? (
          data.map((price) => (
            <div
              key={price.id}
              className="bg-[#FFE2E5] rounded-[220px] px-8 py-12 flex flex-col items-center text-center min-w-[318px] min-h-[612px]"
            >
              <h3 className="text-[34px] font-semibold mb-10">{price.name}</h3>
              {price.name === "Free" ? (
                <p className="free-tier text-[68px] font-bold mb-[44px]">
                  Free
                </p>
              ) : (
                <>
                  <div className="price-container">
                    <p className="monthly-price text-[68px] font-bold">
                      {price.price_monthly}
                      <span className="text-3xl">USD</span>
                    </p>
                    <p className="annual-price text-[68px] font-bold hidden">
                      {price.price_monthly_annual}
                      <span className="text-3xl">USD</span>
                    </p>
                  </div>
                  <p className="text-xl mb-4">
                    {m["index.pricing.perMonth"]()}
                  </p>
                  <div className="yearly-price text-xl mb-6 flex flex-col hidden">
                    <span>$ {price.price_yearly}</span>
                    <span>({m["index.pricing.billedAnnually"]()})</span>
                  </div>
                </>
              )}

              <p className="text-xl mb-8">{price.subheader}</p>
              <div className="w-full h-[1px] bg-black/30 mb-8"></div>
              <ul className="space-y-2 text-center w-full text-[20px]">
                {price.description.map((line) => (
                  <li key={line}>{line.replace(".", ",")}</li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>

      {data.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 w-full">
          <Swiper
            slidesPerView={1}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="max-w-full mt-14 overflow-hidden mx-auto px-4 md:!hidden"
          >
            {data.map((price) => (
              <SwiperSlide
                key={price.id}
                className="!w-full h-[612px] !flex justify-center"
              >
                <div className="bg-[#FFE2E5] rounded-[220px] px-8 py-12 flex flex-col items-center text-center w-full max-w-[318px] min-h-[612px]">
                  <h3 className="text-[34px] font-semibold mb-10">
                    {price.name}
                  </h3>
                  {price.name === "Free" ? (
                    <p className="free-tier text-[68px] font-bold mb-[44px]">
                      Free
                    </p>
                  ) : (
                    <>
                      <div className="price-container">
                        <p className="monthly-price text-[68px] font-bold">
                          {price.price_monthly}
                          <span className="text-3xl">USD</span>
                        </p>
                        <p className="annual-price text-[68px] font-bold hidden">
                          {price.price_monthly_annual}
                          <span className="text-3xl">USD</span>
                        </p>
                      </div>
                      <p className="text-xl mb-4">
                        {m["index.pricing.perMonth"]()}
                      </p>
                      <div className="yearly-price text-xl mb-6 flex flex-col hidden">
                        <span>$ {price.price_yearly}</span>
                        <span>({m["index.pricing.billedAnnually"]()})</span>
                      </div>
                    </>
                  )}

                  <p className="text-xl mb-8">{price.subheader}</p>
                  <div className="w-full h-[1px] bg-black/30 mb-8"></div>
                  <ul className="space-y-2 text-center w-full text-[20px]">
                    {price.description.map((line) => (
                      <li>{line.replace(".", ",")}</li>
                    ))}
                  </ul>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}
