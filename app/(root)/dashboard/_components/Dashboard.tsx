"use client";

import Image from "next/image";
import LineChart from "./charts/LineChart";
import { people } from "@/constants/people";
import BarChart from "./charts/BarChart";
import React from "react";

const topBoosts = [
  { id: 1, name: "Boost 1", source: "Boost 1", session: 1000, change: 10 },
  { id: 2, name: "Boost 2", source: "Boost 2", session: 800, change: -5 },
  { id: 3, name: "Boost 3", source: "Boost 3", session: 1200, change: 15 },
  { id: 4, name: "Boost 4", source: "Boost 4", session: 700, change: -8 },
  { id: 5, name: "Boost 3", source: "Boost 3", session: 1200, change: 20 },
  { id: 6, name: "Boost 4", source: "Boost 4", session: 700, change: 29 },
];

export default function Dashboard() {
  return (
    <section className="grid grid-cols-1 gap-6 pt-8 md:grid-cols-9">
      <div className="rounded-lg border border-background-800 p-4 shadow-sm md:col-span-3">
        <div>
          <h2 className="text-2xl font-extrabold">Boosts Created</h2>

          <p className="pt-4 text-2xl font-extrabold">17</p>
          <p className="text-sm text-green-500">+20% compared to last month</p>
        </div>
      </div>
      <div className="rounded-lg border border-background-800 p-4 shadow-sm md:col-span-3">
        <div>
          <h2 className="text-2xl font-extrabold">Total Traffic</h2>
          <p className="pt-4 text-2xl font-extrabold">124</p>
          <p className="text-sm text-red-500">-11% compared to last month</p>
        </div>
      </div>
      <div className="rounded-lg border border-background-800 p-4 shadow-sm md:col-span-3">
        <div>
          <h2 className="text-2xl font-extrabold">Lorem ipsum dolor</h2>

          <p className="pt-4 text-2xl font-extrabold">598</p>
          <p className="text-sm text-green-500">+8% compared to last month</p>
        </div>
      </div>
      <div className="rounded-lg border border-background-800 p-4 shadow-sm md:col-span-6">
        <div>
          <h2 className="pb-4 text-2xl font-extrabold">Traffic Growth</h2>
        </div>
        <LineChart className="aspect-[9/4]" />
      </div>
      <div className="rounded-lg border border-background-800 p-4 shadow-sm md:col-span-3">
        <div>
          <h2 className="text-2xl font-extrabold">New Members</h2>

          <div className="mt-4 space-y-2">
            {people.map((person) => (
              <div
                key={person.id}
                className="flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 transition-colors hover:bg-background-700"
              >
                <Image
                  src={person.image}
                  alt=""
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <p>{person.name}</p>
                  <p>{person.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="rounded-lg border border-background-800 p-4 shadow-sm md:col-span-4">
        <div>
          <h2 className="text-2xl font-extrabold">Top Performing Boosts</h2>

          <div className="mt-4 grid grid-cols-8">
            <p className="col-span-4 py-2">Source</p>
            <p className="col-span-2 py-2 text-right">Session</p>
            <p className="col-span-2 py-2 text-right">Change</p>
            <hr className="col-span-8" />
            {topBoosts.map((boost) => (
              <React.Fragment key={boost.id}>
                <p className="col-span-4 py-2">{boost.source}</p>
                <p className="col-span-2 py-2 text-right">{boost.session}</p>
                <p
                  className={`col-span-2 py-2 text-right ${
                    boost.change >= 0 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {boost.change >= 0 ? `+${boost.change}%` : `${boost.change}%`}
                </p>
                <hr className="col-span-8" />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <div className="rounded-lg border border-background-800 p-4 shadow-sm md:col-span-5">
        <div>
          <h2 className="pb-4 text-2xl font-extrabold">Traffic Per Month</h2>

          <BarChart className="aspect-[9/4]" />
        </div>
      </div>
    </section>
  );
}
