import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import profile from "./assets/profile.jpg";

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);

      if (typeof window !== "undefined") {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
          setDark(storedTheme === "dark");
        } else {
          setDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
        }
      }
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark, mounted]);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-500">

      {/* HEADER */}
      <header className="bg-white dark:bg-gray-800 shadow p-10 border-b dark:border-gray-700">
        <div className="flex flex-col items-center gap-6">

          <img
            src={profile}
            alt="Foto de Matheus Pais de Almeida"
            className="w-32 h-32 rounded-full object-cover border-4 border-gray-300 dark:border-gray-600 shadow"
          />

          <div className="text-center">
            <h1 className="text-4xl font-bold">Matheus Pais de Almeida</h1>
            <p className="text-xl mt-2">
            Desenvolvedor Frontend |React, JavaScript, Node.js          
            </p>
            <p className="text-sm opacity-70 mt-1">
              Londrina - PR • Disponível para oportunidades remotas
            </p>
          </div>

          <button
            onClick={() => setDark(!dark)}
            className="px-4 py-2 rounded-xl border 
                       bg-gray-200 text-gray-900 
                       dark:bg-gray-700 dark:text-gray-100
                       hover:opacity-80 transition"
          >
            {dark ? "☀️ Modo Claro" : "🌙 Modo Escuro"}
          </button>
        </div>
      </header>

      {/* NAV */}
      <nav className="flex justify-center gap-6 bg-white dark:bg-gray-800 shadow py-4 border-b dark:border-gray-700 font-medium">
        {[
          ["Sobre", "#sobre"],
          ["Objetivo", "#objetivo"],
          ["Habilidades", "#habilidades"],
          ["Projetos", "#projetos"],
          ["Formação", "#desenvolvimento"],
          ["Timeline", "#timeline"],
          ["Contato", "#contato"],
        ].map(([label, link], i) => (
          <a key={i} href={link} className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            {label}
          </a>
        ))}
      </nav>

      <main className="max-w-4xl mx-auto p-6">

        {/* SOBRE */}
        <motion.section
          id="sobre"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 border dark:border-gray-700 p-6 rounded-xl shadow mb-8"
        >
          <h2 className="text-2xl font-bold mb-3">Sobre mim</h2>
          <p>
            Sou desenvolvedor de software formado em Ciência da Computação pela UniFil,
            com foco em desenvolvimento web utilizando JavaScript e React.

          Atualmente, desenvolvo interfaces web modernas e interativas, aplicando JavaScript,
          consumo de APIs e boas práticas de frontend.

          Busco oportunidades como desenvolvedor Frontend ou Full Stack Júnior,
          onde posso aplicar e evoluir minhas habilidades em JavaScript, React e desenvolvimento web.
          </p>
        </motion.section>

        {/* OBJETIVO */}
        <motion.section
          id="objetivo"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 border dark:border-gray-700 p-6 rounded-xl shadow mb-8"
        >
          <h2 className="text-2xl font-bold mb-3">Objetivo</h2>
          <p>
           Busco minha primeira oportunidade como desenvolvedor frontend júnior,
          com foco em JavaScript, aplicando conhecimentos em manipulação de DOM,
          lógica de programação e desenvolvimento de interfaces interativas,
          enquanto evoluo continuamente e contribuo com soluções eficientes.
          </p>
        </motion.section>

        {/* HABILIDADES */}
        <motion.section
          id="habilidades"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 border dark:border-gray-700 p-6 rounded-xl shadow mb-8"
        >
          <h2 className="text-2xl font-bold mb-3">Habilidades</h2>
          <ul className="space-y-2">
            <li><strong>Linguagens:</strong> Python, Java, JavaScript</li>
            <li><strong>Frontend:</strong> HTML, CSS, React, Vite</li>
            <li><strong>Backend:</strong> Django, PHP</li>
            <li><strong>Banco de Dados:</strong> MySQL, PostgreSQL</li>
            <li><strong>Dados:</strong> Pandas, NumPy, Matplotlib</li>
            <li><strong>Ferramentas:</strong> Git, GitHub, Docker, Node.js</li>
          </ul>
        </motion.section>

        {/* PROJETOS */}
        <motion.section
          id="projetos"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 border dark:border-gray-700 p-6 rounded-xl shadow mb-8"
        >
          <h2 className="text-2xl font-bold mb-4">Projetos</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                nome: "Easy Chess",
                desc: "Jogo de xadrez 2D com regras completas.",
                tech: "Python • Pygame",
                link: "https://github.com/computacao-aplicada/link-RVsilva21",
              },
              {
                nome: "Calculadora Web",
                desc: "Calculadora web interativa.",
                tech: "HTML • CSS • JavaScript",
                link: "https://gpdax.github.io/Calculator/",
              },
              {
                nome: "Etch-a-Sketch",
                desc: "Aplicação de desenho interativa.",
                tech: "HTML • CSS • JavaScript",
                link: "https://gpdax.github.io/Etch-A-Sketch/",
              },
              
            ].map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="p-4 bg-gray-100 dark:bg-gray-700 rounded-xl shadow"
              >
                <h3 className="text-lg font-bold">{p.nome}</h3>
                <p className="text-sm mt-2">{p.desc}</p>
                <p className="text-xs mt-1 opacity-70">{p.tech}</p>

                <a
                  href={p.link}
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline mt-2 inline-block"
                >
                  Ver projeto
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* FORMAÇÃO */}
        <motion.section
          id="desenvolvimento"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 border dark:border-gray-700 p-6 rounded-xl shadow mb-8"
        >
          <h2 className="text-2xl font-bold mb-4">Formação e Estudos</h2>

          <ul className="list-disc pl-6 space-y-3">
             <li>
                <strong>Bacharelado em Ciência da Computação</strong> — UniFil (2025)             
            </li>

                <li>
                <strong>The Odin Project — Foundations</strong>  
                    <br />
                      Formação prática em HTML, CSS, JavaScript e Git
                      </li>

                             <li>
                              <strong>The Odin Project — Intermediate HTML & CSS</strong>  
                                        <br />
                          Em andamento (foco em layouts responsivos e boas práticas de CSS)
                        </li>
            </ul>
        </motion.section>

        {/* TIMELINE */}
        <motion.section
          id="timeline"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 border dark:border-gray-700 p-6 rounded-xl shadow mb-8"
        >
          <h2 className="text-2xl font-bold mb-3">Linha do Tempo</h2>
          <ul className="border-l-4 border-gray-400 dark:border-gray-600 pl-6 space-y-4">
            <li><strong>2024:</strong> Desenvolvimento web com PHP e Docker</li>

            <li><strong>2025:</strong> Estágio em desenvolvimento</li>
            <li><strong>2025:</strong> Bacharelado em Ciência da Computação — UniFil</li>
            <li><strong>2025:</strong> Projetos com Python e dados</li>

            <li><strong>2026:</strong> The Odin Project — Foundations (HTML, CSS, JavaScript e Git)</li>
            <li><strong>2026:</strong> The Odin Project — Intermediate HTML & CSS (em andamento)</li>
            <li><strong>2026:</strong> Foco em JavaScript (The Odin Project) e React em projetos pessoais</li>          
            </ul>
        </motion.section>

        {/* CONTATO */}
        <motion.section
          id="contato"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 border dark:border-gray-700 p-6 rounded-xl shadow mb-8"
        >
          <h2 className="text-2xl font-bold mb-3">Contato</h2>

          <p>Email: <a className="text-blue-600 underline ml-1" href="mailto:mathpdalmeida3@gmail.com">mathpdalmeida3@gmail.com</a></p>
          <p>LinkedIn: <a className="text-blue-600 underline ml-1" href="https://linkedin.com" target="_blank">Perfil</a></p>
          <p>GitHub: <a className="text-blue-600 underline ml-1" href="https://github.com/gpdax" target="_blank">github.com/gpdax</a></p>
        </motion.section>

      </main>

      <footer className="text-center py-6 opacity-70 text-sm">
        © 2026 Matheus Pais de Almeida
      </footer>

    </div>
  );
}



