import { render } from 'preact'
import { useState } from 'preact/hooks'

import Header from './components/header'
import { AddIcon, ButtonIcon, ParagraphIcon } from './common/icon'
import Properties from './components/properties'
import Layers from './components/layers'
import Preview from './components/preview'

function PageBuilder() {
    const [blocks, setBlocks] = useState([
        {
            key: '1',
            type: 'paragraph',
            properties: { content: 'Hello world.' }
        },
        { key: '2', type: 'button', properties: { text: 'Hello world.' } },
        { key: '3', type: 'paragraph', properties: { content: 'Hello world.' } }
    ])
    const [selectedBlock, setSelectedBlock] = useState(blocks[0])
    const updateSelectedBlock = (name, value) => {
        const i = blocks.findIndex(({ key }) => selectedBlock.key === key)
        blocks[i].properties[name] = value
        setBlocks(blocks.slice())
    }

    return (
        <div>
            <Header />
            <div class="grid cols-r h-[calc(100%-3rem)]">
                <Preview {...{ blocks, selectedBlock, setSelectedBlock }} />
                <div class="grid grid-rows-2 min-w-[20vw] border-l border-solid border-gray-200">
                    <Layers
                        {...{
                            blocks,
                            setBlocks,
                            selectedBlock,
                            setSelectedBlock
                        }}
                    />
                    <Properties
                        {...{
                            selectedBlock,
                            updateSelectedBlock
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

document.addEventListener('DOMContentLoaded', () => {
    render(<PageBuilder />, document.getElementById('page-builder'))
})
