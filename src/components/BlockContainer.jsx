import clsx from 'clsx'
import { useEffect, useRef, useState } from 'preact/hooks'

export default function BlockContainer({
    setSelectedBlock,
    isSelected,
    block,
    html
}) {
    const containerRef = useRef()
    const [container, setContainer] = useState()

    useEffect(() => {
        if (containerRef.current) {
            const shadow = containerRef.current.attachShadow({ mode: 'open' })

            const stylesheet = document.createElement('link')
            stylesheet.setAttribute('href', 'style.css')
            stylesheet.setAttribute('rel', 'stylesheet')
            shadow.appendChild(stylesheet)

            const containerElement = document.createElement('div')
            shadow.appendChild(containerElement)
            setContainer(containerElement)
        }
    }, [containerRef])

    useEffect(() => {
        if (container) container.innerHTML = html
    }, [container, html])

    return (
        <div
            ref={containerRef}
            class={clsx(
                'bg-white',
                isSelected && 'outline outline-blue-200 z-10'
            )}
            onClick={() => {
                setSelectedBlock(block)
            }}
        />
    )
}
