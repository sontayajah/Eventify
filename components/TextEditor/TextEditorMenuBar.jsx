
import { useCurrentEditor } from '@tiptap/react'
import React, { useEffect } from 'react'
import TextEditorMenuBarNormal from '@/components/TextEditor/TextEditorMenuBarNormal'
import TextEditorMenuBarMobile from '@/components/TextEditor/TextEditorMenuBarMobile'

export default function TextEditorMenuBar(props) {
    const { editor } = useCurrentEditor()

    useEffect(() => {
        props.setEditor(editor)
    }, [props, editor])

    if (!editor) {
        return null
    }

    return (
        <>
            <div className="block lg:hidden">
                <TextEditorMenuBarMobile />
            </div>

            <div className="hidden lg:block">
                <TextEditorMenuBarNormal />
            </div>

        </>
    )
}

