/* eslint-disable @typescript-eslint/ban-ts-comment, import/no-unresolved */
import * as React from 'react';
import spriteHref from './icons-spritesheet.svg';
// @ts-ignore generated
import type { IconName } from './types.ts';

export function Icon({
  name,
  ...props
}: React.SVGProps<SVGSVGElement> & {
  name: IconName;
}) {
  return (
    <svg {...props}>
      <use href={`${spriteHref}#${name}`} />
    </svg>
  );
}
