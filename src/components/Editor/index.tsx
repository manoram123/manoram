"use client";
import { useEffect, useState } from "react";
import {
  BlockNoteView,
  useBlockNote,
  lightDefaultTheme,
  Theme,
} from "@blocknote/react";
import "@blocknote/core/style.css";
import { Block, PartialBlock } from "@blocknote/core";

type EditorProps = {
  markdown: string;
};

const Editor: React.FC<EditorProps> = ({ markdown }) => {
  const [blocks, setBlocks] = useState<Array<PartialBlock>>();

  const theme = {
    ...lightDefaultTheme,
    componentStyles: (theme: Theme) => ({
      // Adds basic styling to the editor.
      Editor: {
        minHeight: "auto",
        backgroundColor: theme.colors.editor.background,
        borderRadius: theme.borderRadius,

        width: "100%",
        // border: `1px solid ${theme.colors.border}`,
        // boxShadow: `0 4px 12px ${theme.colors.shadow}`,
      },
      // Makes all hovered dropdown & menu items blue.

      Toolbar: {
        ".mantine-Menu-dropdown": {
          ".mantine-Menu-item:hover": {
            backgroundColor: "blue",
          },
        },
      },
    }),
  };

  const converter = useBlockNote();
  const markdownToBlocks = async () => {
    const conversion = await converter.markdownToBlocks(markdown);
    console.log(conversion);
    editor.replaceBlocks(editor.topLevelBlocks, conversion);
    setBlocks(conversion);
    return blocks;
  };

  useEffect(() => {
    markdownToBlocks();
  }, [markdown]);

  const editor = useBlockNote({
    editable: false,
    initialContent: blocks,
  });

  return <div>{blocks && <BlockNoteView editor={editor} theme={theme} />}</div>;
};

export default Editor;
