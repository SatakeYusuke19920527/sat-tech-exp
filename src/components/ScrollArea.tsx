import { WithChildren } from '@/types/common';
import {
  Corner,
  Root,
  Scrollbar,
  Thumb,
  Viewport,
} from '@radix-ui/react-scroll-area';

const SCROLLBAR_SIZE = 4;

type Props = WithChildren;

export const ScrollArea = ({ children }: Props) => (
  <Root>
    <Viewport>{children}</Viewport>
    <Scrollbar orientation="vertical">
      <Thumb />
    </Scrollbar>
    <Corner />
  </Root>
);
