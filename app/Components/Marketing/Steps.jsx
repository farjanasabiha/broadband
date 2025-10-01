import React from "react";

const Steps = () => {
  return (
    <div className="container max-w-4xl mx-auto px-5" id="steps">
      <div>
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium">
            Step 1: Set social media marketing goals that align to business
            objectives
          </h2>
          <p className="text-[18px] mt-5">
            The more specific your strategy is, the more effective the execution
            will be. Set SMART goals and track the right metrics to set yourself
            up for success.
          </p>
        </div>
        <div className="mt-5">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium">Set SMART goals</h2>
          <p className="text-[18px] mt-5">
            The first step to creating a social media marketing strategy is to
            establish your objectives and goals. Without goals, you have no way
            to measure your success or your social media return on investment
            (ROI).Each of your goals should be:
          </p>
          <ul className="list-disc p-5 text-[18px] space-y-4">
            <li>Specific</li>
            <li>Measurable</li>
            <li>Attainable</li>
            <li>Relevant</li>
            <li>Time-bound</li>
          </ul>
          <p className="text-[18px]">
            An example of a SMART goal for your business might be “Grow our
            Instagram audience by 50 new followers per week.”With SMART goals,
            you’ll make sure your goals actually lead to real business results,
            rather than just lofty ideals.
          </p>
        </div>
        <div className="mt-5">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium">Track meaningful metrics</h2>
          <p className="mt-5">
            While vanity metrics like retweets and likes can be fun to share and
            easy to track, it’s hard to prove their real value for your
            business. Instead, focus on targets such as leads generated, web
            referrals, and conversion rate.You may want to track different goals
            for different channels, or even different uses of each channel. For
            example, you can use paid campaigns to increase brand awareness, but
            measure acquisition and engagement for organic social posts.Make
            sure to align your social media goals with your overall marketing
            strategy. This will make it easier for you to show the value of your
            work and get executive buy-in and investment.Start developing your
            social media marketing plan by writing down at least three social
            media goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
