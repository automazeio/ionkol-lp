import { useEffect, useState } from "react";
import type { PriceCard } from "../../../lib/directus";
import directus from "../../../lib/directus";
import { readItems } from "@directus/sdk";
import { m } from "../../paraglide/messages";

export default function PriceCardsData() {
  const [data, setData] = useState<PriceCard[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const priceCards = await directus.request(readItems("priceCards"));
        priceCards.sort((a, b) => a.price_monthly - b.price_monthly);
        setData(priceCards);
      } catch (error) {
        console.error("Error fetching price cards:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {data.length > 0 ? (
        data.map((price) => (
          <div className="bg-[#FFE2E5] rounded-[220px] px-8 py-12 flex flex-col items-center text-center min-w-[318px] min-h-[612px]">
            <h3 className="text-[34px] font-semibold mb-10">{price.name}</h3>
            {price.name === "Free" ? (
              <p className="free-tier text-[68px] font-bold mb-[44px]">Free</p>
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
                <p className="text-xl mb-4">{m["index.pricing.perMonth"]()}</p>
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
                <li>{line}</li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
