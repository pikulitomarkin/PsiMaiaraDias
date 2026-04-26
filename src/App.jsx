/* Main App Component — Maiara Psicóloga */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentColor": "#bc7880",
  "heroStyle": "split",
  "fontHeading": "Playfair Display",
  "borderRadius": 8
}/*EDITMODE-END*/;

const NAV_LINKS = [
  { label: "Início", id: "hero" },
  { label: "Sobre", id: "sobre" },
  { label: "Como funciona", id: "como-funciona" },
  { label: "Para quem é", id: "para-quem" },
  { label: "Blog", id: "blog" },
  { label: "Contato", id: "contato" },
];

const WHATSAPP = "5511968315076";
const whatsappLink = `https://wa.me/${WHATSAPP}?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20sess%C3%A3o.`;

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const colors = {
    accent: tweaks.accentColor,
    softPink: "#f1cccb",
    lighterPink: "#f3bbb7",
    cream: "#fdf6f4",
    dark: "#3d2222",
    warmWhite: "#fefaf9",
  };

  const headingFont = tweaks.fontHeading;
  const br = tweaks.borderRadius;

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", color: colors.dark, background: colors.warmWhite }}>
      {/* ===== NAV ===== */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(254,250,249,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? `1px solid ${colors.softPink}` : "1px solid transparent",
        transition: "all 0.4s ease",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "16px 28px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontFamily: `'${headingFont}', serif`, fontSize: 22, fontWeight: 700, color: colors.accent, cursor: "pointer" }} onClick={() => scrollTo("hero")}>
            Maiara Cunha
          </div>
          {/* Desktop links */}
          <div style={{ display: "flex", gap: 32, alignItems: "center" }} className="nav-desktop">
            {NAV_LINKS.map(l => (
              <span key={l.id} onClick={() => scrollTo(l.id)} style={{ cursor: "pointer", fontSize: 14, fontWeight: 500, letterSpacing: "0.02em", color: colors.dark, opacity: 0.7, transition: "opacity 0.2s" }}
                onMouseEnter={e => e.target.style.opacity = 1}
                onMouseLeave={e => e.target.style.opacity = 0.7}
              >{l.label}</span>
            ))}
            <a href={whatsappLink} target="_blank" rel="noopener" style={{
              background: colors.accent, color: "#fff", padding: "10px 22px", borderRadius: br, fontSize: 14, fontWeight: 600, textDecoration: "none", transition: "transform 0.2s, box-shadow 0.2s",
            }}
              onMouseEnter={e => { e.target.style.transform = "translateY(-1px)"; e.target.style.boxShadow = "0 4px 16px rgba(188,120,128,0.35)"; }}
              onMouseLeave={e => { e.target.style.transform = ""; e.target.style.boxShadow = ""; }}
            >Agendar sessão</a>
          </div>
          {/* Mobile hamburger */}
          <div className="nav-mobile" style={{ display: "none", cursor: "pointer", padding: 8 }} onClick={() => setMenuOpen(!menuOpen)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={colors.dark} strokeWidth="2">
              {menuOpen ? <path d="M6 6l12 12M6 18L18 6"></path> : <path d="M3 7h18M3 12h18M3 17h18"></path>}
            </svg>
          </div>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="nav-mobile" style={{ display: "none", background: colors.warmWhite, padding: "8px 28px 20px", borderBottom: `1px solid ${colors.softPink}` }}>
            {NAV_LINKS.map(l => (
              <div key={l.id} onClick={() => scrollTo(l.id)} style={{ padding: "12px 0", fontSize: 16, fontWeight: 500, cursor: "pointer", borderBottom: `1px solid ${colors.softPink}40` }}>{l.label}</div>
            ))}
            <a href={whatsappLink} target="_blank" rel="noopener" style={{ display: "inline-block", marginTop: 12, background: colors.accent, color: "#fff", padding: "12px 28px", borderRadius: br, fontSize: 15, fontWeight: 600, textDecoration: "none" }}>Agendar sessão</a>
          </div>
        )}
      </nav>

      {/* ===== HERO ===== */}
      <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 80 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 28px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }} className="hero-grid">
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: colors.accent, marginBottom: 20 }}>Psicóloga Clínica · CRP 06/150651</div>
            <h1 style={{ fontFamily: `'${headingFont}', serif`, fontSize: 52, fontWeight: 700, lineHeight: 1.15, margin: "0 0 24px", color: colors.dark }}>
              Um espaço de escuta<br></br><span style={{ color: colors.accent }}>para você ser ouvido</span>
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.7, opacity: 0.75, margin: "0 0 36px", maxWidth: 480 }}>
              Atendimento online com abordagem psicanalítica. Um lugar seguro para falar livremente, sem julgamentos.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href={whatsappLink} target="_blank" rel="noopener" style={{
                background: colors.accent, color: "#fff", padding: "14px 32px", borderRadius: br, fontSize: 16, fontWeight: 600, textDecoration: "none", transition: "all 0.25s",
              }}
                onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 8px 24px rgba(188,120,128,0.3)"; }}
                onMouseLeave={e => { e.target.style.transform = ""; e.target.style.boxShadow = ""; }}
              >Agendar primeira sessão</a>
              <span onClick={() => scrollTo("como-funciona")} style={{
                border: `2px solid ${colors.accent}`, color: colors.accent, padding: "14px 32px", borderRadius: br, fontSize: 16, fontWeight: 600, cursor: "pointer", transition: "all 0.25s",
              }}
                onMouseEnter={e => { e.target.style.background = colors.accent; e.target.style.color = "#fff"; }}
                onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = colors.accent; }}
              >Saiba mais</span>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ position: "relative" }}>
              <div style={{ width: 400, height: 480, borderRadius: "200px 200px 24px 24px", overflow: "hidden", position: "relative", zIndex: 2 }}>
                <img src="assets/maiara-photo.jpeg" alt="Maiara Dias Cunha" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
              </div>
              <div style={{ position: "absolute", top: -20, right: -20, width: 400, height: 480, borderRadius: "200px 200px 24px 24px", background: colors.softPink, opacity: 0.4, zIndex: 1 }}></div>
            </div>
          </div>
        </div>
      </section>



      {/* ===== SOBRE ===== */}
      <section id="sobre" style={{ background: colors.cream, padding: "100px 28px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: colors.accent, marginBottom: 16 }}>Sobre mim</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "start", textAlign: "left" }} className="sobre-grid">
            <div>
              <p style={{ fontSize: 17, lineHeight: 1.8, margin: "0 0 20px", opacity: 0.8 }}>
                Sou psicóloga e trabalho a partir da psicanálise. Acredito que cada pessoa carrega uma história única, atravessada por experiências, afetos e marcas que nem sempre são conscientes.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.8, margin: 0, opacity: 0.8 }}>
                Muitas vezes, aquilo que nos faz sofrer não é totalmente claro — aparece em forma de angústia, repetições, conflitos ou sensações difíceis de nomear. Meu trabalho é oferecer um espaço de escuta onde você possa falar livremente, sem julgamentos.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { label: "Formação", text: "Psicologia pela USJT (2019)" },
                { label: "Pós-Graduação", text: "Psicologia Clínica, Psicanálise e Análise do Contemporâneo — PUC-RS" },
                { label: "Abordagem", text: "Psicodinâmica sob o olhar da psicanálise" },
                { label: "Atendimento", text: "Online, com sigilo e ética" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "20px 24px", background: colors.warmWhite, borderRadius: br, borderLeft: `3px solid ${colors.accent}` }}>
                  <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: colors.accent, marginBottom: 6 }}>{item.label}</div>
                  <div style={{ fontSize: 15, lineHeight: 1.5, opacity: 0.8 }}>{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMO FUNCIONA ===== */}
      <section id="como-funciona" style={{ padding: "100px 28px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: colors.accent, marginBottom: 16, textAlign: "center" }}>Psicanálise</div>
          <h2 style={{ fontFamily: `'${headingFont}', serif`, fontSize: 38, fontWeight: 700, textAlign: "center", margin: "0 0 20px" }}>Como funciona a análise</h2>
          <p style={{ fontSize: 17, lineHeight: 1.8, textAlign: "center", maxWidth: 700, margin: "0 auto 60px", opacity: 0.75 }}>
            A psicanálise é um processo que acontece pela fala e pela escuta. Não se trata de conselhos ou respostas prontas — trata-se de um trabalho profundo.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 28 }} className="features-grid">
            {[
              { num: "01", title: "Fala livre", desc: "Você é convidado a falar livremente — inclusive sobre o que parece confuso, contraditório ou sem importância." },
              { num: "02", title: "Escuta profunda", desc: "Entrar em contato com aquilo que está fora do campo da consciência, mas influencia sentimentos, escolhas e relações." },
              { num: "03", title: "Seu tempo", desc: "O processo respeita o seu tempo. Não há exigência de falar sobre nada antes de você se sentir à vontade." },
            ].map((item, i) => (
              <div key={i} style={{ padding: 36, background: colors.cream, borderRadius: br + 8, position: "relative", overflow: "hidden" }}>
                <div style={{ fontFamily: `'${headingFont}', serif`, fontSize: 48, fontWeight: 700, color: colors.softPink, marginBottom: 16 }}>{item.num}</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 12px" }}>{item.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.7, margin: 0, opacity: 0.75 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PARA QUEM É ===== */}
      <section id="para-quem" style={{ background: colors.accent, color: "#fff", padding: "100px 28px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", opacity: 0.7, marginBottom: 16, textAlign: "center" }}>Para quem é</div>
          <h2 style={{ fontFamily: `'${headingFont}', serif`, fontSize: 38, fontWeight: 700, textAlign: "center", margin: "0 0 20px" }}>A análise pode ser um caminho para quem</h2>
          <p style={{ textAlign: "center", opacity: 0.8, margin: "0 0 50px", fontSize: 16 }}>Não é preciso "saber exatamente o que dizer" para começar. A fala se constrói no próprio processo.</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, maxWidth: 750, margin: "0 auto" }} className="para-quem-grid">
            {[
              "Sente angústias que não consegue explicar completamente",
              "Percebe repetições em relações ou situações de vida",
              "Vive conflitos internos ou dificuldades emocionais",
              "Passou por experiências marcantes que ainda reverberam",
              "Deseja se compreender para além do superficial",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "20px 24px", background: "rgba(255,255,255,0.12)", borderRadius: br, backdropFilter: "blur(4px)" }}>
                <div style={{ minWidth: 28, height: 28, borderRadius: "50%", background: "rgba(255,255,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, marginTop: 2 }}>{i + 1}</div>
                <span style={{ fontSize: 15, lineHeight: 1.6, opacity: 0.95 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESSO ===== */}
      <section style={{ padding: "100px 28px", background: colors.cream }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: colors.accent, marginBottom: 16 }}>O processo</div>
          <h2 style={{ fontFamily: `'${headingFont}', serif`, fontSize: 38, fontWeight: 700, margin: "0 0 28px" }}>O sintoma tem um sentido</h2>
          <p style={{ fontSize: 17, lineHeight: 1.9, opacity: 0.8, margin: "0 0 20px" }}>
            Na psicanálise, o sintoma não é visto apenas como algo a ser eliminado, mas como algo que tem um sentido na história de cada sujeito. O trabalho não é de apagar aquilo que incomoda rapidamente, mas de escutar o que isso tem a dizer.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.9, opacity: 0.8, margin: 0 }}>
            Ao longo do percurso, é possível construir novas formas de se relacionar consigo mesmo, com o outro e com a própria história.
          </p>
        </div>
      </section>

      {/* ===== BLOG ===== */}
      <BlogSection colors={colors} headingFont={headingFont} br={br} />

      {/* ===== CONTATO ===== */}
      <section id="contato" style={{ padding: "100px 28px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: colors.accent, marginBottom: 16 }}>Contato</div>
          <h2 style={{ fontFamily: `'${headingFont}', serif`, fontSize: 38, fontWeight: 700, margin: "0 0 20px" }}>Vamos conversar?</h2>
          <p style={{ fontSize: 17, lineHeight: 1.8, opacity: 0.75, margin: "0 0 40px" }}>
            Se você sente que esse espaço faz sentido para você, entre em contato para agendar uma primeira sessão ou tirar dúvidas.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener" style={{
            display: "inline-flex", alignItems: "center", gap: 12,
            background: colors.accent, color: "#fff", padding: "18px 40px", borderRadius: br, fontSize: 18, fontWeight: 600, textDecoration: "none", transition: "all 0.25s",
          }}
            onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 8px 24px rgba(188,120,128,0.35)"; }}
            onMouseLeave={e => { e.target.style.transform = ""; e.target.style.boxShadow = ""; }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg>
            Agendar pelo WhatsApp
          </a>
          <br></br>
          <a href="https://instagram.com/psico.maiaradiascunha" target="_blank" rel="noopener" style={{
            display: "inline-flex", alignItems: "center", gap: 10, marginTop: 20,
            border: `2px solid ${colors.accent}`, color: colors.accent, padding: "14px 32px", borderRadius: br, fontSize: 16, fontWeight: 600, textDecoration: "none", transition: "all 0.25s",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = colors.accent; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = colors.accent; }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            @psico.maiaradiascunha
          </a>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer style={{ borderTop: `1px solid ${colors.softPink}`, padding: "40px 28px", textAlign: "center" }}>
        <div style={{ fontFamily: `'${headingFont}', serif`, fontSize: 18, fontWeight: 700, color: colors.accent, marginBottom: 8 }}>Maiara Dias Cunha</div>
        <p style={{ fontSize: 13, opacity: 0.5, margin: 0 }}>Psicóloga Clínica · CRP 06/150651 · Atendimento online</p>
      </footer>

      {/* ===== WHATSAPP FLOAT ===== */}
      <a href={whatsappLink} target="_blank" rel="noopener" style={{
        position: "fixed", bottom: 28, right: 28, width: 56, height: 56, borderRadius: "50%", background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 16px rgba(0,0,0,0.15)", zIndex: 90, transition: "transform 0.2s",
      }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg>
      </a>

      {/* ===== TWEAKS ===== */}
      <TweaksPanel title="Tweaks">
        <TweakSection label="Visual">
          <TweakColor label="Cor destaque" value={tweaks.accentColor} onChange={v => setTweak("accentColor", v)} />
          <TweakSelect label="Fonte título" value={tweaks.fontHeading} onChange={v => setTweak("fontHeading", v)} options={["Playfair Display", "Cormorant Garamond", "Lora", "DM Serif Display"]} />
          <TweakSlider label="Arredondamento" value={tweaks.borderRadius} onChange={v => setTweak("borderRadius", v)} min={0} max={24} step={2} />
        </TweakSection>
      </TweaksPanel>
    </div>
  );
}

export default App;
