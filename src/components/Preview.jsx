import clsx from 'clsx'
import render from 'preact-render-to-string'
import { CaretDownIcon, CaretUpIcon, TrashIcon } from './Icons'
import AddSection from './AddSection'
import BlockContainer from './BlockContainer'

export default function Preview({
    components,
    blocks,
    setBlocks,
    selectedBlock,
    setSelectedBlock
}) {
    const addSection = (newBlock, i) => {
        const temp = blocks.slice()
        if (i !== undefined) temp.splice(i, 0, newBlock)
        else temp.push(newBlock)
        setBlocks(temp)
        setSelectedBlock(newBlock)
    }

    return (
        <div
            class="bg-gray-100 py-16 overflow-y-auto max-h-full"
            onClick={() => {
                setSelectedBlock(null)
            }}
        >
            {blocks.map((block, i) => {
                const { type, properties } = block
                const { component: Component, name } = components[type]
                const isSelected = selectedBlock === block

                const moveBlockUp = () => {
                    const temp = blocks.slice()
                    const [item] = temp.splice(i, 1)
                    temp.splice(i - 1, 0, item)
                    setBlocks(temp)
                }

                const moveBlockDown = () => {
                    const temp = blocks.slice()
                    const [item] = temp.splice(i, 1)
                    temp.splice(i + 1, 0, item)
                    setBlocks(temp)
                }

                const deleteBlock = () => {
                    if (window.confirm(`Delete '${name}' block?`)) {
                        if (isSelected) setSelectedBlock(null)
                        const temp = blocks.slice()
                        temp.splice(i, 1)
                        setBlocks(temp)
                    }
                }

                return (
                    <>
                        <AddSection
                            onClick={newBlock => addSection(newBlock, i)}
                            components={components}
                        />
                        <div
                            key={block.key}
                            class="group grid grid-cols-[4rem,auto] mr-16"
                            onClick={e => e.stopPropagation()}
                        >
                            <div
                                class={clsx(
                                    'relative grid justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity'
                                )}
                            >
                                <div class="grid">
                                    <button onClick={moveBlockUp}>
                                        <CaretUpIcon />
                                    </button>
                                    <button
                                        onClick={deleteBlock}
                                        class="text-red-800"
                                    >
                                        <TrashIcon />
                                    </button>
                                    <button onClick={moveBlockDown}>
                                        <CaretDownIcon />
                                    </button>
                                </div>
                            </div>
                            <BlockContainer
                                {...{
                                    block,
                                    isSelected,
                                    setSelectedBlock,
                                    html: render(<Component {...properties} />)
                                }}
                            />
                        </div>
                    </>
                )
            })}
            <AddSection
                components={components}
                onClick={addSection}
                open={Boolean(!blocks.length)}
            />
        </div>
    )
}
