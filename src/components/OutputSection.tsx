/**
 * @license Apache-2.0
 * @copyright codewithavra
 */

/**
 * Node modules
 */
import { type Dispatch, type RefObject, type SetStateAction } from "react";

/**
 * icons
 */

import { BiColor, BiDownload } from "react-icons/bi";
import { MdPreview } from "react-icons/md";
import ColourPalette from "./ColourPalette";
import { BsQrCode } from "react-icons/bs";
import type { Options } from "../types";
import { download } from "../utilities/download";

type prop = {
  preview: boolean;
  option: Options;
  setOption: Dispatch<SetStateAction<Options>>;
  canvasRef: RefObject<HTMLCanvasElement | null>;
};

const OutputSection = ({ preview, option, setOption, canvasRef }: prop) => {
  return (
    <div className="flex size-full flex-col gap-4 rounded-md">
      <div className="flex h-fit w-full flex-col items-center justify-between gap-2 rounded-md border border-neutral-700/40 bg-neutral-100 p-2">
        <div className="flex w-full items-center gap-2 text-lg font-bold text-neutral-700">
          <MdPreview />
          <p>Preview</p>
        </div>
        <div className="h-fit w-full overflow-auto rounded-md border border-neutral-700/40 bg-neutral-400/40 p-4 text-neutral-500">
          {!preview && (
            <div className="flex h-56 w-full flex-col items-center justify-center gap-2">
              <BsQrCode className="size-15 md:size-20" />
              <p>Your QR Code will appear here</p>
            </div>
          )}
          <canvas
            ref={canvasRef}
            className={preview ? "mx-auto size-full" : "hidden"}
          />
        </div>
        {preview && (
          <button
            className="flex h-fit w-full items-center justify-center gap-2 rounded-md bg-neutral-800 p-2 text-neutral-50 transition-transform duration-200 ease-in-out active:scale-95"
            onClick={() => {
              if (!canvasRef.current) return;
              download(canvasRef.current, "qr-Image.png");
            }}
          >
            <BiDownload />
            <p>Download PNG</p>
          </button>
        )}
      </div>
      <div className="h-fit w-full rounded-md border border-neutral-700/40 bg-neutral-100 p-2">
        <div className="flex items-center gap-2 pb-2 text-lg font-bold text-neutral-700">
          <BiColor />
          <p>Change Colour</p>
        </div>
        <div className="h-fit w-full rounded-md border border-neutral-700/40">
          <ColourPalette option={option} setOption={setOption} />
        </div>
      </div>
    </div>
  );
};

export default OutputSection;
