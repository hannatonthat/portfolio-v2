'use client';

import ExperienceItem from "@components/ExperienceItem";

export default function Experience() {
  return (
    <div className="flex flex-col">
      <h2>Experience</h2>

      <ul className="m-0 list-none p-0 space-y-2">
        <ExperienceItem
          image="/assets/shopify.png"
          company="Shopify"
          companyLink="https://www.shopify.com/"
          title="Software Engineer"
        />

        <ExperienceItem
          image="/assets/government.png"
          company="Government of Canada"
          companyLink="https://www.canada.ca/"
          title="Software Developer"
        />

        <ExperienceItem
          image="/assets/chusj.png"
          company="CHU Sainte-Justine"
          companyLink="https://www.chusj.org/"
          title="Software Developer"
        />

        <ExperienceItem
          image="/assets/dawson.png"
          company="Dawson College"
          companyLink="https://www.dawsoncollege.qc.ca/"
          title="Software Developer"
        />
      </ul>
    </div>
  );
}
