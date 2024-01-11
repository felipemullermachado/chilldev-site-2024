/// <reference types="next-stylus" />

declare type PageProps<Data = {}> = {
  pathname: string
} & Data