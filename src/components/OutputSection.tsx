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
import { drawWithText } from "../utilities/canvasWithText";

type prop = {
  preview: boolean;
  option: Options;
  setOption: Dispatch<SetStateAction<Options>>;
  canvasRef: RefObject<HTMLCanvasElement | null>;
  heading: string;
  description: string;
};

const OutputSection = ({
  preview,
  option,
  setOption,
  canvasRef,
  heading,
  description,
}: prop) => {
  return (
    <div className="flex size-full flex-col gap-4 rounded-md">
      <div className="flex h-fit w-full flex-col items-center justify-between gap-2 rounded-md border border-neutral-700/40 bg-neutral-100 p-2">
        <div className="flex w-full items-center gap-2 text-lg font-bold text-neutral-700">
          <MdPreview />
          <p>Preview</p>
        </div>
        <div className="h-fit w-full overflow-auto rounded-md border border-neutral-700/40 bg-neutral-400/40 p-4 text-neutral-700">
          {!preview && (
            <div className="flex h-56 w-full flex-col items-center justify-center gap-2">
              <BsQrCode className="size-15 md:size-20" />
              <p>Your QR Code will appear here</p>
            </div>
          )}

          <div
            className={`flex flex-col items-center gap-2 ${preview ? "" : "hidden"}`}
          >
            {heading && <p className="text-center text-lg font-semibold">{heading}</p>}

            <canvas ref={canvasRef} className="mx-auto" />

            {description && (
              <p className="text-center text-sm text-neutral-600">{description}</p>
            )}
          </div>
        </div>

        {/* Download QR button */}
        {preview && (
          <button
            className="flex h-fit w-full items-center justify-center gap-2 rounded-md bg-neutral-800 p-2 text-neutral-50 transition-transform duration-200 ease-in-out active:scale-95"
            onClick={() => {
              if (!canvasRef.current) return;

              const finalCanvas = drawWithText(
                canvasRef.current,
                heading,
                description
              );

              if (finalCanvas) {
                download(finalCanvas, "qr-Image.png");
              }
            }}
          >
            <BiDownload />
            <p>Download PNG</p>
          </button>
        )}
      </div>
      {/* advance settings section */}
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
