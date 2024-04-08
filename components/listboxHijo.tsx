"use client"
import { useState } from 'react'
import { Listbox } from '@headlessui/react'

const people = [
  { id: 1, name: '1' },
  { id: 2, name: '2'  },
  { id: 3, name: '3'},
  { id: 4, name: '4' },
  { id: 5, name: '5' },
]

const MyListbox = () => {
  const [selectedPerson, setSelectedPerson] = useState(people[0])

  return (
    <Listbox value={selectedPerson} onChange={setSelectedPerson}>
      <Listbox.Button className="bg-white text-gray-900 py-2 px-4 rounded-md">{selectedPerson.name}</Listbox.Button>
      <Listbox.Options className="bg-white rounded-[20px]">
        {people.map((person) => (
          <Listbox.Option
            key={person.id}
            value={person}
            className={({ active }) =>
            `cursor-default select-none relative py-1 pl-10 pr-3 ${
              active ? 'rounded-[10px] bg-gray-100 text-[#FC83A1]' : 'text-black'
            }`
          }
        >
          {({ selected, active }) => (
            <>
              <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                {person.name}
              </span>
              {selected ? (
                <span
                  className={`absolute inset-y-0 left-0 flex items-center pl-1 ${
                    active ? 'text-[#FC83A1]' : 'text-[#FC83A1]'
                  }`}
                >
                  {/* Icono o indicador de selección, puedes usar un SVG o un ícono de alguna librería */}
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
              ) : null}
            </>
          )}
        </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}

export default MyListbox;
