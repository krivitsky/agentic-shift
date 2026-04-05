(function () {
  const output = document.getElementById('output');
  const inputLine = document.getElementById('input-line');
  const commandInput = document.getElementById('command-input');

  // ── Typing engine ──────────────────────────────────────────────

  function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function addLine(text, className) {
    const div = document.createElement('div');
    div.className = 'line' + (className ? ' ' + className : '');
    div.textContent = text;
    output.appendChild(div);
    scrollToBottom();
    return div;
  }

  function addHTML(html, className) {
    const div = document.createElement('div');
    div.className = 'line' + (className ? ' ' + className : '');
    div.innerHTML = html;
    output.appendChild(div);
    scrollToBottom();
    return div;
  }

  var isMobile = window.innerWidth <= 600;

  function scrollToBottom() {
    if (isMobile) {
      window.scrollTo(0, document.body.scrollHeight);
    } else {
      var terminal = document.getElementById('terminal');
      terminal.scrollTop = terminal.scrollHeight;
    }
  }

  async function typeText(text, className, speed) {
    speed = speed || 40;
    const div = document.createElement('div');
    div.className = 'line' + (className ? ' ' + className : '');
    output.appendChild(div);

    const cursor = document.createElement('span');
    cursor.className = 'typing-cursor';
    div.appendChild(cursor);

    for (let i = 0; i < text.length; i++) {
      const span = document.createTextNode(text[i]);
      div.insertBefore(span, cursor);
      scrollToBottom();
      await wait(speed + Math.random() * 20 - 10);
    }

    div.removeChild(cursor);
    return div;
  }

  async function typeLines(lines, className, speed) {
    for (const line of lines) {
      await typeText(line, className, speed);
    }
  }

  async function printInstant(lines, className) {
    for (const line of lines) {
      addLine(line, className);
      await wait(15);
    }
  }

  // ── ASCII Frauenkirche ─────────────────────────────────────────

  // Church without pretzel (printed first)
  const CHURCH_LINES = [
    '                                                          ',
    '              ___   ___                                   ',
    '             (o o) (o o)                                  ',
    '              | |   | |                                   ',
    '             .|.|. .|.|.                                  ',
    '             |. .| |. .|                                  ',
    '             | | | | | |      _____________________',
    '             |_|_| |_|_|     / / / / / / / / / / / /\\',
    '             |   | |   |    /_______________________/|',
    '             |   | |   |    | (_) (_) (_) (_) (_) (_)|  |',
    '             |   |_|   |____| (_) (_) (_) (_) (_) (_)|  |',
    '             |___|_|___|____|________________________|__|',
  ];

  // Full church + pretzel (replaces church lines after date is typed)
  // Shifted left to align with the left margin when pretzel pushes it
  const CHURCH_WITH_PRETZEL = [
    '                                              __       __',
    '  ___   ___                                 .\'  `\'._.\' `\'.',
    ' (o o) (o o)                               |  .--;   ;--.  |',
    '  | |   | |                                |  (  /   \\  )  |',
    ' .|.|. .|.|.                                \\  ;` /^\\ `;  /',
    ' |. .| |. .|                                 :` .\'._.\'.\' `;',
    ' | | | | | |      _____________________      \'-`\'.___.\' `-\'',
    ' |_|_| |_|_|     / / / / / / / / / / / /\\',
    ' |   | |   |    /_______________________/|',
    ' |   | |   |    | (_) (_) (_) (_) (_) (_)|  |',
    ' |   |_|   |____| (_) (_) (_) (_) (_) (_)|  |',
    ' |___|_|___|____|________________________|__|',
  ];

  // ── Commands ───────────────────────────────────────────────────

  function printHelp() {
    addLine('');
    addLine('  available commands:', 'help-header');
    addLine('');
    addHTML('    <span class="cmd">/help</span>            — show this message', 'help-item');
    addHTML('    <span class="cmd">/orga</span>            — meet the organizers', 'help-item');
    addHTML('    <span class="cmd">/speakers</span>        — meet the speakers', 'help-item');
    addHTML('    <span class="cmd">/program</span>         — conference program', 'help-item');
    addHTML('    <span class="cmd">/reg</span>             — register for the event', 'help-item');
    addHTML('    <span class="cmd">/contact</span>         — get in touch', 'help-item');
    addHTML('    <span class="cmd">/beer</span>            — prost!', 'help-item');
    addHTML('    <span class="cmd">/reboot</span>          — replay the intro', 'help-item');
    addLine('');
  }

  function printOrga() {
    var imgLine = document.createElement('div');
    imgLine.className = 'line orga-images';
    imgLine.innerHTML =
      '<div class="orga-card">' +
        '<a href="https://www.linkedin.com/in/alexeykrivitsky/" target="_blank" rel="noopener">' +
          '<img src="/images/alexey.png" alt="alexey" class="orga-img">' +
        '</a>' +
        '<div class="orga-name"><a href="https://www.linkedin.com/in/alexeykrivitsky/" target="_blank" rel="noopener">alexey krivitsky</a></div>' +
      '</div>' +
      '<div class="orga-card">' +
        '<a href="https://www.linkedin.com/in/ade-anima/" target="_blank" rel="noopener">' +
          '<img src="/images/martin.png" alt="martin" class="orga-img">' +
        '</a>' +
        '<div class="orga-name"><a href="https://www.linkedin.com/in/ade-anima/" target="_blank" rel="noopener">martin westphal</a></div>' +
      '</div>';
    output.appendChild(imgLine);
    addLine('');
    scrollToBottom();
  }

  function printSpeakers() {
    addLine('');
    addHTML('below are invited speakers. session topics being defined.', 'speakers-intro');
    addLine('');
    var speakers = [
      { slug: 'paul', name: 'paul stack', linkedin: 'https://www.linkedin.com/in/stack72/' },
      { slug: 'hendrik', name: 'hendrik mans', linkedin: 'https://www.linkedin.com/in/hmans/' },
      { slug: 'benedikt', name: 'benedikt stemmildt', linkedin: 'https://www.linkedin.com/in/benedikt-stemmildt/' },
      { slug: 'bjoern', name: 'björn rochel', linkedin: 'https://www.linkedin.com/in/bjoern-rochel/' },
      { slug: 'ingo', name: 'ingo eichhorst', linkedin: 'https://www.linkedin.com/in/ingo-eichhorst/' },
      { slug: 'unknown', name: 'cfp is open: alexey@krivitsky.com', linkedin: 'mailto:alexey@krivitsky.com', cfp: true },
    ];
    var imgLine = document.createElement('div');
    imgLine.className = 'line program-images';
    var html = '';
    for (var i = 0; i < speakers.length; i++) {
      var s = speakers[i];
      html +=
        '<div class="orga-card">' +
          '<a href="' + s.linkedin + '" target="_blank" rel="noopener">' +
            '<img src="/images/' + s.slug + '.png" alt="' + s.name + '" class="orga-img">' +
          '</a>' +
          '<div class="orga-name"><a href="' + s.linkedin + '" target="_blank" rel="noopener">' + s.name + '</a></div>' +
        '</div>';
    }
    imgLine.innerHTML = html;
    output.appendChild(imgLine);
    addLine('');
    scrollToBottom();
  }

  function printBeer() {
    addLine('');
    var l0 = addLine('', 'ascii');
    var l1 = addLine('', 'ascii');
    var l2 = addLine('', 'ascii');
    var l3 = addLine('', 'ascii');
    var l4 = addLine('', 'ascii');
    var prostLine = addLine('', 'title');
    addLine('');

    var beer = [l0, l1, l2, l3, l4];

    // Animation: glasses start far apart and slide together
    var keyframes = [
      [' .~~~.               .~~~. ',
       '_i===i               i===i_',
       '|ccc|_)             (_|ccc|',
       ' |ccc|               |ccc| ',
       ' `-==-\'             `-==-\' '],
      [' .~~~.             .~~~. ',
       '_i===i             i===i_',
       '|ccc|_)           (_|ccc|',
       ' |ccc|             |ccc| ',
       ' `-==-\'           `-==-\' '],
      [' .~~~.           .~~~. ',
       '_i===i           i===i_',
       '|ccc|_)         (_|ccc|',
       ' |ccc|           |ccc| ',
       ' `-==-\'         `-==-\' '],
      [' .~~~.         .~~~. ',
       '_i===i         i===i_',
       '|ccc|_)       (_|ccc|',
       ' |ccc|         |ccc| ',
       ' `-==-\'       `-==-\' '],
      [' .~~~.       .~~~. ',
       '_i===i       i===i_',
       '|ccc|_)     (_|ccc|',
       ' |ccc|       |ccc| ',
       ' `-==-\'     `-==-\' '],
      [' .~~~.     .~~~. ',
       '_i===i     i===i_',
       '|ccc|_)   (_|ccc|',
       ' |ccc|     |ccc| ',
       ' `-==-\'   `-==-\' '],
      [' .~~~.   .~~~. ',
       '_i===i   i===i_',
       '|ccc|_) (_|ccc|',
       ' |ccc|   |ccc| ',
       ' `-==-\' `-==-\' '],
      ['  .~~~. .~~~.  ',
       ' _i===ii===i_  ',
       '(_|ccc||ccc|_) ',
       '  |ccc||ccc|   ',
       '  `-==-`==-\'   '],
    ];

    var pad = '      ';
    var frame = 0;

    function renderFrame() {
      for (var i = 0; i < 5; i++) {
        beer[i].textContent = pad + keyframes[frame][i];
      }
      scrollToBottom();
    }

    renderFrame();

    var anim = setInterval(function () {
      frame++;
      if (frame >= keyframes.length) {
        clearInterval(anim);
        prostLine.textContent = '  prost!';
        // Foam wave after clink
        var waveState = 0;
        setInterval(function () {
          waveState = (waveState + 1) % 2;
          if (waveState === 0) {
            beer[0].textContent = pad + '  .~~~. .~~~.  ';
          } else {
            beer[0].textContent = pad + ' .~~~. .~~~.   ';
          }
        }, 600);
        return;
      }
      renderFrame();
    }, 150);
  }

  function handleCommand(raw) {
    const cmd = raw.trim().toLowerCase();

    // echo the command as a prompt line
    addHTML('<span style="color:var(--prompt-color);font-weight:bold">&gt;</span> <span class="typed-command">' + escapeHTML(raw) + '</span>', 'prompt-line');

    switch (cmd) {
      case '/help':
        printHelp();
        break;
      case '/program':
        addLine('');
        addLine('  coming soon...', 'dim');
        addLine('');
        break;
      case '/speakers':
        printSpeakers();
        break;
      case '/reg':
        startRegistration();
        break;
      case '/contact':
        addLine('');
        addHTML(
          'Alexey Krivitsky<br>' +
          'Josef-Obenhin-Str. 5<br>' +
          '80634 München, Germany<br>' +
          'VAT: DE301509127<br>' +
          '<a href="https://wa.me/+4915257400441" target="_blank" rel="noopener" class="venue-link">+49(0)15257400441</a><br>' +
          '<a href="mailto:alexey@krivitsky.com" class="venue-link">alexey@krivitsky.com</a>',
          'venue'
        );
        addLine('');
        break;
      case '/beer':
        printBeer();
        break;
      case '/orga':
        printOrga();
        break;
      case '/reboot':
        try { localStorage.removeItem('agenticShiftSeen'); } catch (e) {}
        location.reload();
        break;
      default:
        addLine('');
        addLine('  unknown command: ' + raw, 'dim');
        addLine('  type /help for available commands.', 'dim');
        addLine('');
        break;
    }

    scrollToBottom();
  }

  function escapeHTML(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // ── Registration flow ──────────────────────────────────────────

  var regFlow = null; // { step: 0, data: {} } when active

  var REG_STEPS = [
    { key: 'name',           label: 'name',                     required: true },
    { key: 'email',          label: 'email',                    required: true,
      validate: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? null : 'please enter a valid email';
      } },
    { key: 'role',           label: 'role (optional)',          required: false },
    { key: 'company',        label: 'company (optional)',       required: false },
    { key: 'payment_method', label: 'payment (card/invoice)',   required: true,
      validate: function (v) {
        var x = v.toLowerCase();
        return (x === 'card' || x === 'invoice') ? null : 'type "card" or "invoice"';
      },
      transform: function (v) { return v.toLowerCase(); } },
    { key: 'linkedin',       label: 'linkedin (optional)',      required: false },
    { key: 'comment',        label: 'comment (optional)',       required: false },
  ];

  function getStoredRegistration() {
    try {
      var raw = localStorage.getItem('agenticShiftRegistered');
      return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
  }

  function setStoredRegistration(name, email) {
    try {
      localStorage.setItem('agenticShiftRegistered', JSON.stringify({ name: name, email: email }));
    } catch (e) {}
  }

  function startRegistration() {
    var existing = getStoredRegistration();
    if (existing && existing.name) {
      regFlow = { confirming: true, step: 0, data: {} };
      addLine('');
      addLine('  you are already registered as ' + existing.name + '.', 'title');
      addLine('  register another person? (y/n)', 'dim');
      var label = document.getElementById('prompt-label');
      if (label) label.textContent = '(y/n)>';
      return;
    }
    regFlow = { step: 0, data: {} };
    addLine('');
    printRegPrice();
    addLine('  registration — type /cancel at any prompt to abort.', 'dim');
    addLine('');
    promptRegStep();
  }

  function printRegPrice() {
    var cfg = window.AGENTIC_CONFIG && window.AGENTIC_CONFIG.price;
    if (!cfg) return;
    var headline = cfg.regHeadline ? cfg.regHeadline + ', ' + cfg.display : 'price: ' + cfg.display;
    addLine('  ' + headline, 'title');
    addLine('');
  }

  function promptRegStep() {
    var step = REG_STEPS[regFlow.step];
    var label = document.getElementById('prompt-label');
    if (label) label.textContent = step.label + '>';
  }

  function handleRegInput(raw) {
    var val = raw.trim();

    if (val.toLowerCase() === '/cancel') {
      regFlow = null;
      resetPromptLabel();
      addLine('');
      addLine('  registration cancelled.', 'dim');
      addLine('');
      return;
    }

    // Confirmation stage: "already registered — register another person?"
    if (regFlow.confirming) {
      addHTML(
        '<span style="color:var(--prompt-color);font-weight:bold">(y/n)&gt;</span> ' +
        '<span class="typed-command">' + escapeHTML(raw) + '</span>',
        'prompt-line'
      );
      var answer = val.toLowerCase();
      if (answer === 'y' || answer === 'yes') {
        regFlow.confirming = false;
        addLine('');
        addLine('  registration — type /cancel at any prompt to abort.', 'dim');
        addLine('');
        promptRegStep();
      } else {
        regFlow = null;
        resetPromptLabel();
        addLine('');
        addLine('  ok, see you in Munich!', 'dim');
        addLine('');
      }
      return;
    }

    var step = REG_STEPS[regFlow.step];

    // Echo what the user typed in the prompt style
    addHTML(
      '<span style="color:var(--prompt-color);font-weight:bold">' + escapeHTML(step.label) + '&gt;</span> ' +
      '<span class="typed-command">' + escapeHTML(raw) + '</span>',
      'prompt-line'
    );

    if (step.required && !val) {
      addLine('  ' + step.label + ' is required.', 'dim');
      return; // re-prompt same step
    }

    if (val && step.validate) {
      var err = step.validate(val);
      if (err) {
        addLine('  ' + err, 'dim');
        return; // re-prompt same step
      }
    }

    regFlow.data[step.key] = step.transform ? step.transform(val) : val;
    regFlow.step++;

    if (regFlow.step >= REG_STEPS.length) {
      submitRegistration();
    } else {
      promptRegStep();
    }
  }

  function resetPromptLabel() {
    var label = document.getElementById('prompt-label');
    if (label) label.textContent = '>';
  }

  async function submitRegistration() {
    var data = regFlow.data;
    data.website = ''; // honeypot
    regFlow = null;
    resetPromptLabel();

    addLine('');
    addLine('  submitting...', 'dim');

    try {
      var res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      var body = await res.json().catch(function () { return { ok: false, error: 'bad response' }; });
      if (body.ok) {
        setStoredRegistration(data.name, data.email);
        addLine('');
        addLine('  [ok] registered. confirmation sent to ' + data.email, 'title');
        addLine('');
      } else {
        addLine('  [err] ' + (body.error || 'registration failed'), 'dim');
        addLine('  type /reg to try again.', 'dim');
        addLine('');
      }
    } catch (e) {
      addLine('  [err] network error — please try again later.', 'dim');
      addLine('');
    }
  }

  // ── Input handling ─────────────────────────────────────────────

  function showPrompt() {
    inputLine.classList.remove('hidden');
    commandInput.value = '';
    commandInput.focus();
    scrollToBottom();
  }

  commandInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      const val = commandInput.value;
      inputLine.classList.add('hidden');
      if (regFlow) {
        handleRegInput(val);
      } else if (val.trim()) {
        handleCommand(val);
      }
      showPrompt();
    }
  });

  // Keep focus on input
  document.addEventListener('click', function () {
    if (!inputLine.classList.contains('hidden')) {
      commandInput.focus();
    }
  });

  async function autoTypeCommand(text) {
    var id = 'auto-cmd-' + Date.now();
    addHTML('<span style="color:var(--prompt-color);font-weight:bold">&gt;</span> <span class="typed-command" id="' + id + '"></span>', 'prompt-line');
    scrollToBottom();
    await wait(1000);
    var span = document.getElementById(id);
    for (var i = 0; i < text.length; i++) {
      span.textContent += text[i];
      scrollToBottom();
      await wait(80);
    }
  }

  // ── Boot sequence ──────────────────────────────────────────────

  function hasSeenBoot() {
    try { return localStorage.getItem('agenticShiftSeen') === '1'; } catch (e) { return false; }
  }

  function markBootSeen() {
    try { localStorage.setItem('agenticShiftSeen', '1'); } catch (e) {}
  }

  function bootInstant() {
    document.body.classList.add('instant-boot');
    // Title
    addLine('welcome to agentic shift conference', 'title');
    addLine('');

    // Frauenkirche + pretzel (final, left-aligned state)
    for (var i = 0; i < CHURCH_WITH_PRETZEL.length; i++) {
      addLine(CHURCH_WITH_PRETZEL[i], 'ascii');
    }
    addLine('');

    // Location + date
    addLine('munich, june 20 or 27, 2026', 'title');

    // Venue info
    addHTML('<a href="https://maps.app.goo.gl/NmhFXz7aJb5zUXpy7" target="_blank" rel="noopener" class="venue-link">// codecentric, Plaza im Werksviertel<br>// august-everding-straße 20</a>', 'venue');
    addHTML('// price: ' + (window.AGENTIC_CONFIG && window.AGENTIC_CONFIG.price ? window.AGENTIC_CONFIG.price.display : '99–249 EUR'), 'venue');
    addLine('');

    // Separator
    var separator = document.createElement('div');
    separator.className = 'separator';
    output.appendChild(separator);
    addLine('');

    // /orga
    addHTML('<span style="color:var(--prompt-color);font-weight:bold">&gt;</span> <span class="typed-command">/orga</span>', 'prompt-line');
    printOrga();

    // /speakers
    addHTML('<span style="color:var(--prompt-color);font-weight:bold">&gt;</span> <span class="typed-command">/speakers</span>', 'prompt-line');
    printSpeakers();

    // /help
    addHTML('<span style="color:var(--prompt-color);font-weight:bold">&gt;</span> <span class="typed-command">/help</span>', 'prompt-line');
    printHelp();

    // Prompt
    showPrompt();
  }

  async function boot() {
    if (hasSeenBoot()) {
      bootInstant();
      return;
    }

    await wait(600);

    // Title
    await typeText('welcome to agentic shift conference', 'title', 35);

    await wait(400);
    addLine('');

    // Frauenkirche ASCII (church only first)
    var churchElements = [];
    for (var i = 0; i < CHURCH_LINES.length; i++) {
      churchElements.push(addLine(CHURCH_LINES[i], 'ascii'));
      await wait(15);
    }

    await wait(300);
    addLine('');

    // Location + date
    await typeText('munich, june 20 or 27, 2026', 'title', 35);

    await wait(400);

    // First: show church+pretzel at original centered position (add 12-space prefix)
    var shiftAmount = 12;
    function padPrefix(n) {
      var s = '';
      for (var k = 0; k < n; k++) s += ' ';
      return s;
    }
    for (var j = 0; j < CHURCH_WITH_PRETZEL.length; j++) {
      if (j < churchElements.length) {
        churchElements[j].textContent = padPrefix(shiftAmount) + CHURCH_WITH_PRETZEL[j];
      }
    }
    scrollToBottom();

    await wait(100);

    // Then: slide left one character at a time
    for (var step = shiftAmount - 1; step >= 0; step--) {
      for (var j = 0; j < CHURCH_WITH_PRETZEL.length; j++) {
        if (j < churchElements.length) {
          churchElements[j].textContent = padPrefix(step) + CHURCH_WITH_PRETZEL[j];
        }
      }
      await wait(40);
    }

    await wait(400);

    // Venue info (after shift completes)
    addHTML('<a href="https://maps.app.goo.gl/NmhFXz7aJb5zUXpy7" target="_blank" rel="noopener" class="venue-link">// codecentric, Plaza im Werksviertel<br>// august-everding-straße 20</a>', 'venue');
    addHTML('// price: ' + (window.AGENTIC_CONFIG && window.AGENTIC_CONFIG.price ? window.AGENTIC_CONFIG.price.display : '99–249 EUR'), 'venue');

    await wait(400);
    addLine('');

    // Separator line like Claude Code CLI
    var separator = document.createElement('div');
    separator.className = 'separator';
    output.appendChild(separator);
    addLine('');

    // Auto-type /orga
    await autoTypeCommand('/orga');
    await wait(400);
    printOrga();

    // Auto-type /speakers
    await wait(2500);
    await autoTypeCommand('/speakers');
    await wait(400);
    printSpeakers();

    // Auto-type /help
    await wait(2500);
    await autoTypeCommand('/help');
    await wait(400);
    printHelp();

    // Show interactive prompt with hint
    await wait(1000);
    showPrompt();
    var hint = 'type any command here...';
    for (var h = 0; h < hint.length; h++) {
      commandInput.value += hint[h];
      await wait(40);
    }
    await wait(1500);
    for (var b = hint.length; b > 0; b--) {
      commandInput.value = hint.substring(0, b - 1);
      await wait(30);
    }

    markBootSeen();
  }

  // ── Draggable window ────────────────────────────────────────────

  (function () {
    var frame = document.getElementById('terminal-frame');
    var titleBar = document.getElementById('title-bar');
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
      frame.style.top = rect.top + 'px';
      frame.style.margin = '0';
      titleBar.style.cursor = 'grabbing';
      e.preventDefault();
    });

    document.addEventListener('mousemove', function (e) {
      if (!isDragging) return;
      var x = e.clientX - offsetX;
      var y = e.clientY - offsetY;
      var fw = frame.offsetWidth;
      var fh = frame.offsetHeight;
      var vw = window.innerWidth;
      var vh = window.innerHeight;
      x = Math.max(0, Math.min(x, vw - fw));
      y = Math.max(0, Math.min(y, vh - fh));
      frame.style.left = x + 'px';
      frame.style.top = y + 'px';
    });

    document.addEventListener('mouseup', function () {
      if (!isDragging) return;
      isDragging = false;
      titleBar.style.cursor = '';
    });

    // Red button: close
    var redDot = document.querySelector('#title-bar .dot.red');
    if (redDot) {
      redDot.style.cursor = 'pointer';
      redDot.addEventListener('click', function (e) {
        e.stopPropagation();
        if (window.confirm('Are you sure?')) {
          window.close();
          // Fallback if window.close() is blocked (most browsers block it for non-script-opened tabs)
          setTimeout(function () {
            document.body.innerHTML = '<div style="color:#d67757;font-family:monospace;padding:40px;">goodbye.</div>';
          }, 100);
        }
      });
    }

    // Yellow button: minimize
    var yellowDot = document.querySelector('#title-bar .dot.yellow');
    var minimizedBar = document.getElementById('minimized-bar');
    var restoreBtn = document.getElementById('restore-button');
    var fakeBtn = document.getElementById('fake-button');
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
      if (fakeBtn) {
        fakeBtn.addEventListener('click', function (e) {
          e.preventDefault();
          // does nothing on purpose
        });
      }
    }

    // Green button: maximize / restore
    var greenDot = document.querySelector('#title-bar .dot.green');
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
          };
          frame.style.position = 'fixed';
          frame.style.left = '0';
          frame.style.top = '0';
          frame.style.width = '100vw';
          frame.style.height = '100vh';
          frame.style.margin = '0';
          frame.style.borderRadius = '0';
        } else {
          frame.style.width = savedState.width;
          frame.style.height = savedState.height;
          frame.style.left = savedState.left;
          frame.style.top = savedState.top;
          frame.style.position = savedState.position;
          frame.style.margin = savedState.margin;
          frame.style.borderRadius = savedState.borderRadius;
          savedState = null;
        }
      });
    }
  })();

  boot();
})();
