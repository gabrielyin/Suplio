'use client'

import Pagination from '@/Pagination'
import { ReactNode, useState } from 'react'

interface TeamTableProps {
  children?: ReactNode
}

export default function TeamTable({ children }: TeamTableProps) {
  const [team, setTeam] = useState([
    {
      name: 'Gabriel',
      role: 'Admin',
      email: 'gabriel@gmail.com',
    },
    {
      name: 'Rafael',
      role: 'Team',
      email: 'rafael@gmail.com',
    },
    {
      name: 'Leonardo',
      role: 'Team',
      email: 'leonardo@gmail.com',
    },
  ])

  return (
    <div className="flex flex-col gap-6">
      {children}
      <table className="w-full table-auto text-left">
        <thead>
          <tr className="text-charade-300">
            <th className="border-b py-2 font-normal">Nome</th>
            <th className="border-b py-2 font-normal">Role</th>
            <th className="border-b py-2 font-normal">Email</th>
            <th className="border-b py-2 font-normal"></th>
          </tr>
        </thead>
        <tbody>
          {team.map((supplier) => {
            return (
              <tr className="border-b" key={supplier.email}>
                <td className="py-3 font-bold">{supplier.name}</td>
                <td className="py-3">{supplier.role}</td>
                <td className="py-3">{supplier.email}</td>
                <td>
                  <div className="w-fit cursor-pointer rounded-lg bg-red-200 p-1.5 text-red-600 transition hover:bg-red-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}
