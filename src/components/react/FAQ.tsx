import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className="w-full mx-auto">
      <Accordion
        title="What is IONKOL?"
        preview="IONKOL is a data analytics startup. We provide data-driven influencer marketing insights to help businesses discover..."
      >
        <p>
          IONKOL is a data analytics startup. We provide data-driven influencer
          marketing insights to help businesses discover, manage, and optimize
          their influencer partnerships. By leveraging audience analytics,
          performance metrics, and advanced filters, IONKOL simplifies the
          influencer selection process, enabling businesses of all sizes to
          connect with the right influencers to grow their brand. Whether you're
          just starting or looking to scale your influencer marketing efforts,
          IONKOL provides the tools you need to make smarter, data-driven
          decisions.{" "}
          <a
            href="/features"
            className="text-[#EE7380] underline cursor-pointer"
          >
            Find out more
          </a>
        </p>
      </Accordion>
      <Accordion
        title="How does IONKOL work?"
        preview="IONKOL works by offering businesses a streamlined platform to search for influencers using customizable filters like..."
      >
        <div className="flex flex-col gap-4">
          <p>
            IONKOL works by offering businesses a streamlined platform to search
            for influencers using customizable filters like location, interests,
            audience demographics, and engagement metrics. Once you find the
            right influencers, you can assess their past performance through
            comprehensive analytics, ensuring they align with your marketing
            goals.
          </p>
          <span className="font-semibold">
            Here’s how it works in a nutshell:
          </span>
          <div className="grid grid-cols-12 gap-y-4 px-2">
            <span className="font-semibold">Search</span>
            <span className="col-span-11">
              Use IONKOL’s advanced search filters to find influencers who match
              your brand’s audience, niche, and goals.{" "}
            </span>

            <span className="font-semibold">Analyze</span>
            <span className="col-span-11">
              Evaluate influencers using detailed analytics, such as engagement
              rates, audience authenticity, and past performance.
            </span>

            <span className="font-semibold">Connect</span>
            <span className="col-span-11">
              Reach out to influencers directly through the platform to start
              collaborations, track campaigns, and manage contracts.
            </span>

            <span className="font-semibold">Optimize</span>
            <span className="col-span-11">
              Review ongoing campaign performance and make adjustments to ensure
              the best possible ROI.
            </span>
          </div>

          <p>
            IONKOL makes influencer marketing efficient, accessible, and
            data-driven.{" "}
            <a
              href="/features"
              className="text-[#EE7380] underline cursor-pointer"
            >
              Find out more
            </a>
          </p>
        </div>
      </Accordion>

      <Accordion
        title="Who is IONKOL for? Is it right for me?"
        preview="IONKOL is designed for businesses of all sizes that want to harness the power of influencer marketing to grow their..."
      >
        <div className="flex flex-col gap-4">
          <p>
            IONKOL is designed for businesses of all sizes that want to harness
            the power of influencer marketing to grow their brand. Whether
            you're a small business just starting to explore influencer
            partnerships or a larger company looking to scale your campaigns,
            IONKOL has the tools you need to succeed.
          </p>
          <span className="font-semibold">IONKOL is perfect for:</span>
          <div className="grid grid-cols-12 gap-y-4 px-2">
            <span className="col-span-3 font-semibold">
              Small to Medium Businesses
            </span>
            <span className="col-span-9">
              If you’re looking for cost-effective ways to reach new customers
              and expand your brand presence.
            </span>

            <span className="col-span-3 font-semibold">E-commerce Brands</span>
            <span className="col-span-9">
              To boost visibility, drive sales, and enhance customer loyalty
              through influencer collaborations.
            </span>

            <span className="col-span-3 font-semibold">Marketing Teams</span>
            <span className="col-span-9">
              For businesses that already work with influencers but need an easy
              way to streamline the process and optimize performance.
            </span>

            <span className="col-span-3 font-semibold">Agencies</span>
            <span className="col-span-9">
              To efficiently manage multiple influencer campaigns for clients
              across various industries.
            </span>

            <span className="col-span-3 font-semibold">Content</span>
            <span className="col-span-9">
              Creators Those looking to expand their reach and connect with
              brands that align with their values.
            </span>
          </div>

          <p>
            IONKOL serves businesses across various industries, including
            fashion, beauty, food and beverage, lifestyle, and more.{" "}
            <a
              href="/pricing"
              className="text-[#EE7380] underline cursor-pointer"
            >
              Find out more
            </a>
          </p>
        </div>
      </Accordion>

      <Accordion
        title="How much does IONKOL cost?"
        preview="IONKOL offers flexible pricing plans to suit the needs of businesses of all sizes. We provide both monthly and..."
      >
        <div className="flex flex-col gap-4">
          <p>
            IONKOL offers flexible pricing plans to suit the needs of businesses
            of all sizes. We provide both monthly and annual subscription
            options, with various tiers based on the features you need and the
            scale of your business.
          </p>
          <span className="font-semibold">Our Pricing Plans:</span>
          <div className="grid grid-cols-12 gap-y-4 px-2">
            <span className="col-span-2 font-semibold">Free Plan</span>
            <span className="col-span-10">
              Try out IONKOL with limited features, perfect for small businesses
              just getting started with influencer marketing.
            </span>

            <span className="col-span-2 font-semibold">Core Plan</span>
            <span className="col-span-10">
              Starting at $100/month, ideal for small businesses that need
              access to more features like advanced influencer search, tracking,
              and reporting.
            </span>

            <span className="col-span-2 font-semibold">Plus Plan</span>
            <span className="col-span-10">
              $220/month, offering more comprehensive tools and additional
              support for growing businesses and larger influencer campaigns.
            </span>

            <span className="col-span-2 font-semibold">Prime Plan</span>
            <span className="col-span-10">
              $375/month, designed for large businesses with advanced needs,
              offering the most extensive features, analytics, and priority
              support.
            </span>
          </div>

          <p>
            We also offer discounts for annual subscriptions, allowing you to
            save up to 25% compared to the monthly pricing.
          </p>

          <p>
            Our pricing is designed to be affordable, with plans that grow
            alongside your business. Choose the plan that best fits your
            influencer marketing goals and start leveraging the power of
            influencer campaigns today.{" "}
            <a
              href="/pricing"
              className="text-[#EE7380] underline cursor-pointer"
            >
              Find out more
            </a>
          </p>
        </div>
      </Accordion>

      <Accordion
        title="What makes IONKOL different from others?"
        preview="IONKOL stands out in the influencer marketing landscape by offering a comprehensive platform that combines..."
      >
        <div className="flex flex-col gap-4">
          <p>
            IONKOL stands out in the influencer marketing landscape by offering
            a comprehensive platform that combines{" "}
            <span className="font-semibold">
              data-driven insights, ease of use,
            </span>{" "}
            and <span className="font-semibold">affordability</span>.
          </p>
          <span className="font-semibold">
            Here are some key features that make IONKOL unique:
          </span>
          <div className="grid grid-cols-10 gap-y-4 px-2">
            <span className="col-span-4 font-semibold">
              Data-Driven Influencer Insights 
            </span>
            <span className="col-span-6">
              IONKOL offers in-depth audience and engagement analytics that help
              you identify the right influencers, not just based on followers,
              but on the actual impact their audience has. Our robust parameters
              allow you to evaluate influencer authenticity, engagement quality,
              and audience relevance for more precise decision-making.
            </span>

            <span className="col-span-4 font-semibold">
              Customizable and Flexible Plans{" "}
            </span>
            <span className="col-span-6">
              Whether you're a small business owner just starting with
              influencer marketing or a large corporation running high-volume
              campaigns, IONKOL offers plans that scale with your needs. Plus,
              our intuitive platform ensures that even those with minimal
              marketing experience can easily navigate and run successful
              campaigns.
            </span>

            <span className="col-span-4 font-semibold">
              Transparency and Control{" "}
            </span>
            <span className="col-span-6">
              IONKOL provides complete transparency in influencer performance
              and analytics. This empowers businesses to make data-backed
              decisions and optimize their marketing strategies effectively.
            </span>

            <span className="col-span-4 font-semibold">
              Integration of Education and Tools 
            </span>
            <span className="col-span-6">
              IONKOL is not just about offering influencer marketing tools. We
              provide a range of educational resources like tutorials, webinars,
              and blogs to help you understand the influencer marketing
              ecosystem and how to maximize your campaigns.
            </span>
          </div>

          <p>
            IONKOL is designed to make influencer marketing accessible,
            actionable, and highly efficient for businesses of all sizes.
          </p>
        </div>
      </Accordion>
    </div>
  );
};

export default FAQ;
