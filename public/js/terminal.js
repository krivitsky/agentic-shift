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

  function scrollToBottom() {
    const terminal = document.getElementById('terminal');
    terminal.scrollTop = terminal.scrollHeight;
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
  const CHURCH_WITH_PRETZEL = [
    '                                                          __       __',
    '              ___   ___                                 .\'  `\'._.\' `\'.',
    '             (o o) (o o)                               |  .--;   ;--.  |',
    '              | |   | |                                |  (  /   \\  )  |',
    '             .|.|. .|.|.                                \\  ;` /^\\ `;  /',
    '             |. .| |. .|                                 :` .\'._.\'.\' `;',
    '             | | | | | |      _____________________      \'-`\'.___.\' `-\'',
    '             |_|_| |_|_|     / / / / / / / / / / / /\\',
    '             |   | |   |    /_______________________/|',
    '             |   | |   |    | (_) (_) (_) (_) (_) (_)|  |',
    '             |   |_|   |____| (_) (_) (_) (_) (_) (_)|  |',
    '             |___|_|___|____|________________________|__|',
  ];

  // ── Commands ───────────────────────────────────────────────────

  function printHelp() {
    addLine('');
    addLine('  available commands:', 'help-header');
    addLine('');
    addHTML('    <span class="cmd">/program</span>         — conference program', 'help-item');
    addHTML('    <span class="cmd">/registration</span>    — register for the event', 'help-item');
    addHTML('    <span class="cmd">/contact</span>         — get in touch', 'help-item');
    addHTML('    <span class="cmd">/orga</span>            — meet the organizers', 'help-item');
    addHTML('    <span class="cmd">/beer</span>            — prost!', 'help-item');
    addHTML('    <span class="cmd">/help</span>            — show this message', 'help-item');
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

  function printBeer() {
    addLine('');
    addLine('        .~~~.   .~~~.', 'ascii');
    addLine('       _i===i   i===i_', 'ascii');
    addLine('      (_|ccc|   |ccc|_)', 'ascii');
    addLine('        |ccc|   |ccc|', 'ascii');
    addLine('        `-==-\' `-==-\'', 'ascii');
    addLine('');
    addLine('  prost!', 'title');
    addLine('');
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
      case '/registration':
        addLine('');
        addLine('  coming soon...', 'dim');
        addLine('');
        break;
      case '/contact':
        addLine('');
        addLine('  coming soon...', 'dim');
        addLine('');
        break;
      case '/beer':
        printBeer();
        break;
      case '/orga':
        printOrga();
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
      if (val.trim()) {
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
    addHTML('<span style="color:var(--prompt-color);font-weight:bold">&gt;</span> <span class="typing-cursor"></span><span class="typed-command" id="' + id + '"></span>', 'prompt-line');
    scrollToBottom();
    await wait(1000);
    var line = document.getElementById(id).parentElement;
    var cursor = line.querySelector('.typing-cursor');
    var span = document.getElementById(id);
    for (var i = 0; i < text.length; i++) {
      span.textContent += text[i];
      scrollToBottom();
      await wait(80);
    }
    if (cursor) cursor.remove();
  }

  // ── Boot sequence ──────────────────────────────────────────────

  async function boot() {
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
    await typeText('munich, june 27, 2026', 'title', 35);

    await wait(400);

    // Now replace church lines with church+pretzel version
    for (var j = 0; j < CHURCH_WITH_PRETZEL.length; j++) {
      if (j < churchElements.length) {
        churchElements[j].textContent = CHURCH_WITH_PRETZEL[j];
      }
    }
    scrollToBottom();

    await wait(400);
    addLine('');

    // Auto-type /orga
    await autoTypeCommand('/orga');
    await wait(400);
    printOrga();

    // Auto-type /help
    await autoTypeCommand('/help');
    await wait(400);
    printHelp();

    // Show interactive prompt with hint
    showPrompt();
    var hint = 'type any command here...';
    for (var h = 0; h < hint.length; h++) {
      commandInput.value += hint[h];
      await wait(40);
    }
    await wait(1000);
    for (var b = hint.length; b > 0; b--) {
      commandInput.value = hint.substring(0, b - 1);
      await wait(30);
    }
  }

  boot();
})();
