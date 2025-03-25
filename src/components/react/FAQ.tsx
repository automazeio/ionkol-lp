import Accordion from "./Accordion";
import { m } from "../../paraglide/messages.js";
import { useEffect } from "react";

const FAQ = () => {
  useEffect(() => {
    const updateLinks = () => {
      const pathSegments = window.location.pathname.split("/");
      const currentLang = pathSegments[1] || "en";

      document.querySelectorAll("a[data-link]").forEach((link) => {
        const basePath = link.getAttribute("data-link");
        // Only update links that aren't external or anchor links
        if (
          basePath &&
          !basePath.startsWith("http") &&
          !basePath.startsWith("#")
        ) {
          (link as HTMLAnchorElement).href = `/${currentLang}${basePath}`;
        }
      });
    };

    updateLinks();
  }, []);

  return (
    <div className="w-full mx-auto">
      <Accordion
        title={m["resources.faq.whatIsIonkol.title"]()}
        preview={m["resources.faq.whatIsIonkol.preview"]()}
      >
        <p>
          {m["resources.faq.whatIsIonkol.content"]()}{" "}
          <a
            href="/features"
            className="text-[#EE7380] underline cursor-pointer"
            data-link="/features"
          >
            {m["resources.faq.whatIsIonkol.findOutMore"]()}
          </a>
        </p>
      </Accordion>
      <Accordion
        title={m["resources.faq.howDoesIonkolWork.title"]()}
        preview={m["resources.faq.howDoesIonkolWork.preview"]()}
      >
        <div className="flex flex-col gap-4">
          <p>{m["resources.faq.howDoesIonkolWork.content"]()}</p>
          <span className="font-semibold">
            {m["resources.faq.howDoesIonkolWork.howItWorks"]()}
          </span>
          <div className="grid grid-cols-12 gap-y-4 px-2">
            <span className="font-semibold">
              {m["resources.faq.howDoesIonkolWork.steps.search.title"]()}
            </span>
            <span className="col-span-11">
              {m["resources.faq.howDoesIonkolWork.steps.search.description"]()}
            </span>

            <span className="font-semibold">
              {m["resources.faq.howDoesIonkolWork.steps.analyze.title"]()}
            </span>
            <span className="col-span-11">
              {m["resources.faq.howDoesIonkolWork.steps.analyze.description"]()}
            </span>

            <span className="font-semibold">
              {m["resources.faq.howDoesIonkolWork.steps.connect.title"]()}
            </span>
            <span className="col-span-11">
              {m["resources.faq.howDoesIonkolWork.steps.connect.description"]()}
            </span>

            <span className="font-semibold">
              {m["resources.faq.howDoesIonkolWork.steps.optimize.title"]()}
            </span>
            <span className="col-span-11">
              {m[
                "resources.faq.howDoesIonkolWork.steps.optimize.description"
              ]()}
            </span>
          </div>

          <p>
            {m["resources.faq.howDoesIonkolWork.conclusion"]()}{" "}
            <a
              href="/features"
              className="text-[#EE7380] underline cursor-pointer"
              data-link="/features"
            >
              {m["resources.faq.howDoesIonkolWork.findOutMore"]()}
            </a>
          </p>
        </div>
      </Accordion>

      <Accordion
        title={m["resources.faq.whoIsIonkolFor.title"]()}
        preview={m["resources.faq.whoIsIonkolFor.preview"]()}
      >
        <div className="flex flex-col gap-4">
          <p>{m["resources.faq.whoIsIonkolFor.content"]()}</p>
          <span className="font-semibold">
            {m["resources.faq.whoIsIonkolFor.perfectFor"]()}
          </span>
          <div className="grid grid-cols-12 gap-y-4 px-2">
            <span className="col-span-3 font-semibold">
              {m[
                "resources.faq.whoIsIonkolFor.targets.smallBusinesses.title"
              ]()}
            </span>
            <span className="col-span-9">
              {m[
                "resources.faq.whoIsIonkolFor.targets.smallBusinesses.description"
              ]()}
            </span>

            <span className="col-span-3 font-semibold">
              {m["resources.faq.whoIsIonkolFor.targets.ecommerce.title"]()}
            </span>
            <span className="col-span-9">
              {m[
                "resources.faq.whoIsIonkolFor.targets.ecommerce.description"
              ]()}
            </span>

            <span className="col-span-3 font-semibold">
              {m["resources.faq.whoIsIonkolFor.targets.marketingTeams.title"]()}
            </span>
            <span className="col-span-9">
              {m[
                "resources.faq.whoIsIonkolFor.targets.marketingTeams.description"
              ]()}
            </span>

            <span className="col-span-3 font-semibold">
              {m["resources.faq.whoIsIonkolFor.targets.agencies.title"]()}
            </span>
            <span className="col-span-9">
              {m["resources.faq.whoIsIonkolFor.targets.agencies.description"]()}
            </span>

            <span className="col-span-3 font-semibold">
              {m[
                "resources.faq.whoIsIonkolFor.targets.contentCreators.title"
              ]()}
            </span>
            <span className="col-span-9">
              {m[
                "resources.faq.whoIsIonkolFor.targets.contentCreators.description"
              ]()}
            </span>
          </div>

          <p>
            {m["resources.faq.whoIsIonkolFor.conclusion"]()}{" "}
            <a
              href="/pricing"
              className="text-[#EE7380] underline cursor-pointer"
              data-link="/pricing"
            >
              {m["resources.faq.whoIsIonkolFor.findOutMore"]()}
            </a>
          </p>
        </div>
      </Accordion>

      <Accordion
        title={m["resources.faq.howMuchDoesIonkolCost.title"]()}
        preview={m["resources.faq.howMuchDoesIonkolCost.preview"]()}
      >
        <div className="flex flex-col gap-4">
          <p>{m["resources.faq.howMuchDoesIonkolCost.content"]()}</p>
          <span className="font-semibold">
            {m["resources.faq.howMuchDoesIonkolCost.pricingPlans"]()}
          </span>
          <div className="grid grid-cols-12 gap-y-4 px-2">
            <span className="col-span-2 font-semibold">
              {m["resources.faq.howMuchDoesIonkolCost.plans.free.title"]()}
            </span>
            <span className="col-span-10">
              {m[
                "resources.faq.howMuchDoesIonkolCost.plans.free.description"
              ]()}
            </span>

            <span className="col-span-2 font-semibold">
              {m["resources.faq.howMuchDoesIonkolCost.plans.core.title"]()}
            </span>
            <span className="col-span-10">
              {m[
                "resources.faq.howMuchDoesIonkolCost.plans.core.description"
              ]()}
            </span>

            <span className="col-span-2 font-semibold">
              {m["resources.faq.howMuchDoesIonkolCost.plans.plus.title"]()}
            </span>
            <span className="col-span-10">
              {m[
                "resources.faq.howMuchDoesIonkolCost.plans.plus.description"
              ]()}
            </span>

            <span className="col-span-2 font-semibold">
              {m["resources.faq.howMuchDoesIonkolCost.plans.prime.title"]()}
            </span>
            <span className="col-span-10">
              {m[
                "resources.faq.howMuchDoesIonkolCost.plans.prime.description"
              ]()}
            </span>
          </div>

          <p>{m["resources.faq.howMuchDoesIonkolCost.discounts"]()}</p>

          <p>
            {m["resources.faq.howMuchDoesIonkolCost.conclusion"]()}{" "}
            <a
              href="/pricing"
              className="text-[#EE7380] underline cursor-pointer"
              data-link="/pricing"
            >
              {m["resources.faq.howMuchDoesIonkolCost.findOutMore"]()}
            </a>
          </p>
        </div>
      </Accordion>

      <Accordion
        title={m["resources.faq.whatMakesIonkolDifferent.title"]()}
        preview={m["resources.faq.whatMakesIonkolDifferent.preview"]()}
      >
        <div className="flex flex-col gap-4">
          <p>{m["resources.faq.whatMakesIonkolDifferent.content"]()}</p>
          <span className="font-semibold">
            {m["resources.faq.whatMakesIonkolDifferent.keyFeatures"]()}
          </span>
          <div className="grid grid-cols-10 gap-y-4 px-2">
            <span className="col-span-4 font-semibold">
              {m[
                "resources.faq.whatMakesIonkolDifferent.features.dataDriven.title"
              ]()}
            </span>
            <span className="col-span-6">
              {m[
                "resources.faq.whatMakesIonkolDifferent.features.dataDriven.description"
              ]()}
            </span>

            <span className="col-span-4 font-semibold">
              {m[
                "resources.faq.whatMakesIonkolDifferent.features.customizable.title"
              ]()}
            </span>
            <span className="col-span-6">
              {m[
                "resources.faq.whatMakesIonkolDifferent.features.customizable.description"
              ]()}
            </span>

            <span className="col-span-4 font-semibold">
              {m[
                "resources.faq.whatMakesIonkolDifferent.features.transparency.title"
              ]()}
            </span>
            <span className="col-span-6">
              {m[
                "resources.faq.whatMakesIonkolDifferent.features.transparency.description"
              ]()}
            </span>

            <span className="col-span-4 font-semibold">
              {m[
                "resources.faq.whatMakesIonkolDifferent.features.education.title"
              ]()}
            </span>
            <span className="col-span-6">
              {m[
                "resources.faq.whatMakesIonkolDifferent.features.education.description"
              ]()}
            </span>
          </div>

          <p>{m["resources.faq.whatMakesIonkolDifferent.conclusion"]()}</p>
        </div>
      </Accordion>
    </div>
  );
};

export default FAQ;
