export type Menu = {
  name: string,
  path: string,
  param: string,
}

export type ToggleProps  = {
  toggleNavBar?(): any,
  toggleState?: boolean
}

export type ToggleModalProps = {
  setShowModal(value: boolean): any
  showModal?: boolean
}