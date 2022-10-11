import clsx from 'clsx'
import { AddIcon, CaretDownIcon, CaretUpIcon, TrashIcon } from '../common/icon'
import components from './components'

function AddButton({ ...rest }) {
    return (
        <button
            class="w-full p-1 grid grid-cols-[auto,min-content,auto] opacity-0 hover:opacity-100 transition-opacity"
            {...rest}
        >
            <hr />
            <AddIcon />
            <hr />
        </button>
    )
}

export default function Layers({
    blocks,
    setBlocks,
    selectedBlock,
    setSelectedBlock
}) {
    function ActionButton({ children, ...rest }) {
        return (
            <button {...rest} class="p-2">
                {children}
            </button>
        )
    }

    const moveBlockUp = index => {
        const temp = blocks.slice()
        temp.splice()
    }

    return (
        <div>
            <h1 class="bg-gray-750 text-white px-4 py-2 font-bold text-xl ">
                Sections
            </h1>
            <div class="p-4 grid">
                {blocks.map((block, i) => {
                    const { name, icon } = components[block.type]
                    const isSelected = selectedBlock === block
                    return (
                        <>
                            <AddButton />
                            <div class="grid cols-r gap-2">
                                <div
                                    class={clsx(
                                        'cursor-pointer select-none px-4 py-2 rounded-md flex gap-2',
                                        isSelected
                                            ? 'bg-blue-100'
                                            : 'bg-gray-100'
                                    )}
                                    onClick={() => setSelectedBlock(block)}
                                >
                                    {icon}
                                    <span>{name}</span>
                                </div>
                                <div class="flex gap-2">
                                    <ActionButton>
                                        <CaretUpIcon />
                                    </ActionButton>
                                    <ActionButton>
                                        <CaretDownIcon />
                                    </ActionButton>
                                    <ActionButton>
                                        <TrashIcon />
                                    </ActionButton>
                                </div>
                            </div>
                        </>
                    )
                })}
                <AddButton />
            </div>
        </div>
    )
}
