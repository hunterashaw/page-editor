# Page Block Editor

React-based page block editor which accepts a set of react components that the user can use to assemble page content.
Outputs HTML & JSON data for static and dynamic rendering.

## Goal

To provide a simple, extensible page editor similar to Wordpress' Gutenberg: https://wordpress.org/gutenberg/

## Usage
From src/index.jsx:
``` javascript
import { render } from 'preact'
import { PageBuilder } from './components/PageBuilder'
import clsx from 'clsx'

// Define components available to page editor
const components = {
    cta: {
        name: 'Call to Action',
        description:
            'Single column section with a title, paragraph and button.',
        component: ({ title, subtitle, label, align }) => {
            const textAlignment = {
                left: 'text-left',
                center: 'text-center',
                right: 'text-right'
            }[align]

            const buttonAlignment = {
                left: 'justify-start',
                center: 'justify-center',
                right: 'justify-end'
            }[align]

            return (
                <section
                    class={clsx(
                        'py-24 grid gap-8 px-6 md:px-[10%] lg:px-[20%]',
                        textAlignment,
                        buttonAlignment
                    )}
                >
                    <h1 class="font-display text-6xl max-w-lg">{title}</h1>
                    <p class="text-sm max-w-lg">{subtitle}</p>
                    <div class={clsx('flex', buttonAlignment)}>
                        <button class="font-medium border-gray-400 border border-solid">
                            {label}
                        </button>
                    </div>
                </section>
            )
        },
        /*
            Property input controls are inferred by type:
            string && length < 30 = text input
            string && length > 30 = textarea
            number = number input
            boolean = checkbox (switch)
            string[] = multiple choice w/ buttons, first element is default
        */
        properties: {
            title: 'Lorem ipsum dolor sit amet, consectetur',
            subtitle:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            label: 'Get Started',
            align: ['left', 'center', 'right']
        },
        icon: (
            <svg
                class="w-6 h-6"
                width="300"
                height="300"
                viewBox="0 0 300 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    x="11"
                    y="52"
                    width="277"
                    height="55"
                    fill="currentColor"
                />
                <rect
                    x="11"
                    y="136"
                    width="219.074"
                    height="13.0574"
                    fill="currentColor"
                />
                <rect
                    x="11"
                    y="157"
                    width="177"
                    height="13"
                    fill="currentColor"
                />
                <rect
                    x="11"
                    y="178"
                    width="200"
                    height="13"
                    fill="currentColor"
                />
                <rect
                    x="11"
                    y="220"
                    width="94.3033"
                    height="27.5656"
                    rx="6"
                    fill="currentColor"
                />
            </svg>
        )
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let getHTML, getData
    document.getElementById('data-button').addEventListener('click', () => {
        alert(JSON.stringify(getData(), null, 2))
    })
    document.getElementById('html-button').addEventListener('click', () => {
        alert(getHTML())
    })
    render(
        <PageBuilder
            {...{
                components,
                setDataCallback: c => {
                    getData = c
                },
                setHTMLCallback: c => {
                    getHTML = c
                }
            }}
        />,
        document.getElementById('page-builder')
    )
})
```
