declare module "react-drag-sizing" {
  import { ComponentType, ReactNode } from "react";

  interface DragSizingProps {
    direction?: "vertical" | "horizontal";
    defaultSize?: number;
    minSize?: number;
    maxSize?: number;
    className?: string;
    children?: ReactNode;
  }

  export const DragSizing: ComponentType<DragSizingProps>;
}
