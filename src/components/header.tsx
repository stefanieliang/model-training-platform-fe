"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Header() {
    const menuData = [
        {
            name: '训练',
            path: '/train'
        },
        {
            name: '推理',
            path: '/reason'
        },
        {
            name: '转换',
            path: '/convert'
        },
        {
            name: '登陆',
            path: '/login'
        }
    ]

    // const accessLink = ['/', '/login','/train','/reason','/convert'];
    const pathname = usePathname();
    // if (!accessLink.includes(pathname)) {
    //     return null;
    // }
    return (
        <div className="absolute w-full z-10">
            <div className="flex justify-between container mx-auto p-8 items-center">
                <Link className="text-3xl font-bold" href="/">Home</Link>
                <div className="text-xl space-x-4">
                    {menuData.map(item => (
                        <Link key={item.path} href={item.path} className={`${pathname === item.path ? 'text-purple-500' : ''}`}>{item.name}</Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
