import {injectGlobal} from 'styled-components'

injectGlobal`
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1615535785114'); /* IE9 */
    src: url('./iconfont.eot?t=1615535785114#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
    url('./iconfont.woff?t=1615535785114') format('woff'),
    url('./iconfont.ttf?t=1615535785114') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1615535785114#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`











