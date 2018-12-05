declare module 'classnames/bind' {
  import classNamesExport from 'classnames'
  import { bind }         from 'classnames/bind'

  const classNames = {
    bind: ClassNamesExport,
  }

  export default classNames
  export type ClassNamesExport = typeof classNamesExport
}
