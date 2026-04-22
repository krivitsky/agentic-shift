// Pixelated block banner — renders "AGENTIC SHIFT" as a grid of bricks.
(function () {
  const GLYPHS = {
    A: ['.XXX.', 'X...X', 'X...X', 'XXXXX', 'X...X', 'X...X', 'X...X'],
    G: ['.XXXX', 'X....', 'X....', 'X.XXX', 'X...X', 'X...X', '.XXXX'],
    E: ['XXXXX', 'X....', 'X....', 'XXXX.', 'X....', 'X....', 'XXXXX'],
    N: ['X...X', 'XX..X', 'X.X.X', 'X.X.X', 'X.X.X', 'X..XX', 'X...X'],
    T: ['XXXXX', '..X..', '..X..', '..X..', '..X..', '..X..', '..X..'],
    I: ['XXXXX', '..X..', '..X..', '..X..', '..X..', '..X..', 'XXXXX'],
    C: ['.XXXX', 'X....', 'X....', 'X....', 'X....', 'X....', '.XXXX'],
    S: ['.XXXX', 'X....', 'X....', '.XXX.', '....X', '....X', 'XXXX.'],
    H: ['X...X', 'X...X', 'X...X', 'XXXXX', 'X...X', 'X...X', 'X...X'],
    F: ['XXXXX', 'X....', 'X....', 'XXXX.', 'X....', 'X....', 'X....'],
    ' ': ['.....', '.....', '.....', '.....', '.....', '.....', '.....'],
  };

  const LETTER_W = 5;
  const LETTER_H = 7;
  const LETTER_GAP = 1; // columns of empty space between letters

  function renderWord(word) {
    const row = document.createElement('div');
    row.className = 'pixel-row';

    for (const ch of word) {
      const glyph = GLYPHS[ch.toUpperCase()] || GLYPHS[' '];
      const letter = document.createElement('div');
      letter.className = 'pixel-letter';
      letter.style.gridTemplateColumns = `repeat(${LETTER_W}, 1fr)`;
      letter.style.gridTemplateRows = `repeat(${LETTER_H}, 1fr)`;

      for (let r = 0; r < LETTER_H; r++) {
        const line = glyph[r];
        for (let c = 0; c < LETTER_W; c++) {
          const cell = document.createElement('div');
          cell.className = 'pixel' + (line[c] === 'X' ? ' on' : '');
          letter.appendChild(cell);
        }
      }
      row.appendChild(letter);
    }
    return row;
  }

  function render() {
    const host = document.getElementById('pixel-banner');
    if (!host) return;
    host.style.setProperty('--letter-gap', LETTER_GAP);
    host.appendChild(renderWord('AGENTIC'));
    host.appendChild(renderWord('SHIFT'));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
