"use client";
import { useState, useEffect } from "react";
import { useBlockNote } from "@blocknote/react";
import React from "react";
import { PartialBlock } from "@blocknote/core";

const RenderToHTML = ({ markdown }: { markdown: string }) => {
  const [blocks, setBlocks] = useState<string>("");

  const editor = useBlockNote();
  const markdownToBlocks = async () => {
    const conversion = await editor.markdownToBlocks(markdown);
    const html = await editor.blocksToHTML(conversion);
    console.log(html);
    editor.replaceBlocks(editor.topLevelBlocks, conversion);
    setBlocks(html);
    return blocks;
  };

  useEffect(() => {
    markdownToBlocks();
  }, [markdown]);
  return <div dangerouslySetInnerHTML={{ __html: blocks }}></div>;
};

export default RenderToHTML;
