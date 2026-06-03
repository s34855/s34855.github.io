<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>GitHub Profile — Introduction</title>
  <link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Syne:wght@400;600;800&display=swap" rel="stylesheet"/>
  <style>
    :root {
      --bg:        #0d1117;
      --surface:   #161b22;
      --border:    #30363d;
      --accent:    #58a6ff;
      --accent2:   #3fb950;
      --muted:     #8b949e;
      --text:      #e6edf3;
      --tag-bg:    #1f2d3d;
      --mono:      'Space Mono', monospace;
      --sans:      'Syne', sans-serif;
    }

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      background: var(--bg);
      color: var(--text);
      font-family: var(--mono);
      min-height: 100vh;
      padding: 2rem 1rem;
      display: flex;
      justify-content: center;
      align-items: flex-start;
    }

    /* Subtle grid bg */
    body::before {
      content: '';
      position: fixed;
      inset: 0;
      background-image:
        linear-gradient(rgba(48,54,61,.35) 1px, transparent 1px),
        linear-gradient(90deg, rgba(48,54,61,.35) 1px, transparent 1px);
      background-size: 32px 32px;
      pointer-events: none;
      z-index: 0;
    }

    .wrapper {
      position: relative;
      z-index: 1;
      width: 100%;
      max-width: 780px;
      animation: fadeUp .6s ease both;
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(24px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    /* ── FILE HEADER ── */
    .file-header {
      background: var(--surface);
      border: 1px solid var(--border);
      border-bottom: none;
      border-radius: 8px 8px 0 0;
      padding: .6rem 1rem;
      display: flex;
      align-items: center;
      gap: .75rem;
      font-size: .78rem;
      color: var(--muted);
    }
    .file-header .dot { width: 12px; height: 12px; border-radius: 50%; }
    .dot-r { background: #ff5f57; }
    .dot-y { background: #febc2e; }
    .dot-g { background: #28c840; }
    .filename { color: var(--accent); margin-left: auto; }

    /* ── CARD ── */
    .card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 0 0 8px 8px;
      padding: 2rem 2.2rem 2.4rem;
    }

    /* ── PROFILE HEADER ── */
    .profile-head {
      display: flex;
      align-items: center;
      gap: 1.6rem;
      margin-bottom: 1.8rem;
      flex-wrap: wrap;
    }

    .avatar-wrap {
      position: relative;
      flex-shrink: 0;
    }
    .avatar {
      width: 86px; height: 86px;
      border-radius: 50%;
      border: 2px solid var(--border);
      background: var(--tag-bg);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      color: var(--muted);
      overflow: hidden;
    }
    .avatar-badge {
      position: absolute;
      bottom: 4px; right: 4px;
      width: 18px; height: 18px;
      border-radius: 50%;
      background: var(--accent2);
      border: 2px solid var(--surface);
    }

    .profile-meta { flex: 1; min-width: 200px; }

    .name { นายชัชพงษ์ ภูวงเรือง
      font-family: var(--sans);
      font-weight: 800;
      font-size: 1.7rem;
      line-height: 1.1;
      color: var(--text);
    }
    .name .placeholder { color: var(--accent); }

    .nickname { เบียร์
      font-size: .85rem;
      color: var(--muted);
      margin-top: .3rem;
    }
    .nickname .placeholder { color: var(--accent2); }

    .follow-btn {
      display: inline-block;
      margin-top: .8rem;
      padding: .35rem 1rem;
      border: 1px solid var(--border);
      border-radius: 6px;
      font-size: .78rem;
      color: var(--text);
      background: transparent;
      cursor: default;
      font-family: var(--mono);
    }

    /* ── SECTION LABEL ── */
    .section-label {
      font-size: .68rem;
      letter-spacing: .12em;
      text-transform: uppercase;
      color: var(--muted);
      margin-bottom: .6rem;
      padding-bottom: .4rem;
      border-bottom: 1px solid var(--border);
    }

    /* ── INFO GRID ── */
    .info-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: .85rem 1.4rem;
      margin-bottom: 2rem;
    }
    @media (max-width: 520px) { .info-grid { grid-template-columns: 1fr; } }

    .info-item {}
    .info-key {
      font-size: .7rem;
      color: var(--muted);
      letter-spacing: .06em;
      text-transform: uppercase;
      margin-bottom: .18rem;
    }
    .info-val {
      font-size: .92rem;
      color: var(--text);
      display: flex;
      align-items: center;
      gap: .45rem;
    }
    .info-val .icon { font-size: 1rem; flex-shrink: 0; }
    .placeholder {
      color: var(--accent);
      border-bottom: 1px dashed var(--accent);
      font-style: italic;
    }

    /* ── STUDY PLAN ── */
    .study-section { margin-bottom: 2rem; }

    .study-plan { MSEP
      background: var(--bg);
      border: 1px solid var(--border);
      border-radius: 6px;
      padding: 1rem 1.2rem;
      font-size: .88rem;
      line-height: 1.75;
      color: var(--muted);
      white-space: pre-wrap;
    }
    .study-plan .comment { color: #3fb950; }
    .study-plan .keyword { color: #ff7b72; }
    .study-plan .string  { color: #a5d6ff; }
    .study-plan .placeholder { color: var(--accent); font-style: italic; border-bottom: 1px dashed var(--accent); }

    /* ── TAGS / SKILLS ── */
    .tags-section { margin-bottom: 1.6rem; }
    .tags { display: flex; flex-wrap: wrap; gap: .5rem; margin-top: .5rem; }
    .tag {
      background: var(--tag-bg);
      border: 1px solid var(--border);
      border-radius: 20px;
      padding: .22rem .85rem;
      font-size: .75rem;
      color: var(--accent);
    }
    .tag.placeholder-tag {
      border-style: dashed;
      color: var(--muted);
      font-style: italic;
    }

    /* ── FOOTER ── */
    .card-footer {
      border-top: 1px solid var(--border);
      padding-top: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: .5rem;
      font-size: .72rem;
      color: var(--muted);
    }
    .status-dot {
      display: inline-block;
      width: 8px; height: 8px;
      border-radius: 50%;
      background: var(--accent2);
      margin-right: .4rem;
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0%,100% { opacity: 1; }
      50%      { opacity: .4; }
    }

    /* ── INSTRUCTION BOX ── */
    .instructions {
      margin-top: 1.6rem;
      background: #161b22;
      border: 1px solid #febc2e55;
      border-left: 3px solid #febc2e;
      border-radius: 6px;
      padding: 1rem 1.2rem;
      font-size: .78rem;
      color: #c9d1d9;
      line-height: 1.7;
    }
    .instructions strong { color: #febc2e; font-family: var(--sans); }
    .instructions code {
      background: #0d1117;
      border: 1px solid var(--border);
      border-radius: 4px;
      padding: .1rem .4rem;
      font-family: var(--mono);
      color: var(--accent);
      font-size: .76rem;
    }
    .instructions ul { padding-left: 1.2rem; margin-top: .5rem; }
    .instructions li { margin-bottom: .3rem; }
  </style>
</head>
<body>

<div class="wrapper">

  <!-- File tab header -->
  <div class="file-header">
    <span class="dot dot-r"></span>
    <span class="dot dot-y"></span>
    <span class="dot dot-g"></span>
    <span>README.md</span>
    <span class="filename">github.com / <span class="placeholder">YOUR_USERNAME</span></span>
  </div>

  <!-- Main card -->
  <div class="card">

    <!-- Profile head -->
    <div class="profile-head">
      <div class="avatar-wrap">
        <div class="avatar">👤</div>
        <div class="avatar-badge"></div>
      </div>
      <div class="profile-meta">
        <div class="name"><span class="placeholder">[Your Full Name]</span></div>
        <div class="nickname">@<span class="placeholder">[your_nickname]</span></div>
        <div class="follow-btn">✦ Follow</div>
      </div>
    </div>

    <!-- Personal Info -->
    <div class="section-label">About Me</div>
    <div class="info-grid">

      <div class="info-item">
        <div class="info-key">Full Name</div>
        <div class="info-val">
          <span class="icon">🪪</span>
          <span class="placeholder">[e.g. Jane Smith]</span>
        </div>
      </div>

      <div class="info-item">
        <div class="info-key">Nickname / Handle</div>
        <div class="info-val">
          <span class="icon">✏️</span>
          <span class="placeholder">[e.g. Janey / @jsmith]</span>
        </div>
      </div>

      <div class="info-item">
        <div class="info-key">Date of Birth</div>
        <div class="info-val">
          <span class="icon">🎂</span>
          <span class="placeholder">[DD / MM / YYYY]</span>
        </div>
      </div>

      <div class="info-item">
        <div class="info-key">School / University</div>
        <div class="info-val">
          <span class="icon">🏫</span>
          <span class="placeholder">[e.g. Chulalongkorn University]</span>
        </div>
      </div>

      <div class="info-item">
        <div class="info-key">Faculty / Department</div>
        <div class="info-val">
          <span class="icon">📚</span>
          <span class="placeholder">[e.g. Computer Engineering]</span>
        </div>
      </div>

      <div class="info-item">
        <div class="info-key">Year / Level</div>
        <div class="info-val">
          <span class="icon">🎓</span>
          <span class="placeholder">[e.g. Year 2 / Sophomore]</span>
        </div>
      </div>

    </div>

    <!-- Study Plan -->
    <div class="study-section">
      <div class="section-label">Study Plan</div>
      <div class="study-plan">
<span class="comment">## 🗺️ My Learning Roadmap</span>

<span class="keyword">Current focus:</span>   <span class="placeholder">[e.g. Data Structures & Algorithms]</span>
<span class="keyword">Short-term goal:</span>  <span class="placeholder">[e.g. Complete a full-stack web project by July 2025]</span>
<span class="keyword">Long-term goal:</span>   <span class="placeholder">[e.g. Become a backend engineer specialising in cloud systems]</span>

<span class="comment">## 📅 Semester Plan</span>

  <span class="string">Q1 (Jan – Mar):</span> <span class="placeholder">[subjects / courses / skills you plan to study]</span>
  <span class="string">Q2 (Apr – Jun):</span> <span class="placeholder">[e.g. Build 2 portfolio projects, learn Docker]</span>
  <span class="string">Q3 (Jul – Sep):</span> <span class="placeholder">[e.g. Internship / open-source contribution]</span>
  <span class="string">Q4 (Oct – Dec):</span> <span class="placeholder">[e.g. Capstone project / thesis prep]</span>
      </div>
    </div>

    <!-- Skills / Tags -->
    <div class="tags-section">
      <div class="section-label">Skills &amp; Interests</div>
      <div class="tags">
        <span class="tag placeholder-tag">+ add a skill</span>
        <span class="tag placeholder-tag">+ add a skill</span>
        <span class="tag placeholder-tag">+ add a skill</span>
      </div>
      <div style="font-size:.72rem;color:var(--muted);margin-top:.55rem;">
        Replace the tags above with real ones, e.g. <code>Python</code> &nbsp;<code>React</code> &nbsp;<code>UI Design</code>
      </div>
    </div>

    <!-- Footer -->
    <div class="card-footer">
      <span><span class="status-dot"></span>Open to collaborations &amp; internships</span>
      <span>Last updated: <span class="placeholder">[Month Year]</span></span>
    </div>

  </div><!-- /card -->

  <!-- Instructions box -->
  <div class="instructions">
    <strong>✦ How to fill in this template</strong>
    <ul>
      <li>Every <code style="color:var(--accent)">[bracketed placeholder]</code> is a field for you to replace with your own information.</li>
      <li><strong>Name &amp; Nickname</strong> — update both the heading and the <code>@handle</code> in the file-tab bar at the top.</li>
      <li><strong>Date of Birth</strong> — use the format that feels natural to you (DD/MM/YYYY or Month DD, YYYY).</li>
      <li><strong>School</strong> — include your faculty/department and current year of study.</li>
      <li><strong>Study Plan</strong> — fill in the Q1–Q4 blocks with the courses, skills, or goals you're targeting each quarter.</li>
      <li><strong>Skills tags</strong> — replace the dashed placeholder tags with real technology or subject tags.</li>
      <li>To use on GitHub, paste the HTML into a <code>README.md</code> (GitHub renders raw HTML inside markdown files).</li>
    </ul>
  </div>

</div><!-- /wrapper -->

</body>
</html>
