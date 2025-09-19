// types/react-syntax-highlighter.d.ts
declare module "react-syntax-highlighter" {
  import * as React from "react";

  export interface SyntaxHighlighterProps {
    language?: string;
    style?: Record<string, React.CSSProperties>;
    showLineNumbers?: boolean;
    customStyle?: React.CSSProperties;
    children: string;
  }

  export class Prism extends React.Component<SyntaxHighlighterProps> {}
  export class Light extends React.Component<SyntaxHighlighterProps> {}
  export class SyntaxHighlighter extends React.Component<SyntaxHighlighterProps> {}
}