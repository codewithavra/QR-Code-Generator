/**
 * @license Apache-2.0
 * @copyright codewithavra
 */

/**
 * Node modules
 */

import type { IconType } from "react-icons";

export type TemplateType = "Website URL" | "UPI id" | "Contact card" | "WIFI Network" | "Plain Text" | "Email Link"
export type ErrorCorrectionLevel = "L"| "M" | "Q" | "H"
export type Width = 150 | 200 | 300 | 400 | 500 | 600

export interface Options {
    width : Width,
    ecl : ErrorCorrectionLevel,
    background : string,
    foreground : string,
    data : string
}

export interface Preset {
    template : TemplateType,
    placeholder : string,
    icon :  IconType
}

export interface SizeOfQr {
    width : Width,
    size : string
}

export interface ECL {
    errorCorrectionLevel : ErrorCorrectionLevel,
    label : string
}