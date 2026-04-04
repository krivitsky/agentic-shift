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

  const FRAUENKIRCHE = [
    '                                                          __       __',
    '                                                        .\'  `\'._.\' `\'.',
    '              ___   ___                                |  .--;   ;--.  |',
    '             (o o) (o o)                               |  (  /   \\  )  |',
    '              | |   | |                                 \\  ;` /^\\ `;  /',
    '             .|.|. .|.|.                                 :` .\'._.\'.\' `;',
    '             |. .| |. .|                                  \'-`\'.___.\' `-\'',
    '             | | | | | |      _____________________',
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
    addHTML('    <span class="cmd">/beer</span>            — prost!', 'help-item');
    addHTML('    <span class="cmd">/help</span>            — show this message', 'help-item');
    addLine('');
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

  // ── Boot sequence ──────────────────────────────────────────────

  async function boot() {
    await wait(600);

    // Title
    await typeText('welcome to agentic shift conference', 'title', 35);

    await wait(400);
    addLine('');

    // Frauenkirche ASCII
    await printInstant(FRAUENKIRCHE, 'ascii');

    await wait(300);
    addLine('');

    // Location + date
    await typeText('munich, june 27, 2026', 'title', 35);

    await wait(600);
    addLine('');

    // Auto-type /help
    addHTML('<span style="color:var(--prompt-color);font-weight:bold">&gt;</span> <span class="typed-command" id="auto-help"></span>', 'prompt-line');
    const helpSpan = document.getElementById('auto-help');
    const helpText = '/help';
    for (let i = 0; i < helpText.length; i++) {
      helpSpan.textContent += helpText[i];
      scrollToBottom();
      await wait(80);
    }

    await wait(400);

    // Print help
    printHelp();

    // Show interactive prompt
    showPrompt();
  }

  boot();
})();
