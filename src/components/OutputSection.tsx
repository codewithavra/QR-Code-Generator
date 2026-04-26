/**
 * @license Apache-2.0
 * @copyright codewithavra
 */

/**
 * Node modules
 */
import { useState } from "react";

/**
 * icons
 */

import { BiColor } from "react-icons/bi";
import { MdPreview } from "react-icons/md";
import ColourPalette from "./ColourPalette";
import Output from "./Output";
import { BsQrCode } from "react-icons/bs";

type prop = {
  preview: boolean;
};

const OutputSection = ({ preview }: prop) => {
  const [background, setBackground] = useState("#ffffff");
  const [foreground, setForeground] = useState("#000000");
  return (
    <div className="flex size-full flex-col gap-4 rounded-md">
      <div className="flex h-fit w-full flex-col items-center justify-between gap-2 rounded-md border border-neutral-700/40 bg-neutral-100 p-2">
        <div className="flex w-full items-center gap-2 text-lg font-bold text-neutral-700">
          <MdPreview />
          <p>Preview</p>
        </div>
        <div className="h-fit w-full rounded-md border border-neutral-700/40">
        {
            preview === false ? <div className="h-56 w-full bg-neutral-400/40 flex justify-center items-center flex-col gap-2 text-neutral-500">
                <BsQrCode className="size-15 md:size-20" />
                <p>Your QR Code will appear here</p>
            </div> : <Output />
        }
        </div>
        <div className="h-fit w-full">
          {
            preview && <button className="rounded-md bg-green-600 px-4 py-2 text-neutral-50">
            Download svg
          </button>
          }
        </div>
      </div>
      <div className="h-fit w-full rounded-md border border-neutral-700/40 bg-neutral-100 p-2">
        <div className="flex items-center gap-2 pb-2 text-lg font-bold text-neutral-700">
          <BiColor />
          <p>Change Colour</p>
        </div>
        <div className="h-fit w-full rounded-md border border-neutral-700/40">
          <ColourPalette
            background={background}
            foreground={foreground}
            setBackground={setBackground}
            setForeground={setForeground}
          />
        </div>
      </div>
    </div>
  );
};

export default OutputSection;
