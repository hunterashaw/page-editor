import { useState, useEffect } from 'preact/hooks'
import clsx from 'clsx'
import { AddIcon } from './Icons'

export function sanitizeProperties(properties) {
    const result = {}
    Object.entries(properties).forEach(([name, value]) => {
        if (Array.isArray(value) && typeof value[0] !== 'object')
            result[name] = value[0]
        else result[name] = value
    })
    return result
}

export default function AddSection({ components, onClick, open }) {
    const [showMenu, setShowMenu] = useState(false)
    const show = showMenu || open

    useEffect(() => {
        if (showMenu) {
            const closeMenu = () => setShowMenu(false)
            document.addEventListener('click', closeMenu)
            return () => document.removeEventListener('click', closeMenu)
        }
    }, [showMenu])

    return (
        <>
            <button
                class={clsx(
                    'relative mx-16 z-20 w-[calc(100%-8rem)] py-2 px-0 grid justify-center text-transparent bg-opacity-50 -my-[21px] bg-transparent transition hover:text-black hover:bg-blue-100/50',
                    show && '!text-black !bg-blue-100/50'
                )}
                onClick={() => setShowMenu(true)}
            >
                <AddIcon />
            </button>
            {show && (
                <div class="relative mt-[35px] mb-4 flex justify-center z-50 w-full">
                    <div
                        onClick={e => e.stopPropagation()}
                        class="border border-solid border-gray-200 p-4 bg-white"
                    >
                        <h1 class="mb-4 text-gray-800 text-xs">Add Section</h1>
                        <div class="grid grid-cols-3 gap-2 max-h-64 overflow-y-auto">
                            {Object.entries(components).map(
                                ([type, { name, icon, properties }]) => (
                                    <button
                                        class="hover:bg-gray-50 active:bg-gray-100 grid w-full"
                                        onClick={e => {
                                            setShowMenu(false)
                                            e.stopPropagation()
                                            onClick(
                                                JSON.parse(
                                                    JSON.stringify({
                                                        key: crypto.randomUUID(),
                                                        type,
                                                        properties:
                                                            sanitizeProperties(
                                                                properties
                                                            )
                                                    })
                                                )
                                            )
                                        }}
                                    >
                                        <span class="flex justify-center">
                                            {icon}
                                        </span>
                                        <span class="flex justify-center  text-sm">
                                            {name}
                                        </span>
                                    </button>
                                )
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
