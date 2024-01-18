/// <reference types="next-stylus" />

declare type PageProps<Data = {}> = {
  pathname: string
} & Data

declare module 'match-media'

declare type Breakpoint = 'phone' | 'tablet' | 'desktop'