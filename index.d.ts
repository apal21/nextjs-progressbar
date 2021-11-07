import { NProgressOptions } from "nprogress";
import * as React from "react";

declare class NextNProgress extends React.Component<{
  color?: string;
  height?: number;
  showOnShallow?: boolean;
  startPosition?: number;
  stopDelayMs?: number;
  nonce?: string;
  options?: Partial<NProgressOptions>;
}> {}

export default NextNProgress;
