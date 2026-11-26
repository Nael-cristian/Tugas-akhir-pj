
@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700;800&display=swap');

:root {
  --bg: #f8f7f4;
  --ink: #27252d;
  --muted: #85818e;
  --line: #e9e6e0;
  --purple: #6950df;
  --purple-dark: #5b43d1;
  --lavender: #eee8fc;
  --green: #5c8d70;
  --white: #fff;
  --radius: 17px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: #eeece8;
  color: var(--ink);
  font-family: 'DM Sans', Arial, sans-serif;
}

button, select, input {
  font: inherit;
}

button {
  cursor: pointer;
}

.app-shell {
  width: min(100%, 1120px);
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 42px;
  background: var(--bg);
  display: flex;
  flex-direction: column;
}

.topbar {
  height: 76px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--line);
  gap: 18px;
}

.brand {
  color: var(--ink);
  font-size: 25px;
  font-weight: 800;
  letter-spacing: -1.3px;
  text-decoration: none;
}

.brand span {
  color: var(--purple);
}

.brand-caption {
  color: var(--muted);
  font-size: 10px;
  margin-left: 2px;
  white-space: nowrap;
}

.main-nav {
  display: flex;
  gap: 7px;
  margin: 0 auto;
}

.nav-link {
  border: 0;
  border-radius: 30px;
  background: transparent;
  padding: 9px 17px;
  color: #77727f;
  font-size: 11px;
}

.nav-link.active {
  color: var(--purple);
  background: #eee8fc;
}

.top-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.streak-pill {
  background: #fff0d9;
  color: #a45b1a;
  border-radius: 30px;
  padding: 8px 13px;
  font-size: 10px;
  white-space: nowrap;
}

.streak-pill b {
  font-weight: 600;
}

.button {
  border: 0;
  border-radius: 10px;
  padding: 12px 17px;
  font-size: 11px;
  font-weight: 700;
  transition: .18s ease;
}

.button:hover {
  transform: translateY(-1px);
  filter: brightness(.98);
}

.button-primary {
  background: var(--purple);
  color: white;
}

.button-primary:hover {
  background: var(--purple-dark);
}

.button-dark {
  background: #26242c;
  color: white;
}

.button-white {
  background: white;
  color: var(--ink);
}

.button-small {
  padding: 10px 15px;
  font-size: 10px;
  border-radius: 25px;
}

.mobile-menu {
  display: none;
  border: 0;
  background: transparent;
  font-size: 21px;
}

main {
  flex: 1;
}

.page {
  display: none;
  padding: 30px 0 34px;
}

.page.active {
  display: block;
  animation: appear .25s ease;
}

@keyframes appear {
  from {
    opacity: .3;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

/* HERO */

.hero-grid {
  display: grid;
  grid-template-columns: 1.05fr .95fr;
  gap: 34px;
  align-items: center;
  padding: 0 0 25px;
}

.hero-copy {
  padding: 4px 0 0;
}

.eyebrow {
  display: inline-block;
  color: var(--purple);
  background: #eee8fc;
  border-radius: 30px;
  padding: 7px 11px;
  font-size: 8px;
  font-weight: 700;
  letter-spacing: .2px;
}

.hero-copy h1 {
  font-size: clamp(34px, 4.4vw, 49px);
  letter-spacing: -2.1px;
  line-height: 1.06;
  margin: 17px 0 16px;
}

.hero-description {
  max-width: 390px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.65;
  margin: 0 0 21px;
}

.hero-buttons {
  display: flex;
  gap: 10px;
}

.hero-buttons .button {
  padding: 13px 18px;
}

.micro-copy {
  color: var(--muted);
  font-size: 9px;
  margin: 12px 0 0 2px;
}

/* KEYBOARD PREVIEW */

.flow-card {
  background: #eee8fc;
  border-radius: 22px;
  padding: 22px;
  min-height: 292px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.flow-card .eyebrow {
  padding: 0;
  background: transparent;
}

.flow-card h2 {
  font-size: 19px;
  letter-spacing: -.4px;
  margin: 9px 0 13px;
}

.sample-typing {
  min-height: 49px;
  border-radius: 11px;
  background: #f8f5ff;
  color: var(--purple);
  display: flex;
  align-items: center;
  padding: 0 14px;
  font-family: 'DM Mono', monospace;
  font-size: 13px;
}

.sample-typing i {
  height: 18px;
  border-left: 1px solid var(--purple);
  margin-left: 3px;
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

.keyboard-art,
.keyboard-live {
  background: #dcd3f0;
  border-radius: 13px;
  margin-top: 14px;
  padding: 12px 9px 8px;
}

.key-row {
  display: flex;
  justify-content: center;
  gap: 4px;
  margin-bottom: 4px;
}

kbd {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 27px;
  border-radius: 6px;
  background: #fff;
  color: #777083;
  font: 9px 'DM Sans', sans-serif;
  box-shadow: 0 1px 1px #c9c1d8;
}

.indent {
  padding-left: 20px;
}

.indent-more {
  padding-left: 38px;
}

kbd.key-hot {
  background: var(--purple);
  color: white;
}

.space-key {
  width: 42%;
  height: 15px;
  font-size: 8px;
  color: #aaa3b3;
}

/* SUMMARY */

.summary-strip {
  background: white;
  border-radius: 15px;
  padding: 17px 18px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 0 28px;
}

.summary-item {
  padding: 0 18px;
  border-right: 1px solid var(--line);
}

.summary-item:first-child {
  padding-left: 0;
}

.summary-item:last-child {
  border: 0;
}

.summary-item > span,
.mini-stat span {
  display: block;
  color: #77727f;
  font-size: 8px;
  margin-bottom: 5px;
}

.summary-item strong {
  display: block;
  font-size: 23px;
  line-height: 1.2;
}

.summary-item strong small {
  color: var(--muted);
  font-size: 10px;
  font-weight: 400;
}

.summary-item em {
  display: block;
  margin-top: 5px;
  color: var(--muted);
  font-size: 9px;
  font-style: normal;
}

.summary-item:first-child em {
  color: var(--green);
}

/* MODE CARDS */

.section-heading {
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 18px;
}

.section-heading h2 {
  margin: 0 0 4px;
  font-size: 20px;
  letter-spacing: -.5px;
}

.section-heading p {
  color: var(--muted);
  margin: 0;
  font-size: 11px;
}

.step-label {
  color: #8b8592;
  font: 8px 'DM Mono', monospace;
}

.mode-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.mode-card {
  text-align: left;
  min-height: 135px;
  border: 1px solid transparent;
  border-radius: 16px;
  padding: 17px;
  background: white;
  color: var(--ink);
  transition: .18s;
}

.mode-card:hover {
  transform: translateY(-3px);
  border-color: #d9cff8;
  box-shadow: 0 8px 24px #30205b0c;
}

.mode-card > span {
  display: flex;
  justify-content: space-between;
  color: #77727f;
  font-size: 9px;
}

.mode-card > span b {
  font-size: 16px;
  font-weight: 400;
  color: var(--ink);
}

.mode-card h3 {
  margin: 10px 0 5px;
  font-size: 16px;
}

.mode-card p {
  margin: 0 0 13px;
  color: var(--muted);
  font-size: 10px;
}

.mode-card small {
  color: #77727f;
  font-size: 8px;
}

.mode-featured {
  background: var(--purple);
  color: white;
}

.mode-featured > span,
.mode-featured > span b,
.mode-featured p,
.mode-featured small {
  color: #e5ddff;
}

/* FOOTER */

footer {
  border-top: 1px solid var(--line);
  padding: 14px 0;
  display: flex;
  justify-content: space-between;
  color: var(--muted);
  font-size: 8px;
}

/* PRACTICE */

.back-link {
  border: 0;
  background: none;
  color: var(--muted);
  padding: 0;
  font-size: 10px;
  margin-bottom: 20px;
}

.practice-heading,
.results-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 20px;
}

.practice-heading h1,
.results-heading h1 {
  font-size: 31px;
  letter-spacing: -1px;
  margin: 9px 0 4px;
}

.practice-heading p,
.results-heading p {
  color: var(--muted);
  font-size: 11px;
  margin: 0;
}

.mode-select-wrap {
  color: var(--muted);
  font-size: 9px;
  display: grid;
  gap: 5px;
}

.mode-select-wrap select {
  border: 1px solid var(--line);
  background: white;
  border-radius: 8px;
  padding: 10px 12px;
  color: var(--ink);
  font-size: 10px;
}

.live-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 25px auto 18px;
  max-width: 720px;
}

.live-stats > div {
  text-align: center;
  border-right: 1px solid var(--line);
}

.live-stats > div:last-child {
  border: 0;
}

.live-stats strong {
  display: block;
  font-size: 25px;
  font-weight: 700;
}

.live-stats > div:first-child strong {
  color: var(--purple);
}

.live-stats span {
  display: block;
  color: var(--muted);
  font-size: 8px;
  margin-top: 3px;
}

/* TYPING PANEL */

.typing-panel {
  background: white;
  border-radius: 16px;
  padding: 17px 20px 0;
  box-shadow: 0 4px 20px #30205b08;
}

.typing-panel-top {
  display: flex;
  justify-content: space-between;
  color: var(--muted);
  font-size: 8px;
}

.active-label {
  color: #58856a;
  background: #edf5ef;
  border-radius: 20px;
  padding: 5px 9px;
}

.active-label i {
  display: inline-block;
  width: 5px;
  height: 5px;
  background: #659875;
  border-radius: 50%;
  margin-right: 4px;
}

.prompt-area {
  min-height: 120px;
  padding: 20px 5px 15px;
  font: 16px/2 'DM Mono', monospace;
  letter-spacing: -.3px;
  color: #a8a3af;
}

.prompt-area .char {
  position: relative;
}

.prompt-area .char.correct {
  color: var(--purple);
}

.prompt-area .char.incorrect {
  color: #d44e64;
  background: #ffe8ec;
  border-radius: 3px;
}

.prompt-area .char.current::before {
  content: "";
  position: absolute;
  left: -1px;
  top: 2px;
  bottom: 0;
  border-left: 2px solid var(--purple);
  animation: blink 1s step-end infinite;
}

.progress-track {
  height: 3px;
  background: #eeeaf5;
  margin: 0 -20px;
  border-radius: 0 0 16px 16px;
  overflow: hidden;
}

.progress-track div {
  height: 100%;
  width: 0;
  background: var(--purple);
  transition: width .15s;
}

.typing-hint {
  color: var(--muted);
  font-size: 9px;
  margin: 9px 0 0;
}

/* LIVE KEYBOARD */

.keyboard-live {
  max-width: 550px;
  margin: 18px auto;
  padding: 12px;
  background: #eae7df;
}

.keyboard-live kbd {
  width: 35px;
  height: 28px;
}

.keyboard-live kbd.pressed {
  background: var(--purple);
  color: white;
}

.keyboard-live .space-key {
  width: 40%;
}

.practice-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  margin-top: 17px;
}

.practice-bottom > span {
  color: var(--muted);
  font-size: 8px;
}

.practice-bottom > div {
  display: flex;
  gap: 8px;
}

.typing-input {
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
}

/* RESULTS */

.results-heading {
  margin-bottom: 22px;
}

.results-heading .button {
  white-space: nowrap;
}

.results-grid {
  display: grid;
  grid-template-columns: 245px 1fr;
  gap: 14px;
}

.score-card {
  background: #eee8fc;
  border-radius: 15px;
  padding: 20px;
  min-height: 235px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.score-tag {
  color: var(--purple);
  font-size: 8px;
  background: #e1d7fa;
  padding: 6px 9px;
  border-radius: 20px;
}

.score-card > strong {
  color: var(--purple);
  font-size: 62px;
  letter-spacing: -3px;
  line-height: 1.2;
  margin-top: 12px;
}

.score-unit {
  color: var(--purple);
  font-size: 8px;
}

.score-divider {
  width: 100%;
  border-top: 1px solid #dcd1f4;
  margin: 14px 0 10px;
}

.score-card > b {
  font-size: 12px;
}

.score-card p {
  color: #777083;
  font-size: 9px;
  line-height: 1.5;
  margin: 5px 0 0;
}

.result-main {
  min-width: 0;
}

.mini-stat-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 9px;
  margin-bottom: 9px;
}

.mini-stat {
  background: white;
  border-radius: 12px;
  padding: 13px;
}

.mini-stat strong {
  display: block;
  font-size: 20px;
  margin-bottom: 4px;
}

.mini-stat small {
  color: var(--muted);
  font-size: 8px;
}

.chart-card {
  background: white;
  border-radius: 13px;
  padding: 14px 16px 10px;
}

.chart-title {
  display: flex;
  justify-content: space-between;
  font-size: 9px;
}

.chart-title span {
  color: var(--purple);
  font-size: 8px;
}

.chart-bars {
  height: 90px;
  display: flex;
  align-items: end;
  justify-content: space-around;
  gap: 8px;
  padding: 8px 5px 0;
  border-bottom: 1px solid var(--line);
  background: repeating-linear-gradient(
    to bottom,
    transparent 0,
    transparent 28px,
    #f0edf5 29px,
    transparent 30px
  );
}

.chart-bars i {
  display: block;
  flex: 1;
  max-width: 23px;
  background: #d1c5f0;
  border-radius: 3px 3px 0 0;
  min-height: 8px;
}

.chart-bars i:nth-last-child(-n+3) {
  background: var(--purple);
}

.chart-axis {
  display: flex;
  justify-content: space-between;
  color: var(--muted);
  font-size: 7px;
  margin-top: 5px;
}

/* INSIGHT */

.insight-banner {
  background: #f0f1e3;
  border-radius: 10px;
  padding: 12px 15px;
  margin-top: 13px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 4px;
}

.insight-banner b {
  color: #75805b;
  font-size: 7px;
  grid-column: 1 / -1;
}

.insight-banner span {
  font-size: 9px;
}

.insight-banner small {
  color: #82836e;
  font-size: 8px;
}

.next-step {
  background: white;
  border-radius: 12px;
  padding: 14px 16px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.next-step b {
  font-size: 11px;
}

.next-step p {
  margin: 4px 0 0;
  color: var(--muted);
  font-size: 8px;
}

.dots {
  display: flex;
  gap: 5px;
}

.dots i {
  width: 22px;
  height: 22px;
  border-radius: 6px;
  background: #eee8fc;
  color: var(--purple);
  display: grid;
  place-items: center;
  font-size: 9px;
  font-style: normal;
}

.dots i:last-child {
  background: #f2f0eb;
  color: #77727f;
}

/* TOAST */

.toast {
  position: fixed;
  left: 50%;
  bottom: 22px;
  transform: translate(-50%, 20px);
  opacity: 0;
  pointer-events: none;
  background: #26242c;
  color: white;
  border-radius: 9px;
  padding: 11px 16px;
  font-size: 11px;
  transition: .2s;
  z-index: 10;
}

.toast.show {
  opacity: 1;
  transform: translate(-50%, 0);
}

/* TABLET */

@media (max-width: 760px) {
  .app-shell {
    padding: 0 22px;
  }

  .topbar {
    height: 67px;
    gap: 10px;
  }

  .brand {
    font-size: 23px;
  }

  .brand-caption {
    display: none;
  }

  .main-nav {
    gap: 0;
  }

  .nav-link {
    padding: 8px 10px;
    font-size: 10px;
  }

  .top-actions {
    gap: 7px;
  }

  .streak-pill {
    display: none;
  }

  .hero-grid {
    gap: 20px;
  }

  .hero-copy h1 {
    font-size: 38px;
  }

  .flow-card {
    padding: 17px;
    min-height: 260px;
  }

  .summary-item {
    padding: 0 10px;
  }

  .summary-item strong {
    font-size: 19px;
  }

  .mode-grid {
    gap: 9px;
  }

  .mode-card {
    padding: 13px;
  }
}

/* MOBILE */

@media (max-width: 560px) {
  .app-shell {
    padding: 0 17px;
  }

  .topbar {
    justify-content: space-between;
  }

  .main-nav {
    display: none;
    position: absolute;
    top: 60px;
    right: 15px;
    background: white;
    border-radius: 12px;
    padding: 7px;
    box-shadow: 0 8px 25px #0002;
    z-index: 5;
  }

  .main-nav.open {
    display: grid;
  }

  .mobile-menu {
    display: block;
  }

  .top-actions .button {
    display: none;
  }

  .page {
    padding-top: 23px;
  }

  .hero-grid {
    grid-template-columns: 1fr;
  }

  .hero-copy h1 {
    font-size: 42px;
  }

  .flow-card {
    min-height: 250px;
  }

  .summary-strip {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px 0;
  }

  .summary-item:nth-child(2) {
    border: 0;
  }

  .summary-item:nth-child(3) {
    padding-left: 0;
  }

  .section-heading {
    align-items: start;
  }

  .step-label {
    display: none;
  }

  .mode-grid {
    grid-template-columns: 1fr;
  }

  .mode-card {
    min-height: 120px;
  }

  .practice-heading,
  .results-heading {
    align-items: start;
    flex-direction: column;
  }

  .practice-heading h1,
  .results-heading h1 {
    font-size: 29px;
  }

  .mode-select-wrap {
    width: 100%;
  }

  .mode-select-wrap select {
    width: 100%;
  }

  .live-stats strong {
    font-size: 21px;
  }

  .live-stats span {
    font-size: 7px;
  }

  .prompt-area {
    font-size: 13px;
    min-height: 125px;
  }

  .keyboard-live {
    padding: 8px 4px;
  }

  .keyboard-live kbd {
    width: 7.2%;
    height: 25px;
    font-size: 8px;
  }

  .keyboard-live .space-key {
    width: 42%;
  }

  .practice-bottom {
    align-items: stretch;
    flex-direction: column;
  }

  .practice-bottom > div {
    justify-content: flex-end;
  }

  .results-grid {
    grid-template-columns: 1fr;
  }

  .score-card {
    min-height: 190px;
  }

  .score-card > strong {
    font-size: 55px;
  }

  .next-step {
    flex-wrap: wrap;
  }

  .next-step > div:first-child {
    width: 100%;
  }

  footer {
    gap: 10px;
    line-height: 1.5;
  }
}
