export default function classNames(a: string, b: string | undefined, includeB: boolean | undefined = true): string {
  return b && includeB ? a.concat(' ', b) : a;
}
