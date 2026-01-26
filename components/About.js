'use client';

import Image from "next/image";

export default function About() {

  return (
    <div>
      <h2>About</h2>
      
      <ul className="list-disc list-inside">
        <li className="">
          Software Engineer @
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

        <li className="">
          Engineer and developer building thoughtful systems across backend, AI/ML, and robotics
        </li>
        
        <li className="">
          Focused on software that works well, feels right, and genuinely makes a difference
        </li>
      </ul>
    </div>
  )
}