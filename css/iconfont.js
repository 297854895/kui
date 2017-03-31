;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-info" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 0C229.229714 0 0 229.229714 0 512s229.229714 512 512 512 512-229.229714 512-512S794.770286 0 512 0zM512 146.285714c40.374857 0 73.142857 32.694857 73.142857 73.142857S552.374857 292.571429 512 292.571429 438.857143 259.876571 438.857143 219.428571 471.625143 146.285714 512 146.285714zM658.285714 804.571429 365.714286 804.571429l0-73.142857 73.142857 0L438.857143 438.857143 365.714286 438.857143 365.714286 365.714286l219.428571 0 0 365.714286 73.142857 0L658.285714 804.571429z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-warning" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1016.992 855.408l0.288-0.176-464-752-0.288 0.16C544.624 89.44 529.472 80 512 80c-16.832 0-31.568 8.688-40.144 21.792l-0.272-0.16-464 752 0.272 0.16C2.928 861.344 0 870.32 0 880c0 26.512 21.488 48 48 48 0.144 0 0.288-0.048 0.432-0.048l0 0.48 928 0 0-0.48C1002.736 927.712 1024 906.368 1024 880 1024 870.976 1021.36 862.624 1016.992 855.408zM512 832c-35.344 0-64-28.656-64-64s28.656-64 64-64 64 28.656 64 64S547.344 832 512 832zM576 592c0 35.344-28.656 64-64 64s-64-28.656-64-64L448 352c0-35.344 28.656-64 64-64s64 28.656 64 64L576 592z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-search" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M933.588339 815.261908 736.853629 618.529245c34.220383-55.431473 54.937217-120.153544 54.937217-190.122105 0-200.943568-162.897044-363.841635-363.840612-363.841635-200.943568 0-363.841635 162.898067-363.841635 363.841635 0 200.944592 162.898067 363.841635 363.841635 363.841635 69.969585 0 134.692678-20.772093 190.174294-54.991452l196.681498 196.788945c32.797987 32.797987 85.984327 32.797987 118.782314 0S966.386326 848.060919 933.588339 815.261908zM427.950234 680.296007c-139.119501 0-251.890914-112.826672-251.890914-251.888867 0-139.17476 112.771413-251.890914 251.890914-251.890914s251.890914 112.716154 251.890914 251.890914C679.840124 567.469336 567.068711 680.296007 427.950234 680.296007z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-angledown" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M797.142857 420.571429q0 7.428571-5.714286 13.142857l-266.285714 266.285714q-5.714286 5.714286-13.142857 5.714286t-13.142857-5.714286l-266.285714-266.285714q-5.714286-5.714286-5.714286-13.142857t5.714286-13.142857l28.571429-28.571429q5.714286-5.714286 13.142857-5.714286t13.142857 5.714286l224.571429 224.571429 224.571429-224.571429q5.714286-5.714286 13.142857-5.714286t13.142857 5.714286l28.571429 28.571429q5.714286 5.714286 5.714286 13.142857z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-angledoubleright" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M562.820967 534.193465l-266.100544 266.101567c-7.429203 7.429203-18.8493 7.429203-26.26827 0l-28.560476-28.550243c-7.41897-7.429203-7.41897-18.8493 0-26.26827l224.421282-224.422306-224.421282-224.421282c-7.41897-7.41897-7.41897-18.839067 0-26.26827l28.560476-28.550243c7.41897-7.41897 18.839067-7.41897 26.26827 0l266.100544 266.110777C570.25017 515.344165 570.25017 526.764262 562.820967 534.193465L562.820967 534.193465zM782.106276 534.193465 515.995499 800.295032c-7.419993 7.429203-18.84009 7.429203-26.269293 0l-28.550243-28.550243c-7.41897-7.429203-7.41897-18.8493 0-26.26827l224.421282-224.422306-224.421282-224.421282c-7.41897-7.41897-7.41897-18.839067 0-26.26827l28.550243-28.550243c7.429203-7.41897 18.8493-7.41897 26.269293 0l266.110777 266.110777C789.525246 515.344165 789.525246 526.764262 782.106276 534.193465z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-angleup" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M791.243377 643.913379l-28.54922 28.550243c-7.429203 7.41897-18.8493 7.41897-26.26827 0l-224.421282-224.421282-224.422306 224.421282c-7.41897 7.41897-18.839067 7.41897-26.26827 0l-28.550243-28.550243c-7.429203-7.429203-7.429203-18.8493 0-26.26827l266.100544-266.110777c7.430226-7.41897 18.8493-7.41897 26.26827 0l266.110777 266.110777C798.662347 625.064079 798.662347 636.485199 791.243377 643.913379z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-error" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 0C228.693333 0 0 228.693333 0 512s228.693333 512 512 512c283.306667 0 512-228.693333 512-512S795.306667 0 512 0zM723.626667 665.6c23.893333 23.893333 23.893333 61.44 0 81.92-23.893333 23.893333-61.44 23.893333-81.92 0L512 600.746667 382.293333 750.933333c-23.893333 23.893333-61.44 23.893333-81.92 0s-23.893333-61.44 0-81.92l136.533333-153.6-136.533333-153.6C276.48 334.506667 276.48 296.96 300.373333 273.066667c23.893333-23.893333 61.44-23.893333 81.92 0l129.706667 150.186667L641.706667 273.066667c23.893333-23.893333 61.44-23.893333 81.92 0 23.893333 23.893333 23.893333 61.44 0 81.92l-136.533333 153.6L723.626667 665.6z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-close" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M743.921605 338.356195 572.817646 509.47755l171.10396 171.122379 0 0c7.828292 7.828292 12.635785 18.625196 12.635785 30.549783 0 23.887037-19.335371 43.221384-43.185568 43.221384-11.943007 0-22.757307-4.824889-30.586622-12.634762l0 0L511.68124 570.59656 340.541465 741.737358l0 0c-7.828292 7.809873-18.606777 12.634762-30.549783 12.634762-23.887037 0-43.221384-19.335371-43.221384-43.221384 0-11.924587 4.842285-22.721491 12.634762-30.549783l0 0L450.544835 509.47755 279.404036 338.356195l0 0c-7.792477-7.828292-12.634762-18.625196-12.634762-30.568203 0-23.868617 19.335371-43.203988 43.221384-43.203988 11.943007 0 22.721491 4.823865 30.549783 12.653181l0 0 171.140799 171.121356L682.7852 277.237185l0 0c7.828292-7.829316 18.643616-12.653181 30.586622-12.653181 23.851221 0 43.185568 19.335371 43.185568 43.203988C756.55739 319.730998 751.750921 330.526879 743.921605 338.356195L743.921605 338.356195z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-close1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M496 144c-211.2 0-384 172.8-384 384 0 211.2 172.8 384 384 384 211.2 0 384-172.8 384-384C880 316.8 707.2 144 496 144zM678.4 665.6c12.8 12.8 12.8 32 0 44.8-6.4 6.4-16 9.6-22.4 9.6s-16-3.2-22.4-9.6l-137.6-137.6-137.6 137.6c-6.4 6.4-16 9.6-22.4 9.6s-16-3.2-22.4-9.6c-12.8-12.8-12.8-32 0-44.8l137.6-137.6-137.6-137.6c-12.8-12.8-12.8-32 0-44.8 12.8-12.8 32-12.8 44.8 0l137.6 137.6 137.6-137.6c12.8-12.8 32-12.8 44.8 0 12.8 12.8 12.8 32 0 44.8l-137.6 137.6L678.4 665.6z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-angleleft" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M595.77216 310.857143q0 7.424-5.705143 13.147429l-224.566857 224.566857 224.566857 224.566857q5.705143 5.705143 5.705143 13.147429t-5.705143 13.147429l-28.562286 28.562286q-5.705143 5.705143-13.147429 5.705143t-13.147429-5.705143l-266.294857-266.294857q-5.705143-5.705143-5.705143-13.147429t5.705143-13.147429l266.294857-266.294857q5.705143-5.705143 13.147429-5.705143t13.147429 5.705143l28.562286 28.562286q5.705143 5.705143 5.705143 13.147429z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-angleright" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M669.142857 548.571429q0 7.428571-5.714286 13.142857l-266.285714 266.285714q-5.714286 5.714286-13.142857 5.714286t-13.142857-5.714286l-28.571429-28.571429q-5.714286-5.714286-5.714286-13.142857t5.714286-13.142857l224.571429-224.571429-224.571429-224.571429q-5.714286-5.714286-5.714286-13.142857t5.714286-13.142857l28.571429-28.571429q5.714286-5.714286 13.142857-5.714286t13.142857 5.714286l266.285714 266.285714q5.714286 5.714286 5.714286 13.142857z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-success" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M507.904 36.864C241.664 36.864 32.768 249.856 32.768 512c0 262.144 212.992 475.136 475.136 475.136 262.144 0 475.136-212.992 475.136-475.136C987.136 249.856 774.144 36.864 507.904 36.864L507.904 36.864 507.904 36.864 507.904 36.864zM811.008 385.024c0 0-290.816 307.2-327.68 344.064-24.576 24.576-57.344 16.384-73.728 4.096l-208.896-188.416C184.32 524.288 184.32 491.52 204.8 471.04 225.28 450.56 253.952 450.56 274.432 471.04l172.032 155.648c0 0 299.008-311.296 299.008-311.296 20.48-20.48 49.152-20.48 69.632 0C831.488 331.776 831.488 364.544 811.008 385.024L811.008 385.024 811.008 385.024 811.008 385.024z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-telegram" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M679.428571 746.857143l84-396q5.142857-25.142857-6-36t-29.428571-4L234.285714 501.142857q-16.571429 6.285714-22.571428 14.285714t-1.428572 15.142858 18.285715 11.142857l126.285714 39.428571 293.142857-184.571428q12-8 18.285714-3.428572 4 2.857143-2.285714 8.571429l-237.142857 214.285714-9.142857 130.285714q13.142857 0 25.714285-12.571428l61.714286-59.428572 128 94.285715q36.571429 20.571429 46.285714-21.714286z m344.571429-234.857143q0 104-40.571429 198.857143t-109.142857 163.428571-163.428571 109.142857-198.857143 40.571429-198.857143-40.571429-163.428571-109.142857-109.142857-163.428571T0 512t40.571429-198.857143 109.142857-163.428571T313.142857 40.571429 512 0t198.857143 40.571429 163.428571 109.142857 109.142857 163.428571 40.571429 198.857143z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-angle-double-left" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M577.714286 786.285714q0 7.428571-5.714286 13.142857l-28.571429 28.571429q-5.714286 5.714286-13.142857 5.714286t-13.142857-5.714286L250.857143 561.714286q-5.714286-5.714286-5.714286-13.142857t5.714286-13.142858l266.285714-266.285714q5.714286-5.714286 13.142857-5.714286t13.142857 5.714286l28.571429 28.571429q5.714286 5.714286 5.714286 13.142857t-5.714286 13.142857L347.428571 548.571429l224.571429 224.571428q5.714286 5.714286 5.714286 13.142857z m219.428571 0q0 7.428571-5.714286 13.142857l-28.571428 28.571429q-5.714286 5.714286-13.142857 5.714286t-13.142857-5.714286L470.285714 561.714286q-5.714286-5.714286-5.714285-13.142857t5.714285-13.142858l266.285715-266.285714q5.714286-5.714286 13.142857-5.714286t13.142857 5.714286l28.571428 28.571429q5.714286 5.714286 5.714286 13.142857t-5.714286 13.142857L566.857143 548.571429l224.571428 224.571428q5.714286 5.714286 5.714286 13.142857z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-ellipsis" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M232.194 510.007m-77.055 0a77.055 77.055 0 1 0 154.11 0 77.055 77.055 0 1 0-154.11 0Z"  ></path>' +
    '' +
    '<path d="M512.756 587.064c-42.559 0-77.058-34.5-77.058-77.057a77.06 77.06 0 0 1 115.586-66.734 77.062 77.062 0 0 1 38.527 66.734c0.001 42.557-34.499 77.057-77.055 77.057z"  ></path>' +
    '' +
    '<path d="M792.377 510.007m-77.055 0a77.055 77.055 0 1 0 154.11 0 77.055 77.055 0 1 0-154.11 0Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)