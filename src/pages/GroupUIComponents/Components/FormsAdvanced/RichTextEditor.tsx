import { useEffect, useRef, useState } from "react";
import {
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Quote,
  Link,
  Undo2,
  Redo2,
  Eraser,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Image
} from "lucide-react";

type RichTextEditorProps = {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
  minHeight?: number;
  disabled?: boolean;
};

type Command =
  | "bold"
  | "italic"
  | "underline"
  | "insertUnorderedList"
  | "insertOrderedList"
  | "formatBlock"
  | "createLink"
  | "undo"
  | "redo"
  | "removeFormat"
  | "justifyLeft"
  | "justifyCenter"
  | "justifyRight"
  | "justifyFull";

export function RichTextEditor({
  value,
  onChange,
  placeholder = "พิมพ์รายละเอียด...",
  minHeight = 220,
  disabled = false,
}: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const [focused, setFocused] = useState(false);
  
  useEffect(() => {
    if (!editorRef.current) return;

    if (editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value;
    }
  }, [value]);

  const runCommand = (command: Command, commandValue?: string) => {
    if (disabled) return;

    editorRef.current?.focus();

    document.execCommand(command, false, commandValue);

    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const handleInput = () => {
    if (!editorRef.current) return;
    onChange(editorRef.current.innerHTML);
  };

  const addLink = () => {
    const url = window.prompt("กรอก URL เช่น https://example.com");

    if (!url) return;

    runCommand("createLink", url);
  };

  const clearFormat = () => {
    runCommand("removeFormat");
  };

  
  const [selectedImage, setSelectedImage] = useState<HTMLImageElement | null>(null);
  const imageInputRef = useRef<HTMLInputElement | null>(null);

  
  const insertImageFromFile = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      editorRef.current?.focus();

      document.execCommand(
        "insertImage",
        false,
        reader.result as string
      );

      if (editorRef.current) {
        onChange(editorRef.current.innerHTML);
      }
    };

    reader.readAsDataURL(file);
  };



  const resizeSelectedImage = (width: string) => {
    if (!selectedImage) return;

    // eslint-disable-next-line react-hooks/immutability
    selectedImage.style.width = width;
    selectedImage.style.height = "auto";
    selectedImage.style.borderRadius = "12px";

    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const handleEditorClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;

    editorRef.current
      ?.querySelectorAll("img")
      .forEach((img) => {
        img.classList.remove("ring-4", "ring-blue-300");
      });

    if (target.tagName === "IMG") {
      const image = target as HTMLImageElement;

      // image.classList.add("ring-4", "ring-blue-300");
      // image.style.borderRadius = "12px";

      setSelectedImage(image);
      return;
    }

    setSelectedImage(null);
  };

  const alignSelectedImage = (align: "left" | "center" | "right") => {
    if (!selectedImage) return;

    // eslint-disable-next-line react-hooks/immutability
    selectedImage.style.display = "block";

    if (align === "left") {
      selectedImage.style.marginLeft = "0";
      selectedImage.style.marginRight = "auto";
    }

    if (align === "center") {
      selectedImage.style.marginLeft = "auto";
      selectedImage.style.marginRight = "auto";
    }

    if (align === "right") {
      selectedImage.style.marginLeft = "auto";
      selectedImage.style.marginRight = "0";
    }

    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };


  return (
    <div
      className={`
        overflow-hidden rounded-3xl border bg-white shadow-sm transition
        dark:bg-slate-900
        ${
          focused
            ? "border-blue-500 ring-4 ring-blue-100 dark:ring-blue-900/30"
            : "border-slate-200 dark:border-slate-700"
        }
        ${disabled ? "opacity-60" : ""}
      `}
    >
      <div className="flex flex-wrap items-center gap-1 p-2 border-b border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800">
        <ToolbarButton
          icon={<Bold size={17} />}
          title="Bold"
          onClick={() => runCommand("bold")}
        />
        <ToolbarButton
          icon={<Italic size={17} />}
          title="Italic"
          onClick={() => runCommand("italic")}
        />
        <ToolbarButton
          icon={<Underline size={17} />}
          title="Underline"
          onClick={() => runCommand("underline")}
        />

        <ToolbarButton
          title="H1"
          icon={<span className="text-xs font-bold">H1</span>}
          onClick={() => runCommand("formatBlock", "h1")}
        />

        <ToolbarButton
          title="H2"
          icon={<span className="text-xs font-bold">H2</span>}
          onClick={() => runCommand("formatBlock", "h2")}
        />

        <ToolbarButton
          title="H3"
          icon={<span className="text-xs font-bold">H3</span>}
          onClick={() => runCommand("formatBlock", "h3")}
        />

        <ToolbarButton
          title="H4"
          icon={<span className="text-xs font-bold">H4</span>}
          onClick={() => runCommand("formatBlock", "h4")}
        />

        <ToolbarButton
          title="H5"
          icon={<span className="text-xs font-bold">H5</span>}
          onClick={() => runCommand("formatBlock", "h5")}
        />

        <ToolbarButton
          title="H6"
          icon={<span className="text-xs font-bold">H6</span>}
          onClick={() => runCommand("formatBlock", "h6")}
        />

        <Divider />

          <ToolbarButton
            icon={<List size={17} />}
            title="Bullet List"
            onClick={() => runCommand("insertUnorderedList")}
          />
          <ToolbarButton
            icon={<ListOrdered size={17} />}
            title="Number List"
            onClick={() => runCommand("insertOrderedList")}
          />
          <ToolbarButton
            icon={<Quote size={17} />}
            title="Quote"
            onClick={() => runCommand("formatBlock", "blockquote")}
          />

        <Divider />

          <ToolbarButton
            icon={<Link size={17} />}
            title="Link"
            onClick={addLink}
          />
          <ToolbarButton
            icon={<Eraser size={17} />}
            title="Clear Format"
            onClick={clearFormat}
          />

        <Divider />

          <ToolbarButton
            icon={<Undo2 size={17} />}
            title="Undo"
            onClick={() => runCommand("undo")}
          />
          <ToolbarButton
            icon={<Redo2 size={17} />}
            title="Redo"
            onClick={() => runCommand("redo")}
          />

        <Divider />

          <ToolbarButton
            icon={<AlignLeft size={17} />}
            title="Align Left"
            onClick={() => runCommand("justifyLeft")}
          />

          <ToolbarButton
            icon={<AlignCenter size={17} />}
            title="Align Center"
            onClick={() => runCommand("justifyCenter")}
          />

          <ToolbarButton
            icon={<AlignRight size={17} />}
            title="Align Right"
            onClick={() => runCommand("justifyRight")}
          />

          <ToolbarButton
            icon={<AlignJustify size={17} />}
            title="Justify"
            onClick={() => runCommand("justifyFull")}
          />

          <ToolbarButton
            icon={<Image size={17} />}
            title="Insert Image"
            onClick={() => imageInputRef.current?.click()}
          />
      </div>

      <div className="relative">
        {!value && !focused && (
          <div className="absolute text-sm pointer-events-none left-5 top-4 text-slate-400">
            {placeholder}
          </div>
        )}

        <div
          ref={editorRef}
          contentEditable={!disabled}
          suppressContentEditableWarning
          onInput={handleInput}
          onClick={handleEditorClick}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{ minHeight }}
          className="px-5 py-4 prose-sm prose outline-none max-w-none text-slate-800 prose-headings:text-slate-900 prose-a:text-blue-600 prose-blockquote:border-blue-500 dark:prose-invert dark:text-slate-100"
        />
        <input
          ref={imageInputRef}
          type="file"
          accept="image/*"
          hidden
          onChange={insertImageFromFile}
        />
        {selectedImage && (
          <>
            <Divider />
            <button
              type="button"
              onClick={() => alignSelectedImage("left")}
              className="px-3 py-2 text-xs font-semibold rounded-xl text-slate-600 hover:bg-white hover:text-blue-600"
            >
              Img Left
            </button>

            <button
              type="button"
              onClick={() => alignSelectedImage("center")}
              className="px-3 py-2 text-xs font-semibold rounded-xl text-slate-600 hover:bg-white hover:text-blue-600"
            >
              Img Center
            </button>

            <button
              type="button"
              onClick={() => alignSelectedImage("right")}
              className="px-3 py-2 text-xs font-semibold rounded-xl text-slate-600 hover:bg-white hover:text-blue-600"
            >
              Img Right
            </button>
            |
            <button
              type="button"
              onClick={() => resizeSelectedImage("25%")}
              className="px-3 py-2 text-xs font-semibold rounded-xl text-slate-600 hover:bg-white hover:text-blue-600"
            >
              25%
            </button>

            <button
              type="button"
              onClick={() => resizeSelectedImage("50%")}
              className="px-3 py-2 text-xs font-semibold rounded-xl text-slate-600 hover:bg-white hover:text-blue-600"
            >
              50%
            </button>

            <button
              type="button"
              onClick={() => resizeSelectedImage("75%")}
              className="px-3 py-2 text-xs font-semibold rounded-xl text-slate-600 hover:bg-white hover:text-blue-600"
            >
              75%
            </button>

            <button
              type="button"
              onClick={() => resizeSelectedImage("100%")}
              className="px-3 py-2 text-xs font-semibold rounded-xl text-slate-600 hover:bg-white hover:text-blue-600"
            >
              100%
            </button>
          </>
        )}
      </div>
    </div>
  );
}

function ToolbarButton({
  icon,
  title,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      className="inline-flex items-center justify-center transition h-9 w-9 rounded-xl text-slate-600 hover:bg-white hover:text-blue-600 hover:shadow-sm dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-blue-300"
    >
      {icon}
    </button>
  );
}

function Divider() {
  return <div className="w-px h-6 mx-1 bg-slate-200 dark:bg-slate-700" />;
}