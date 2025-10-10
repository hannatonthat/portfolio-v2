'use client';

import StaggeredLine from "@components/StaggeredLine";
import Image from "next/image";

export default function About() {
  let index = 0;

  return (
    <div>
      <StaggeredLine index={index}>
        <h2>About</h2>
      </StaggeredLine>

      <ul className="list-disc list-inside">
        <StaggeredLine index={++index}>
          <li className="">
            Incoming Software Engineer @
            <Image
              src="/assets/shopify.png"
              alt="Shopify logo"
              width={20}
              height={20}
              className="inline-block mx-1 h-5 w-5 align-middle"
            />
            <a
              href="https://www.shopify.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Shopify
            </a>
          </li>
        </StaggeredLine>
        <StaggeredLine index={++index}>
          <li className="">
            Mechatronics Engineering @
            <Image
              src="/assets/waterloo.png"
              alt="Waterloo logo"
              width={20}
              height={20}
              className="inline-block mx-1 h-5 w-5 align-middle"
            />
            <a
              href="https://uwaterloo.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              University of Waterloo
            </a>
          </li>
        </StaggeredLine>
        <StaggeredLine index={++index}>
          <li className="">
            Engineer and developer building thoughtful systems across backend, AI/ML, and robotics
          </li>
          <li className="">
            Focused on software that works well, feels right, and genuinely makes a difference
          </li>
        </StaggeredLine>
      </ul>
    </div>
  )
}