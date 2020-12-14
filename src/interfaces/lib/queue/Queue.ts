export interface IQueue {
  bull: object
  name: string
  handle: Function
  options:
    | {
        delay: number
      }
    | undefined
}
