import { Type, Static } from './type-utils';
import type { Simplify } from 'type-fest';

const data = Type.Object({
  contentSlot: Type.Slot({
    type: 'slot',
  }),
});

export type DataType = Simplify<Static<typeof data>>;