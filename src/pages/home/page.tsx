import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';

const ASSET = (f: string) => `${__BASE_PATH__.replace(/\/$/, '')}/assets/${f}`;

const EXAMPLES: Record<string, string[]> = {
  leads: ['A new inquiry arrives.', '“Can I book a service appointment for next week?”', 'Understand. Connect. Act.', 'Identify the request, check availability, and prepare the next step.', 'The right follow-up, ready.', 'A proposed time, an updated CRM record, and a clear handoff to your team.'],
  knowledge: ['A teammate needs an answer.', '“Where is the latest equipment setup procedure?”', 'Find. Ground. Respond.', 'Search connected knowledge and surface the relevant source.', 'Useful knowledge, within reach.', 'A concise answer with the source document, ready for your teammate to review.'],
  operations: ['A device reports an event.', 'A sample equipment sensor reports a temperature outside its usual range.', 'Detect. Add context. Route.', 'Apply your rules, attach the device context, and notify the right person.', 'An informed response.', 'A clear alert with the location and reading, ready for an operator to assess.'],
};
const TABS = [
  { id: 'leads', label: 'Customer inquiries' },
  { id: 'knowledge', label: 'Team knowledge' },
  { id: 'operations', label: 'Connected operations' },
];
const IDLE = 'One example. Built around your tools and rules.';
const DONE = 'Example complete. Human review stays part of the workflow.';
const STEP_LABELS = ['01 / Sample input received.', '02 / Applying the example workflow.', '03 / Outcome prepared for your team.'];

const CAPABILITIES = [
  { i: '//01', g: '◉', t: 'AI agents', lead: 'A useful first point of contact.', p: 'Voice and chat agents that answer questions, qualify inquiries, and help customers take the next step.', tags: 'Voice & chat / Lead qualification / Human handoffs', to: '/receptionist' },
  { i: '//02', g: '⇄', t: 'Business automation', lead: 'Give repetitive work a better route.', p: 'Connect the tools you already use. Keep records, follow-ups, and internal workflows moving together.', tags: 'CRM integrations / Follow-ups / Workflow design', to: '/services' },
  { i: '//03', g: '⌘', t: 'Rapid MVPs', lead: 'Make the idea real. Then learn.', p: 'Turn an early product idea into working software you can test with real people and build on.', tags: 'Prototypes / Custom software / Product development', to: '/rapid-mvp' },
  { i: '//04', g: '↗', t: 'AI strategy & CAIO', lead: 'A clear direction for what comes next.', p: 'Find the right opportunities, prioritize investment, and guide adoption with fractional AI leadership.', tags: 'AI roadmaps / Fractional CAIO / Adoption', to: '/fractional-caio' },
  { i: '//05', g: '⊞', t: 'Data + AI', lead: 'Put your knowledge within reach.', p: 'Bring useful information together so your team can find answers, understand patterns, and make decisions.', tags: 'Knowledge systems / Data pipelines / Decision support', to: '/blog/data-ai' },
  { i: '//06', g: '◎', t: 'Vision & connected systems', lead: 'See the bigger picture.', p: 'Connect cameras, devices, and operational data to surface the events your people need to know about.', tags: 'Computer vision / Security & VMS / IoT', to: '/products' },
];

const SECTIONS = [
  { id: 'capabilities', n: '//01', label: 'What we build' },
  { id: 'approach', n: '//02', label: 'From idea to impact' },
  { id: 'built-for-you', n: '//03', label: 'Built for your business' },
  { id: 'contact', n: '//05', label: 'Start a conversation' },
];

export default function HomePage() {
  /* ---------- Door + scroll journey (ported from nevtech-homepage.html) ---------- */
  const journeyRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const outdoorsRef = useRef<HTMLDivElement>(null);
  const arrivalRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLParagraphElement>(null);
  const roomRef = useRef<HTMLImageElement>(null);
  const leafRef = useRef<HTMLDivElement>(null);
  const leafImgRef = useRef<HTMLImageElement>(null);
  const floorRef = useRef<HTMLImageElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const replayRef = useRef<HTMLButtonElement>(null);
  const statusRef = useRef<HTMLSpanElement>(null);
  const headerWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const journey = journeyRef.current!, hero = heroRef.current!, scene = sceneRef.current!, camera = cameraRef.current!, visual = visualRef.current!, outdoors = outdoorsRef.current!, arrival = arrivalRef.current!, copy = copyRef.current!, hint = hintRef.current!, room = roomRef.current!, leaf = leafRef.current!, leafImg = leafImgRef.current!, floor = floorRef.current!, controls = controlsRef.current!, toggle = toggleRef.current!, replay = replayRef.current!, status = statusRef.current!;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    const html = document.documentElement;
    let door = 1, target = 1, active = false, paused = false, doorRAF = 0, last = 0, autoplay = 0, scrollRAF = 0, travel = 0, navHeight = 103, cx = 0, cy = 0, dx = 0, dy = 0, maxScale = 5;
    const clamp = (n: number) => Math.max(0, Math.min(1, n));
    const ease = (a: number, b: number, p: number) => { const t = clamp((p - a) / (b - a)); return t * t * (3 - 2 * t); };

    function paintDoor() {
      leaf.style.transform = 'rotateY(' + (-104 * door) + 'deg)';
      leaf.style.filter = 'brightness(' + (1 - door * .22) + ')';
      floor.style.opacity = String(1 - Math.min(1, door * 1.8));
      hero.dataset.doorState = active ? (paused ? 'paused' : target === 1 ? 'opening' : 'closing') : door === 1 ? 'open' : 'closed';
    }
    function label() {
      const text = active ? (paused ? 'Resume opening' : 'Pause opening') : (door === 1 ? 'Close the door' : 'Open the door');
      toggle.textContent = text; toggle.setAttribute('aria-label', text);
      status.textContent = active ? 'Possibility is opening.' : door === 1 ? 'Step into what’s next.' : 'A new beginning.';
    }
    function finish() { cancelAnimationFrame(doorRAF); active = false; paused = false; door = target; paintDoor(); label(); }
    function tick(now: number) {
      if (!active || paused) return;
      const dt = last ? Math.min(60, now - last) : 0; last = now;
      door = clamp(door + (target === 1 ? 1 : -1) * dt / (target === 1 ? 2700 : 1700));
      paintDoor();
      if (door === target) finish(); else doorRAF = requestAnimationFrame(tick);
    }
    function start(next: number) {
      clearTimeout(autoplay); cancelAnimationFrame(doorRAF);
      target = next; last = 0; paused = false; active = true;
      if (reduced.matches || travel > .01) finish(); else { label(); doorRAF = requestAnimationFrame(tick); }
    }
    const onToggle = () => {
      if (active) { paused = !paused; if (paused) cancelAnimationFrame(doorRAF); else { last = 0; doorRAF = requestAnimationFrame(tick); } label(); }
      else start(door === 1 ? 0 : 1);
    };
    const onReplay = () => { door = 0; paintDoor(); start(1); };

    function render() {
      scrollRAF = 0;
      travel = reduced.matches ? 0 : clamp((navHeight - journey.getBoundingClientRect().top) / Math.max(1, journey.offsetHeight - hero.offsetHeight));
      if (travel > .005) { clearTimeout(autoplay); if (door !== 1 || active) { target = 1; finish(); } }
      const zoom = ease(.08, .82, travel), center = ease(.02, .65, travel), fade = ease(.60, .86, travel), copyFade = 1 - ease(0, .24, travel);
      camera.style.transformOrigin = cx + 'px ' + cy + 'px';
      camera.style.transform = 'translate(' + (dx * center) + 'px,' + (dy * center) + 'px) scale(' + Math.pow(maxScale, zoom) + ')';
      camera.style.opacity = String(1 - ease(.83, .92, travel));
      outdoors.style.opacity = String(fade);
      (outdoors.firstElementChild as HTMLElement).style.transform = 'scale(' + (1.06 - .06 * ease(.6, 1, travel)) + ')';
      copy.style.opacity = String(copyFade);
      copy.style.transform = 'translateY(' + (-26 * ease(0, .3, travel)) + 'px)';
      (copy as any).inert = travel > .23;
      controls.style.opacity = String(1 - ease(0, .12, travel));
      (controls as any).inert = travel > .08;
      hint.style.opacity = String(1 - ease(0, .12, travel));
      arrival.style.opacity = String(ease(.80, .97, travel));
      (arrival as any).inert = travel < .88;
      hero.dataset.travel = travel.toFixed(3);
    }
    function queue() { if (!scrollRAF) scrollRAF = requestAnimationFrame(render); }
    function measure() {
      const header = headerWrapRef.current?.querySelector('.header') as HTMLElement | null;
      navHeight = Math.ceil((header?.offsetHeight || 95) + (innerWidth <= 800 ? 5 : 8));
      html.style.setProperty('--door-nav-height', navHeight + 'px');
      const matrix = new DOMMatrix(getComputedStyle(scene).transform);
      cx = scene.offsetLeft + scene.offsetWidth * .719;
      cy = scene.offsetTop + scene.offsetHeight * .479 + matrix.m42;
      dx = visual.clientWidth / 2 - cx; dy = visual.clientHeight / 2 - cy;
      maxScale = Math.max(visual.clientWidth / (scene.offsetWidth * .244), visual.clientHeight / (scene.offsetHeight * .718)) * 1.45;
      render();
    }
    function mode() { html.classList.toggle('journey-enabled', !reduced.matches); measure(); if (reduced.matches) { target = 1; finish(); } }
    const onVis = () => { if (document.hidden && active) { target = 1; finish(); } };

    toggle.addEventListener('click', onToggle);
    replay.addEventListener('click', onReplay);
    mode();
    addEventListener('scroll', queue, { passive: true });
    addEventListener('resize', measure, { passive: true });
    reduced.addEventListener('change', mode);
    document.addEventListener('visibilitychange', onVis);

    let cancelled = false;
    const decode = (img: HTMLImageElement) => img.decode ? img.decode() : Promise.resolve();
    Promise.all([decode(room), decode(leafImg), decode(outdoors.firstElementChild as HTMLImageElement)]).then(() => {
      if (cancelled) return;
      controls.hidden = false; measure();
      if (reduced.matches || travel > .005) { target = 1; finish(); }
      else { door = 0; target = 0; paintDoor(); label(); autoplay = window.setTimeout(() => start(1), 650); }
    }).catch(() => { if (!cancelled) { target = 1; finish(); } });

    return () => {
      cancelled = true;
      clearTimeout(autoplay); cancelAnimationFrame(doorRAF); cancelAnimationFrame(scrollRAF);
      toggle.removeEventListener('click', onToggle); replay.removeEventListener('click', onReplay);
      removeEventListener('scroll', queue); removeEventListener('resize', measure);
      reduced.removeEventListener('change', mode); document.removeEventListener('visibilitychange', onVis);
      html.classList.remove('journey-enabled'); html.style.removeProperty('--door-nav-height');
    };
  }, []);

  /* ---------- Interactive demo ---------- */
  const [scenario, setScenario] = useState('leads');
  const [stage, setStage] = useState(-1);
  const [running, setRunning] = useState(false);
  const [ran, setRan] = useState(false);
  const [demoStatus, setDemoStatus] = useState(IDLE);
  const timers = useRef<number[]>([]);
  const resetDemo = () => { timers.current.forEach(clearTimeout); timers.current = []; setStage(-1); setRunning(false); };
  const select = (id: string) => { resetDemo(); setScenario(id); setRan(false); setDemoStatus(IDLE); };
  const runDemo = () => {
    resetDemo();
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { setStage(2); setDemoStatus(DONE); setRan(true); return; }
    setRunning(true); setDemoStatus('Running example…');
    [0, 1, 2].forEach(i => timers.current.push(window.setTimeout(() => { setStage(i); setDemoStatus(STEP_LABELS[i]); }, i * 800)));
    timers.current.push(window.setTimeout(() => { setRunning(false); setRan(true); setDemoStatus(DONE); }, 2400));
  };
  useEffect(() => () => timers.current.forEach(clearTimeout), []);
  const ex = EXAMPLES[scenario];

  /* ---------- Section nav highlighting ---------- */
  const [current, setCurrent] = useState('capabilities');
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const obs = new IntersectionObserver(entries => {
      for (const e of entries) if (e.isIntersecting) setCurrent(e.target.id);
    }, { rootMargin: '-15% 0px -60% 0px', threshold: 0 });
    SECTIONS.forEach(s => { const el = document.getElementById(s.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  useEffect(() => { document.title = 'NevTech AI — Let AI open doors for you.'; }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  };

  return (
    <div className="nt-site nt-home">
      <a className="skip" href="#main">Skip to content</a>
      <div className="frame" ref={headerWrapRef}>
        <Header variant="dark" />
        <main id="main">
          <div className="door-journey" ref={journeyRef}>
            <section className="door-hero" ref={heroRef} aria-labelledby="hero-title">
              <div className="door-visual" ref={visualRef} role="img" aria-label="A deep teal door opens from a quiet interior onto a sunlit path, green hills, and a bright outdoor landscape.">
                <div className="door-camera" ref={cameraRef}>
                  <div className="door-scene" ref={sceneRef} aria-hidden="true">
                    <img className="door-room" ref={roomRef} src={ASSET('door-open.jpg')} alt="" width={1536} height={1024} fetchPriority="high" />
                    <img className="door-floor" ref={floorRef} src={ASSET('door-closed.jpg')} alt="" width={1536} height={1024} />
                    <div className="door-leaf" ref={leafRef}><img ref={leafImgRef} src={ASSET('door-leaf.jpg')} alt="" width={375} height={735} /></div>
                  </div>
                </div>
              </div>
              <div className="door-outdoors" ref={outdoorsRef} aria-hidden="true"><img src={ASSET('door-outdoors.jpg')} alt="" width={1536} height={1024} /></div>
              <div className="door-copy" ref={copyRef}>
                <p className="mono green"><span className="door-kicker-dot" aria-hidden="true"></span>NEVTECH AI / NEW POSSIBILITIES</p>
                <h1 id="hero-title">Let AI<br /><em>open doors</em><br />for you.</h1>
                <p className="door-intro">More time. New ideas. A brighter next chapter.</p>
                <p className="door-description">We turn AI into agents, automations, and products that create room for your business to grow.</p>
                <div className="door-actions">
                  <a className="button" href="#contact" onClick={e => scrollTo(e, 'contact')}>Explore what’s possible <span aria-hidden="true">↗</span></a>
                  <a href="#capabilities" className="door-secondary" onClick={e => scrollTo(e, 'capabilities')}>Discover NevTech <span aria-hidden="true">↓</span></a>
                </div>
                <p className="door-location">Indianapolis roots. A world of possibility.</p>
              </div>
              <div className="door-controls" ref={controlsRef} hidden>
                <span className="door-state" ref={statusRef} role="status" aria-live="polite">A new beginning.</span>
                <div>
                  <button ref={toggleRef} type="button" aria-label="Open the door">Open the door <span aria-hidden="true">↗</span></button>
                  <button ref={replayRef} id="door-replay" type="button" aria-label="Replay the door opening">Replay <span aria-hidden="true">↻</span></button>
                </div>
              </div>
              <p className="journey-hint" ref={hintRef}>SCROLL TO STEP THROUGH <span aria-hidden="true">↓</span></p>
              <div className="journey-arrival" ref={arrivalRef}>
                <p className="mono">A WORLD OF POSSIBILITY</p>
                <h2>More room<br /><em>to grow.</em></h2>
                <p>Let’s put your next possibility to work.</p>
                <a href="#daylight" className="arrival-link" onClick={e => scrollTo(e, 'daylight')}>See what’s possible <span aria-hidden="true">↓</span></a>
              </div>
            </section>
          </div>

          <div className="daylight-content" id="daylight">
            <section className="system" aria-label="Interactive example of a NevTech automation">
              <div className="system-heading">
                <div className="system-label"><span className="signal-dot" aria-hidden="true"></span><span className="mono">NEVTECH / CONNECTED INTELLIGENCE</span></div>
                <span className="mono">Interactive concept · Sample data</span>
              </div>
              <div className="scenario-tabs" role="tablist" aria-label="Choose an automation example">
                {TABS.map(t => (
                  <button key={t.id} className="scenario-tab" role="tab" aria-selected={scenario === t.id} tabIndex={scenario === t.id ? 0 : -1} onClick={() => select(t.id)}>{t.label}</button>
                ))}
              </div>
              <div role="tabpanel">
                <div className="pipeline">
                  <article className={`pipe-card ${stage === 0 ? 'active' : ''}`}><div className="mono"><span>//01 INPUT</span><span>↓</span></div><h3>{ex[0]}</h3><p>{ex[1]}</p></article>
                  <div className="pipe-arrow" aria-hidden="true"><span>→</span></div>
                  <article className={`pipe-card core ${stage === 1 ? 'active' : ''}`}><div className="mono"><span>//02 NEVTECH AUTOMATION</span><span>◎</span></div><h3>{ex[2]}</h3><p>{ex[3]}</p></article>
                  <div className="pipe-arrow" aria-hidden="true"><span>→</span></div>
                  <article className={`pipe-card ${stage === 2 ? 'active' : ''}`}><div className="mono"><span>//03 OUTCOME</span><span>↗</span></div><h3>{ex[4]}</h3><p>{ex[5]}</p></article>
                </div>
              </div>
              <div className="pipe-foot">
                <p role="status" aria-live="polite">{demoStatus}</p>
                <button className="run-button" onClick={runDemo} disabled={running}>{running ? 'Running example…' : ran ? 'Run again' : 'Run example'} {!running && <span aria-hidden="true">↗</span>}</button>
              </div>
            </section>

            <div className="services-strip" aria-label="Areas of focus">
              <span>AI agents</span><span>Automation</span><span>Rapid MVPs</span><span>AI strategy</span><span>Data + AI</span><span>Connected systems</span>
            </div>

            <div className="page-body">
              <aside className="section-nav">
                <nav className="section-nav-inner" aria-label="On this page">
                  {SECTIONS.map(s => <a key={s.id} className={current === s.id ? 'current' : ''} href={`#${s.id}`} onClick={e => scrollTo(e, s.id)}><span>{s.n}</span> {s.label}</a>)}
                  <p className="rail-note">BASED IN INDIANAPOLIS.<br />BUILT FOR WHAT’S NEXT.</p>
                </nav>
              </aside>
              <div className="content">
                <section className="content-section" id="capabilities" aria-labelledby="capabilities-title">
                  <div className="section-heading">
                    <div><p className="mono green">//01 CAPABILITIES</p><h2 id="capabilities-title">One partner.<br />More possibilities.</h2></div>
                    <p>Start with a single workflow or a bigger idea. We connect the strategy, software, and systems to move it forward.</p>
                  </div>
                  <div className="capability-grid">
                    {CAPABILITIES.map(c => (
                      <article className="service-card" key={c.i}>
                        <div className="card-top"><span className="mono">{c.i}</span><span className="card-symbol" aria-hidden="true">{c.g}</span></div>
                        <h3>{c.t}</h3>
                        <p className="card-lead">{c.lead}</p>
                        <p>{c.p}</p>
                        <div className="card-bottom"><span>{c.tags}</span><Link to={c.to} aria-label={`Explore ${c.t}`}>↗</Link></div>
                      </article>
                    ))}
                  </div>
                </section>

                <section className="content-section" id="approach" aria-labelledby="approach-title">
                  <div className="section-heading">
                    <div><p className="mono green">//02 HOW WE WORK</p><h2 id="approach-title">A clear path.<br />From idea to impact.</h2></div>
                    <p>Find a useful opportunity, prove it with your team, and make it part of everyday work.</p>
                  </div>
                  <div className="approach-grid">
                    <article className="approach-step"><span className="mono">//A DISCOVER</span><h3>Find the friction.</h3><p>Map the work, understand the constraints, and choose a problem worth solving.</p></article>
                    <article className="approach-step"><span className="mono">//B BUILD</span><h3>Prove the idea.</h3><p>Create a focused prototype. Test the workflow with the people who will use it.</p></article>
                    <article className="approach-step"><span className="mono">//C IMPROVE</span><h3>Make it work.</h3><p>Connect your systems, support adoption, and measure what gets better.</p></article>
                  </div>
                  <p className="approach-note">→ Define success early. Learn from real use. Keep improving.</p>
                </section>

                <section className="content-section" id="built-for-you" aria-labelledby="business-title">
                  <div className="section-heading">
                    <div><p className="mono green">//03 THE NEVTECH APPROACH</p><h2 id="business-title">Your people. Your tools.<br />Your next chapter.</h2></div>
                  </div>
                  <div className="principles">
                    <article className="principle"><h3>Work with what you have.</h3><p>Build around your existing tools, processes, and team. Let the business need guide the technology.</p></article>
                    <article className="principle"><h3>Keep people in the loop.</h3><p>Design clear handoffs for decisions and exceptions that need human judgment.</p></article>
                    <article className="principle"><h3>Make the outcome tangible.</h3><p>Choose a useful measure, whether that’s faster follow-up, fewer manual steps, or easier access to information.</p></article>
                    <article className="principle"><h3>Make adoption part of the build.</h3><p>Test with real users and explain how the system works so your team can use it with confidence.</p></article>
                  </div>
                </section>
              </div>
            </div>

            <section className="contact-section" id="contact" aria-labelledby="contact-title">
              <div className="contact-inner">
                <p className="mono green">//05 BUILD SOMETHING USEFUL</p>
                <h2 id="contact-title">Open the door<br /><em>to what’s next.</em></h2>
                <div className="contact-bottom">
                  <p>Bring the bottleneck, the product idea, or the question. Let’s find the right place to begin.</p>
                  <Link className="button" to="/contact">Let’s talk <span className="round-arrow" aria-hidden="true">↗</span></Link>
                </div>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
