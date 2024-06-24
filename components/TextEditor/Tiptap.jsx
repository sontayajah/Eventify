"use client"

import "../../styles/editor.css"

import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import { EditorProvider } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React, { useMemo } from 'react'
import TextEditorMenuBar from '@/components/TextEditor/TextEditorMenuBar'
import BubbleMenu from '@tiptap/extension-bubble-menu'
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import Placeholder from '@tiptap/extension-placeholder'
import Highlight from '@tiptap/extension-highlight'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import { generateHTML } from '@tiptap/html'

const Tiptap = (props) => {
  const postData = props.postData;

  // Conditional check for postData
  const content = useMemo(() => {
    if (!postData) return null; // Return null or handle as needed

    const content = postData.content;
    try {
      const json = JSON.parse(content);
      return generateHTML(json, [
        Color,
        TextStyle,
        StarterKit,
        BubbleMenu,
        Underline,
        TextAlign,
        Placeholder,
        Highlight,
        Link,
        Image
      ]);
    } catch (error) {
      console.error("Failed to parse content JSON:", error);
      return null; // Return null or handle the error as needed
    }
  }, [postData]);

  const extensions = [
    Color.configure({ types: [TextStyle.name, ListItem.name] }),
    TextStyle.configure({ types: [ListItem.name] }),
    StarterKit.configure({
      bulletList: {
        keepMarks: true,
        keepAttributes: false,
      },
      orderedList: {
        keepMarks: true,
        keepAttributes: false,
      },
    }),
    BubbleMenu,
    Underline.configure({ types: [TextStyle.name, ListItem.name] }),
    TextAlign.configure({
      types: ['heading', 'paragraph'],
    }),
    Placeholder.configure({
      emptyEditorClass: 'is-editor-empty',
      placeholder: 'เพิ่มเนื้อหาโพสต์ของคุณได้ที่นี่...',
    }),
    Highlight,
    Link.configure({
      autolink: true,
      openOnClick: false,
      defaultProtocol: 'https',
    }),
    Image.configure({
      inline: true,
    }),
  ]

  return (
    <>
      <EditorProvider slotBefore={<TextEditorMenuBar setEditor={props.setEditor} />} extensions={extensions} content={content} editorProps={{
        attributes: {
          class: "focus:outline-none mx-auto px-4 sm:container prose prose-neutral lg:prose-lg dark:prose-invert max-w-full"
        }
      }} />
    </>
  )
}

export default Tiptap