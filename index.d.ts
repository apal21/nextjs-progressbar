import * as React from 'react';
import { NProgressOptions } from 'nprogress';

declare class NextNProgress extends React.Component<{
  color?: string;
  height?: number;
  showOnShallow?: boolean;
  startPosition?: number;
  stopDelayMs?: number;
  showSpinner?: boolean;
  options?: Partial<NProgressOptions>;
}> { }

export default NextNProgress;
