import Module from '../module'

// sample css import will be extracted to external css file
import '../css/theme.scss'

// sample declare module in global window scope
Object.assign(window, { Module })

// sample export module for CommonJS
export default Module