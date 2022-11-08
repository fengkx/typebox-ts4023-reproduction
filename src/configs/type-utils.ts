import {
  SchemaOptions,
  TOptional,
  TUnsafe,
  Type as T,
  TypeBuilder as TypeboxTypeBuilder,
} from '@sinclair/typebox';
import type { Except, Simplify } from 'type-fest';
import React from 'react';

// export { Kind, Modifier } from '@sinclair/typebox';
export type { Static } from '@sinclair/typebox';
export type { Simplify };


class TypeBuilder extends TypeboxTypeBuilder {
  Slot<T extends Except<SchemaOptions, 'x-index'>>(
    options?: T
  ): TOptional<TUnsafe<React.ReactNode>> & { type: 'slot' } {
    return {
      type: 'slot',
      ...Type.Optional(T.Unsafe<React.ReactNode>(options)),
    };
  }
}

export const Type = new TypeBuilder();