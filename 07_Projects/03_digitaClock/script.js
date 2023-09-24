const clock = document.getElementById("clock")
// document.querySelector('#clock')

/**
 * both line 1 and 2 can be used to select
 */


/**
 * setInterval help to run in every interval of time here it is 1000 i.e 1 seconds
 */

setInterval(function () {
  let date = new Date()
    clock.innerHTML = date.toLocaleTimeString()
}, 1000)
