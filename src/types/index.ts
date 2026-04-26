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
