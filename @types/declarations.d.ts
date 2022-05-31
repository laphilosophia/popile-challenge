declare module '*.svg' {
  import * as React from 'react'
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >
}

declare namespace JSX {
  interface ExtendedDiv
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    label?: string
  }

  interface IntrinsicElements {
    div: ExtendedDiv
  }
}
