import { ClassNamesExport } from 'classnames/bind';
export interface BoundCss {
    cx: ClassNamesExport;
    c(strings: TemplateStringsArray): string;
}
export default function bindCss(styles: Record<string, string>): BoundCss;
