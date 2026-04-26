/**
 * @license Apache-2.0
 * @copyright codewithavra
 */

/**
 * Node modules
 */
import React from "react";



type prop = {
  background: string;
  setBackground: React.Dispatch<React.SetStateAction<string>>;
  foreground: string;
  setForeground: React.Dispatch<React.SetStateAction<string>>;
};

const ColourPalette = ({
  background,
  setBackground,
  foreground,
  setForeground,
}: prop) => {
  return (
    <div className="flex size-full flex-col items-center justify-between p-4 gap-2 bg-neutral-400/40 rounded-md">
      <div className="flex w-full items-center justify-start gap-2">
        <label htmlFor="backgroundColour" className="flex gap-2 justify-center items-center">
          <p>Background Colour</p>
          <div
            className={`size-10 rounded-full border`}
            style={{ backgroundColor: background }}
          />
        </label>
        <input
          type="color"
          id="backgroundColour"
          value={background}
          onChange={(e) => setBackground(e.target.value)}
          className="sr-only"
        />
        <p>{background}</p>
      </div>
      <div className="flex w-full items-center justify-start gap-2">
        <label htmlFor="backgroundColour" className="flex gap-2 justify-center items-center">
          <p>Foreground Colour</p>
          <div
            className={`size-10 rounded-full border`}
            style={{ backgroundColor: foreground }}
          />
        </label>
        <input
          type="color"
          id="foregroundColour"
          value={foreground}
          onChange={(e) => setForeground(e.target.value)}
          className="sr-only"
        />
        <p>{foreground}</p>
      </div>
    </div>
  );
};

export default ColourPalette;
