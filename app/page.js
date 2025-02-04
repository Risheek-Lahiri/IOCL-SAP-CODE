"use client"

import { useState } from "react"
import { tonerData } from "../data/tonerData"
import { ThemeToggle } from "./components/ThemeToggle"

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedToner, setSelectedToner] = useState("")

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
    setSelectedToner("") // Reset selected toner when searching
  }

  const filteredToners = tonerData.filter((toner) =>
    toner.type.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleTonerSelect = (tonerType) => {
    setSelectedToner(tonerType)
    setSearchQuery(tonerType) // Set the search query to the selected toner type
  }

  const selectedTonerInfo = tonerData.find((toner) => toner.type === selectedToner)

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-6 flex flex-col items-center">
      <div className="w-full max-w-xl px-4">
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-8">
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Toner Information</h1>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Search Toner Type
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Type to search..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                {searchQuery && (
                  <ul className="mt-2 space-y-2">
                    {filteredToners.map((toner, index) => (
                      <li
                        key={index}
                        className="px-3 py-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
                        onClick={() => handleTonerSelect(toner.type)}
                      >
                        {toner.type}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {selectedTonerInfo && (
                <div className="space-y-4">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-white">SAP Code</h2>
                    <p className="text-gray-600 dark:text-gray-400">{selectedTonerInfo.sapCode}</p>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Remarks</h2>
                    <p className="text-gray-600 dark:text-gray-400">{selectedTonerInfo.remarks}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}