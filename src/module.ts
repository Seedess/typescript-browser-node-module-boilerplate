/**
 * A Sample Module
 */
export default class Module {

  /**
   * overrideable debugger
   */
  debug:Function = () => {}

  el:Element
  name:string

  /**
   * Create the scrollable
   * @param scrollableRef Container
   * @param panes A function or css selector is preferred for dynamic panes. HTMLCollection of static panes.
   */
  constructor(name:string, el:Element, debug:Function|undefined) {
    this.name = name
    this.el = el
    if (debug) this.debug = debug
    this.debug('created!', this)
  }

}
