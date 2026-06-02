// Window chrome for the homepage terminal frame: macOS traffic-light dots
// (close / minimize / maximize) + draggable title bar. No commands, no boot.
(function () {
  var frame = document.getElementById('terminal-frame');
  var titleBar = document.getElementById('title-bar');
  if (!frame || !titleBar) return;

  // ── Draggable window ───────────────────────────────────────────
  var isDragging = false;
  var offsetX, offsetY;

  titleBar.addEventListener('mousedown', function (e) {
    if (e.target.classList.contains('dot')) return;
    isDragging = true;
    var rect = frame.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    frame.style.position = 'absolute';
    frame.style.left = rect.left + 'px';
    frame.style.top = rect.top + window.scrollY + 'px';
    frame.style.margin = '0';
    titleBar.style.cursor = 'grabbing';
    e.preventDefault();
  });

  document.addEventListener('mousemove', function (e) {
    if (!isDragging) return;
    var x = e.clientX - offsetX;
    var y = e.clientY - offsetY + window.scrollY;
    var vw = window.innerWidth;
    var fw = frame.offsetWidth;
    x = Math.max(0, Math.min(x, vw - fw));
    y = Math.max(0, y);
    frame.style.left = x + 'px';
    frame.style.top = y + 'px';
  });

  document.addEventListener('mouseup', function () {
    if (!isDragging) return;
    isDragging = false;
    titleBar.style.cursor = '';
  });

  // ── Red: close ─────────────────────────────────────────────────
  var redDot = titleBar.querySelector('.dot.red');
  if (redDot) {
    redDot.style.cursor = 'pointer';
    redDot.addEventListener('click', function (e) {
      e.stopPropagation();
      if (window.confirm('Are you sure?')) {
        window.close();
        setTimeout(function () {
          document.body.innerHTML =
            '<div style="color:#d67757;font-family:monospace;padding:40px;">goodbye.</div>';
        }, 100);
      }
    });
  }

  // ── Yellow: minimize ───────────────────────────────────────────
  var yellowDot = titleBar.querySelector('.dot.yellow');
  var minimizedBar = document.getElementById('minimized-bar');
  var restoreBtn = document.getElementById('restore-button');
  if (yellowDot && minimizedBar && restoreBtn) {
    yellowDot.style.cursor = 'pointer';
    yellowDot.addEventListener('click', function (e) {
      e.stopPropagation();
      frame.style.transition = 'transform 0.4s ease, opacity 0.4s ease';
      frame.classList.add('minimized');
      setTimeout(function () {
        minimizedBar.classList.add('visible');
      }, 400);
    });
    restoreBtn.addEventListener('click', function () {
      frame.classList.remove('minimized');
      minimizedBar.classList.remove('visible');
      setTimeout(function () {
        frame.style.transition = '';
      }, 400);
    });
  }

  // ── Green: maximize / restore ──────────────────────────────────
  var greenDot = titleBar.querySelector('.dot.green');
  var savedState = null;
  if (greenDot) {
    greenDot.style.cursor = 'pointer';
    greenDot.addEventListener('click', function (e) {
      e.stopPropagation();
      if (!savedState) {
        savedState = {
          width: frame.style.width,
          height: frame.style.height,
          left: frame.style.left,
          top: frame.style.top,
          position: frame.style.position,
          margin: frame.style.margin,
          borderRadius: frame.style.borderRadius,
          overflowY: frame.style.overflowY,
        };
        frame.style.position = 'fixed';
        frame.style.left = '0';
        frame.style.top = '0';
        frame.style.width = '100vw';
        frame.style.height = '100vh';
        frame.style.margin = '0';
        frame.style.borderRadius = '0';
        frame.style.overflowY = 'auto';
      } else {
        frame.style.width = savedState.width;
        frame.style.height = savedState.height;
        frame.style.left = savedState.left;
        frame.style.top = savedState.top;
        frame.style.position = savedState.position;
        frame.style.margin = savedState.margin;
        frame.style.borderRadius = savedState.borderRadius;
        frame.style.overflowY = savedState.overflowY;
        savedState = null;
      }
    });
  }
})();
