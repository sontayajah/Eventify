
import { useCurrentEditor } from '@tiptap/react'
import React, { useCallback } from 'react'
import {
    BubbleMenu
} from '@tiptap/react'
import { AlignCenter, AlignLeft, AlignRight, Bold, Code2, EllipsisVertical, Heading, Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, Highlighter, ImagePlus, Italic, Link, List, ListOrdered, Quote, Redo2, RemoveFormatting, SeparatorHorizontal, SquareCode, Strikethrough, Underline, Undo2, WrapText } from 'lucide-react'

import { Separator } from '../ui/separator'

export default function TextEditorMenuBarMobile() {
    const { editor } = useCurrentEditor()

    const setLink = useCallback(() => {
        const previousUrl = editor.getAttributes('link').href
        const url = window.prompt('URL', previousUrl)

        // cancelled
        if (url === null) {
            return
        }

        // empty
        if (url === '') {
            editor.chain().focus().extendMarkRange('link').unsetLink()
                .run()

            return
        }

        // update link
        editor.chain().focus().extendMarkRange('link').setLink({ href: url })
            .run()
    }, [editor])

    const addImage = useCallback(() => {
        const url = window.prompt('URL')

        if (url) {
            editor.chain().focus().setImage({ src: url }).run()
        }
    }, [editor])

    if (!editor) {
        return null
    }

    return (
        <>
            {/* {editor && <BubbleMenu className="bubble-menu" tippyOptions={{ duration: 100 }} editor={editor}>
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={editor.isActive('bold') ? 'is-active' : ''}
                    title='Bold'
                >
                    Bold
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={editor.isActive('italic') ? 'is-active' : ''}
                    title='Italic'
                >
                    Italic
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleUnderline().run()}
                    className={editor.isActive('underline') ? 'is-active' : ''}
                    title='Underline'
                >
                    Underline
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    className={editor.isActive('strike') ? 'is-active' : ''}
                    title='Strike'
                >
                    Strike
                </button>
            </BubbleMenu>} */}

            <div className="mobile tiptap-menubar-container">
                <div className="tiptap-bar-parent flex justify-between">
                    <div className="tiptap-bar flex gap-4">
                        <button
                            onClick={() => editor.chain().focus().toggleBold().run()}
                            disabled={
                                !editor.can()
                                    .chain()
                                    .focus()
                                    .toggleBold()
                                    .run()
                            }
                            className={`${editor.isActive('bold') ? 'is-active' : ''} menu-item`}
                            title='Bold'
                        >
                            <Bold />
                        </button>
                        <button
                            onClick={() => editor.chain().focus().toggleItalic().run()}
                            disabled={
                                !editor.can()
                                    .chain()
                                    .focus()
                                    .toggleItalic()
                                    .run()
                            }
                            className={`${editor.isActive('italic') ? 'is-active' : ''} menu-item`}
                            title='Italic'
                        >
                            <Italic />
                        </button>
                        <button
                            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                            className={`${editor.isActive('heading', { level: 1 }) ? 'is-active' : ''} menu-item flex gap-4`}
                            title='Heading 1'
                        >
                            <Heading1 />
                        </button>
                        <button
                            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                            className={`${editor.isActive('heading', { level: 2 }) ? 'is-active' : ''} menu-item flex gap-4`}
                            title='Heading 2'
                        >
                            <Heading2 />
                        </button>
                        <button
                            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                            className={`${editor.isActive('heading', { level: 3 }) ? 'is-active' : ''} menu-item flex gap-4`}
                            title='Heading 3'
                        >
                            <Heading3 />
                        </button>
                        <button
                            onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
                            className={`${editor.isActive('heading', { level: 4 }) ? 'is-active' : ''} menu-item flex gap-4`}
                            title='Heading 4'
                        >
                            <Heading4 />
                        </button>
                        <button onClick={setLink} className={`${editor.isActive('link') ? 'is-active' : ''} menu-item`} title='Link'>
                            <Link />
                        </button>
                        <button
                            onClick={() => editor.chain().focus().toggleBulletList().run()}
                            className={`${editor.isActive('bulletList') ? 'is-active' : ''} menu-item`}
                            title='Bullet List'
                        >
                            <List />
                        </button>
                        <button
                            onClick={() => editor.chain().focus().toggleOrderedList().run()}
                            className={`${editor.isActive('orderedList') ? 'is-active' : ''} menu-item`}
                            title='Ordered List'
                        >
                            <ListOrdered />
                        </button>
                        <button onClick={addImage} className={`menu-item`}>
                            <ImagePlus />
                        </button>

                        <Separator orientation='vertical' className='h-10 mx-2' />

                        <button
                            onClick={() => editor.chain().focus().setTextAlign('left').run()}
                            className={`${editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''} menu-item`}
                            title='Align Left'
                        >
                            <AlignLeft />
                        </button>
                        <button
                            onClick={() => editor.chain().focus().setTextAlign('center').run()}
                            className={`${editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''} menu-item`}
                            title='Align Center'
                        >
                            <AlignCenter />
                        </button>
                        <button
                            onClick={() => editor.chain().focus().setTextAlign('right').run()}
                            className={`${editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''} menu-item`}
                            title='Align Right'
                        >
                            <AlignRight />
                        </button>

                        <Separator orientation='vertical' className='h-10 mx-2' />

                        <button
                            onClick={() => editor.chain().focus().toggleUnderline().run()}
                            disabled={
                                !editor.can()
                                    .chain()
                                    .focus()
                                    .toggleUnderline()
                                    .run()
                            }
                            className={`${editor.isActive('underline') ? 'is-active' : ''} menu-item`}
                            title='Underline'
                        >
                            <Underline />
                        </button>
                        <button
                            onClick={() => editor.chain().focus().toggleStrike().run()}
                            disabled={
                                !editor.can()
                                    .chain()
                                    .focus()
                                    .toggleStrike()
                                    .run()
                            }
                            className={`${editor.isActive('strike') ? 'is-active' : ''} menu-item`}
                            title='Strike'
                        >
                            <Strikethrough />
                        </button>
                        <button
                            onClick={() => editor.chain().focus().toggleHighlight({ color: '#ffc078' }).run()}
                            className={editor.isActive('highlight', { color: '#ffc078' }) ? 'is-active' : ''}
                            title='Highlight'
                        >
                            <Highlighter />
                        </button>

                        <Separator orientation='vertical' className='h-10 mx-2' />

                        <button
                            onClick={() => editor.chain().focus().toggleCode().run()}
                            disabled={
                                !editor.can()
                                    .chain()
                                    .focus()
                                    .toggleCode()
                                    .run()
                            }
                            className={`${editor.isActive('code') ? 'is-active' : ''} menu-item`}
                            title='Code'
                        >
                            <Code2 />
                        </button>
                        <button
                            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                            disabled={
                                !editor.can()
                                    .chain()
                                    .focus()
                                    .toggleCodeBlock()
                                    .run()
                            }
                            className={`${editor.isActive('codeBlock') ? 'is-active' : ''} menu-item`}
                            title='Code Block'
                        >
                            <SquareCode />
                        </button>
                        <button
                            onClick={() => editor.chain().focus().toggleBlockquote().run()}
                            className={`${editor.isActive('blockquote') ? 'is-active' : ''} menu-item`}
                            title='Quote'
                        >
                            <Quote />
                        </button>

                        <Separator orientation='vertical' className='h-10 mx-2' />

                        <button onClick={() => editor.chain().focus().setHorizontalRule().run()} className='menu-item' title='Horizontal Rule'>
                            <SeparatorHorizontal />
                        </button>
                        <button onClick={() => editor.chain().focus().setHardBreak().run()} className='menu-item' title='Hard Break'>
                            <WrapText />
                        </button>
                        <button onClick={() => {
                            editor.chain().focus().unsetAllMarks().run()
                            editor.chain().focus().clearNodes().run()
                        }}
                            className='menu-item'
                            title='Clear Format'>
                            <RemoveFormatting />
                        </button>

                        <Separator orientation='vertical' className='h-10 mx-2' />

                        <button
                            onClick={() => editor.chain().focus().undo().run()}
                            disabled={
                                !editor.can()
                                    .chain()
                                    .focus()
                                    .undo()
                                    .run()
                            }
                            className='menu-item'
                            title='Undo'
                        >
                            <Undo2 />
                        </button>
                        <button
                            onClick={() => editor.chain().focus().redo().run()}
                            disabled={
                                !editor.can()
                                    .chain()
                                    .focus()
                                    .redo()
                                    .run()
                            }
                            className='menu-item'
                            title='Redo'
                        >
                            <Redo2 />
                        </button>
                    </div>
                </div >
            </div>
        </>
    )
}

