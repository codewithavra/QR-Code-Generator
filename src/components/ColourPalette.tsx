/**
 * @license Apache-2.0
 * @copyright codewithavra
 */

/**
 * Node modules
 */
import { type Dispatch, type SetStateAction } from "react";

/**
 * types
 */
import type { Options } from "../types";

/**
 * utilities
 */
import { updateOption } from "../utilities/updateOption";

type prop = {
  option: Options;
  setOption: Dispatch<SetStateAction<Options>>;
};

const ColourPalette = ({ option, setOption }: prop) => {
  return (
    <div className="flex size-full flex-col items-center justify-between gap-2 rounded-md bg-neutral-400/40 p-4">
      <div className="flex w-full items-center justify-start gap-2">
        <label
          htmlFor="backgroundColour"
          className="flex items-center justify-center gap-2"
        >
          <p>Background Colour</p>
          <div
            className={`size-10 rounded-full border`}
            style={{ backgroundColor: option.background }}
          />
        </label>
        <input
          type="color"
          id="backgroundColour"
          value={option.background}
          onChange={(e) =>
            updateOption(setOption, "background", e.target.value)
          }
          className="sr-only"
        />
        <p>{option.background}</p>
      </div>
      <div className="flex w-full items-center justify-start gap-2">
        <label
          htmlFor="foregroundColour"
          className="flex items-center justify-center gap-2"
        >
          <p>Foreground Colour</p>
          <div
            className={`size-10 rounded-full border`}
            style={{ backgroundColor: option.foreground }}
          />
        </label>
        <input
          type="color"
          id="foregroundColour"
          value={option.foreground}
          onChange={(e) =>
            updateOption(setOption, "foreground", e.target.value)
          }
          className="sr-only"
        />
        <p>{option.foreground}</p>
      </div>
    </div>
  );
};

export default ColourPalette;
