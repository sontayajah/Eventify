"use client";
import React, { useMemo } from "react";
import { generateHTML } from "@tiptap/html";

import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import EditorLink from "@tiptap/extension-link";
import EditorImage from "@tiptap/extension-image";
import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";

interface PostCardContentProps {
  htmlString: string;
}

export default function PostCardContent(props: PostCardContentProps) {
  const htmlJson = JSON.parse(props.htmlString);

  const output = useMemo(() => {
    if (htmlJson) {
      return generateHTML(htmlJson, [
        Color,
        TextStyle,
        StarterKit,
        Underline,
        TextAlign,
        Highlight,
        EditorLink,
        EditorImage,
      ]);
    }
  }, [htmlJson]);

  function stripHTMLtoString(html: string) {
    // Replace tags with a space and then collapse multiple spaces to a single space
    const textWithSpaces = html.replace(/<\/?[^>]+(>|$)/g, " ");
    return textWithSpaces.replace(/\s\s+/g, " ").trim();
  }

  return <>{output && stripHTMLtoString(output)}</>;
}
