"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Header() {
  const menuData = [
    {
      name: "首页",
      path: "/",
    },
    {
      name: "训练",
      path: "/train",
    },
    {
      name: "推理",
      path: "/reason",
    },
    {
      name: "转换",
      path: "/convert",
    },
  ];

  const pathname = usePathname();
  return (
    <>
      <header className="bg-white ">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            MODEL TRAINING PLATFORM
          </h1>
        </div>
      </header>
      <div className="min-h-full">
        <nav className="bg-gray-800">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {menuData.map((item) => (
                      <Link
                        key={item.name}
                        href={item.path}
                        className={`text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ${
                          pathname === item.path ? "bg-gray-900" : ""
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="ml-4 flex items-center">
                  <div className="relative ml-3">
                    <div className="block  max-w-md mx-auto">
                      <div className="relative  flex items-center w-full h-8 border border-gray-500 rounded-sm  bg-gray-600 overflow-hidden">
                        <div className="grid place-items-center w-12 bg-gray-600 text-gray-300">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 bg-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                          </svg>
                        </div>

                        <input
                          className="bg-gray-600 outline-none text-sm text-gray-300 pr-2"
                          type="text"
                          id="search"
                          placeholder="Search something.."
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ml-2 flex">
                  <Link
                    href="/login"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    登陆
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
