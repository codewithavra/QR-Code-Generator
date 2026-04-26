/**
 * @license Apache-2.0
 * @copyright codewithavra
 */

/**
 * Node modules
 */
import React from 'react'

type prop = {
    preview: boolean;
    setPreview: React.Dispatch<React.SetStateAction<boolean>>;
  };

const InputSection = ({ preview, setPreview }: prop) => {
  return (
    <div className="size-full "></div>
  )
}

export default InputSection