import React from "react";
import { Div } from "./HeroBgAnimationStyle";

const techLogos = [
  {
    id: 1,
    href: "#path_1",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    duration: "10s",
    delay: "0s",
  },
  {
    id: 2,
    href: "#path_2",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    duration: "12s",
    delay: "2s",
  },
  {
    id: 3,
    href: "#path_3",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    duration: "14s",
    delay: "4s",
  },
  {
    id: 4,
    href: "#path_4",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    duration: "16s",
    delay: "6s",
  },
  {
    id: 5,
    href: "#path_5",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    duration: "11s",
    delay: "1s",
  },
  {
    id: 6,
    href: "#path_6",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    duration: "13s",
    delay: "3s",
  },
  {
    id: 7,
    href: "#path_7",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    duration: "15s",
    delay: "5s",
  },
  {
    id: 8,
    href: "#path_8",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    duration: "17s",
    delay: "7s",
  },
  {
    id: 9,
    href: "#path_9",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    duration: "18s",
    delay: "8s",
  },
];

const HeroBgAnimation = () => (
  <Div>
    <svg
      className="BgAnimation__svg"
      viewBox="0 0 1000 1000"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient
          id="paint0_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(500 500) rotate(90) scale(500)"
        >
          <stop offset="0.333333" stopColor="#FBFBFB" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g opacity="0.15">
        <path
          id="path_1"
          d="M100 100 Q300 50, 500 100 T900 150"
          stroke="url(#paint0_radial)"
          fill="none"
        />
        <path
          id="path_2"
          d="M200 250 Q400 100, 700 250 T900 300"
          stroke="url(#paint0_radial)"
          fill="none"
        />
        <path
          id="path_3"
          d="M150 400 Q350 300, 750 400 T950 450"
          stroke="url(#paint0_radial)"
          fill="none"
        />
        <path
          id="path_4"
          d="M250 600 Q450 500, 850 600 T1000 650"
          stroke="url(#paint0_radial)"
          fill="none"
        />
        <path
          id="path_5"
          d="M300 150 Q500 350, 700 150 T900 200"
          stroke="url(#paint0_radial)"
          fill="none"
        />
        <path
          id="path_6"
          d="M350 300 Q550 500, 850 300 T950 350"
          stroke="url(#paint0_radial)"
          fill="none"
        />
        <path
          id="path_7"
          d="M400 450 Q600 650, 900 450 T1000 500"
          stroke="url(#paint0_radial)"
          fill="none"
        />
        <path
          id="path_8"
          d="M450 700 Q650 900, 950 700 T1050 750"
          stroke="url(#paint0_radial)"
          fill="none"
        />
        <path
          id="path_9"
          d="M500 850 Q700 1050, 1000 850 T1100 900"
          stroke="url(#paint0_radial)"
          fill="none"
        />
      </g>

      {/* Technology Logos */}
      {techLogos.map((logo) => (
        <image
          key={logo.id}
          href={logo.src}
          width="80"
          height="80"
          style={{ filter: "drop-shadow(0 0 10px rgba(255,255,255,0.8))" }}
        >
          <animateMotion
            dur={logo.duration}
            begin={logo.delay}
            repeatCount="indefinite"
            rotate="auto"
          >
            <mpath href={logo.href} />
          </animateMotion>
        </image>
      ))}
    </svg>
  </Div>
);

export default HeroBgAnimation;
