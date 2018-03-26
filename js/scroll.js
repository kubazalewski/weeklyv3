function getElementY(query) {
    return window.pageYOffset + document.querySelector(query).getBoundingClientRect().top
  }
  
  function doScrolling(element, duration) {
      var startingY = window.pageYOffset
    var elementY = getElementY(element)

    // If element is close to page's bottom then window will scroll only to some position above the element.
    var targetY = document.body.scrollHeight - elementY < window.innerHeight ? document.body.scrollHeight - window.innerHeight : elementY
      var diff = targetY - startingY

    // Easing function
    var easing = function (t) { return t * (2 - t); }
    var start
  
    if (!diff) return
  
      window.requestAnimationFrame(function step(timestamp) {
      if (!start) start = timestamp
      // Elapsed miliseconds since start of scrolling.
      var time = timestamp - start
          // Get percent of completion in range [0, 1].
      var percent = Math.min(time / duration, 1)
      // Apply the easing.
      percent = easing(percent)
  
      // -80 applied at the end to compensate navbar height and prevent overlapping some section's parts
      window.scrollTo(0, startingY + diff * percent - 80)
  
      if (time < duration) {
        window.requestAnimationFrame(step)
      }
    })
  }
  
  // Applying event handlers
  document.getElementById('nav-home').addEventListener('click', doScrolling.bind(null, '#home', 1000))
  document.getElementById('nav-about').addEventListener('click', doScrolling.bind(null, '#about', 1000))
  document.getElementById('nav-blog').addEventListener('click', doScrolling.bind(null, '#blog', 1000))
  document.getElementById('nav-portfolio').addEventListener('click', doScrolling.bind(null, '#portfolio', 1000))
  document.getElementById('nav-contact').addEventListener('click', doScrolling.bind(null, '#contact', 1000))