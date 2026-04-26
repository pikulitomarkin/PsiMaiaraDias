/* Blog Section Component */

const BLOG_POSTS = [
  {
    id: "burnout",
    title: "A Síndrome de Burnout",
    subtitle: "Saiba quais são os seus principais sintomas",
    image: "assets/blog-burnout-cover.png",
    content: [
      { type: "p", text: "A Síndrome de Burnout é um distúrbio emocional causado pelo esgotamento profissional. Reconhecer os sinais é o primeiro passo para buscar ajuda." },
      { type: "h3", text: "Principais sintomas" },
      { type: "list", items: ["Cansaço excessivo", "Dor de cabeça frequente", "Alterações no apetite", "Negatividade constante", "Muita insegurança"] },
      { type: "p", text: "Se você se identifica com esses sinais, considere procurar ajuda profissional. O autoconhecimento e o acompanhamento psicológico podem fazer toda a diferença." },
    ],
  },
  {
    id: "autoconhecimento",
    title: "Autoconhecimento",
    subtitle: "Um presente que você se dá para a vida toda",
    image: "assets/blog-autoconhecimento.png",
    content: [
      { type: "quote", text: "Autoconhecimento é um presente que você se dá para a vida toda." },
      { type: "p", text: "Conhecer a si mesmo é um processo contínuo que transforma a forma como nos relacionamos com o mundo, com os outros e com nossas próprias emoções. A psicanálise oferece um caminho profundo para essa jornada." },
    ],
  },
  {
    id: "procrastinar",
    title: "Dicas para procrastinar menos",
    subtitle: "Estratégias práticas para o dia a dia",
    image: "assets/blog-procrastinar.png",
    content: [
      { type: "p", text: "A procrastinação pode estar ligada a questões emocionais mais profundas, como medo de falhar ou perfeccionismo. Enquanto exploramos essas raízes, algumas estratégias práticas podem ajudar:" },
      { type: "numbered", items: [
        { bold: "Divida as tarefas:", text: "Separe grandes tarefas em pequenas etapas gerenciáveis para facilitar o início." },
        { bold: "Use cronômetro:", text: "Trabalhe por 25 minutos, faça uma pausa de 5 minutos. Repita esse ciclo para manter o foco." },
        { bold: "Elimine distrações:", text: "Crie um ambiente de trabalho livre de distrações, desligando notificações e mantendo a área organizada." },
      ]},
    ],
  },
];

function BlogSection({ colors, headingFont, br }) {
  const [openPost, setOpenPost] = React.useState(null);

  const post = openPost ? BLOG_POSTS.find(p => p.id === openPost) : null;

  return (
    <section id="blog" style={{ padding: "100px 28px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: colors.accent, marginBottom: 16, textAlign: "center" }}>Blog</div>
        <h2 style={{ fontFamily: `'${headingFont}', serif`, fontSize: 38, fontWeight: 700, textAlign: "center", margin: "0 0 50px" }}>Reflexões e dicas</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }} className="blog-grid">
          {BLOG_POSTS.map(p => (
            <div key={p.id} onClick={() => setOpenPost(p.id)} style={{
              cursor: "pointer", borderRadius: br + 8, overflow: "hidden", background: colors.cream, transition: "transform 0.25s, box-shadow 0.25s",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(188,120,128,0.15)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
            >
              <div style={{ aspectRatio: "1", overflow: "hidden" }}>
                <img src={p.image} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s" }}
                  onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
                  onMouseLeave={e => e.target.style.transform = ""}
                />
              </div>
              <div style={{ padding: "20px 24px" }}>
                <h3 style={{ fontFamily: `'${headingFont}', serif`, fontSize: 20, fontWeight: 700, margin: "0 0 6px" }}>{p.title}</h3>
                <p style={{ fontSize: 14, opacity: 0.65, margin: 0, lineHeight: 1.5 }}>{p.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {post && (
        <div style={{ position: "fixed", inset: 0, zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: 28 }}
          onClick={() => setOpenPost(null)}
        >
          <div style={{ position: "absolute", inset: 0, background: "rgba(61,34,34,0.5)", backdropFilter: "blur(4px)" }}></div>
          <div style={{ position: "relative", background: colors.warmWhite, borderRadius: br + 12, maxWidth: 640, width: "100%", maxHeight: "85vh", overflow: "auto", padding: "48px 40px" }}
            onClick={e => e.stopPropagation()}
          >
            <button onClick={() => setOpenPost(null)} style={{
              position: "absolute", top: 16, right: 16, background: "none", border: "none", cursor: "pointer", fontSize: 24, color: colors.dark, opacity: 0.5, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%",
            }}
              onMouseEnter={e => e.target.style.opacity = 1}
              onMouseLeave={e => e.target.style.opacity = 0.5}
            >×</button>

            <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: colors.accent, marginBottom: 12 }}>@psico.maiaradiascunha</div>
            <h2 style={{ fontFamily: `'${headingFont}', serif`, fontSize: 32, fontWeight: 700, margin: "0 0 6px" }}>{post.title}</h2>
            <p style={{ fontSize: 15, opacity: 0.6, margin: "0 0 32px" }}>{post.subtitle}</p>

            {post.content.map((block, i) => {
              if (block.type === "p") return <p key={i} style={{ fontSize: 16, lineHeight: 1.8, opacity: 0.8, margin: "0 0 20px" }}>{block.text}</p>;
              if (block.type === "h3") return <h3 key={i} style={{ fontFamily: `'${headingFont}', serif`, fontSize: 22, fontWeight: 700, margin: "28px 0 16px" }}>{block.text}</h3>;
              if (block.type === "quote") return (
                <blockquote key={i} style={{ fontFamily: `'${headingFont}', serif`, fontSize: 24, fontStyle: "italic", lineHeight: 1.6, color: colors.accent, borderLeft: `3px solid ${colors.accent}`, paddingLeft: 24, margin: "0 0 24px" }}>
                  {block.text}
                </blockquote>
              );
              if (block.type === "list") return (
                <ul key={i} style={{ margin: "0 0 20px", paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                  {block.items.map((item, j) => (
                    <li key={j} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 16, lineHeight: 1.5 }}>
                      <span style={{ minWidth: 32, height: 32, borderRadius: "50%", background: colors.softPink, color: colors.accent, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700 }}>{j + 1}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              );
              if (block.type === "numbered") return (
                <div key={i} style={{ display: "flex", flexDirection: "column", gap: 20, margin: "0 0 20px" }}>
                  {block.items.map((item, j) => (
                    <div key={j} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                      <span style={{ minWidth: 36, height: 36, borderRadius: "50%", background: colors.softPink, color: colors.accent, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 700 }}>{j + 1}</span>
                      <div><strong>{item.bold}</strong> <span style={{ opacity: 0.8 }}>{item.text}</span></div>
                    </div>
                  ))}
                </div>
              );
              return null;
            })}
          </div>
        </div>
      )}
    </section>
  );
}

export default BlogSection;
