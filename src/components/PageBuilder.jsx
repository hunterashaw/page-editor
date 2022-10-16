import { useEffect, useState } from 'preact/hooks'
import { dset } from 'dset'
import render from 'preact-render-to-string'
import Properties from './Properties'
import Preview from './Preview'

export function PageBuilder({
    components,
    initialBlocks = [],
    setDataCallback,
    setHTMLCallback
}) {
    const [blocks, setBlocks] = useState(initialBlocks)
    const [selectedBlock, setSelectedBlock] = useState(null)

    const updateSelectedBlock = (name, value) => {
        dset(selectedBlock.properties, name, value)
        setBlocks(blocks.slice())
    }

    useEffect(() => {
        setDataCallback(() => blocks)
        setHTMLCallback(() =>
            blocks
                .map(({ type, properties }) => {
                    const { component: Component } = components[type]
                    return render(<Component {...properties} />)
                })
                .join('')
        )
    }, [blocks])

    return (
        <div class="grid cols-r h-full">
            <Preview
                {...{
                    components,
                    blocks,
                    setBlocks,
                    selectedBlock,
                    setSelectedBlock
                }}
            />
            <div class="w-[20vw] min-w-[350px] border-l border-solid border-gray-200">
                <Properties
                    {...{
                        components,
                        selectedBlock,
                        updateSelectedBlock
                    }}
                />
            </div>
        </div>
    )
}
