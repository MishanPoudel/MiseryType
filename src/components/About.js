import React from "react";

export default function About() {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="w-md">
            <h1 className="text-5xl font-bold">MiseryType</h1>
            <p className="py-6">
              <div className="container mx-auto py-8 text-left text-2xl">
                <p className="mb-4">
                  Welcome to MiseryType, where typing thrill meets precision
                  agony. Pushing the limits of your skills, MiseryType is not
                  just a web app; it's an experience propelling you to keyboard
                  mastery.
                </p>
                <p className="mb-4">
                  Inspired by MonkeyType, we've taken typing challenges to new
                  heights. Our carefully crafted exercises refine the art of
                  precision typing.
                </p>
                <p className="mb-4">
                  Powered by Tailwind CSS and React JS, MiseryType ensures a
                  sleek, responsive, and efficient typing experience.
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>
                    <strong>Extreme Challenges:</strong> Test your limits with
                    heart-pounding typing challenges.
                  </li>
                  <li>
                    <strong>Real-time Feedback:</strong> Instantly track your
                    progress and evolve into a typing virtuoso.
                  </li>
                  <li>
                    <strong>Community-driven:</strong> Join a passionate
                    community, engage in friendly competitions, and reach new
                    heights.
                  </li>
                  <li>
                    <strong>Continuous Innovation:</strong> Expect regular
                    updates and fresh features to keep MiseryType exciting.
                  </li>
                </ul>
                <p className="mb-4">
                  At MiseryType, we redefine typing challenges, offering an
                  immersive and rewarding experience. Embark on the journey of
                  precision typing with MiseryType. Ready to embrace the
                  challenge?
                </p>
              </div>
            </p>
            <button className="btn btn-primary text-xl">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}
