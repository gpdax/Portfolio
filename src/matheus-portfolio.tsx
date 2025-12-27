import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import profile from "./assets/profile.jpg";

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  // Detecta tema ao carregar
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

  // Atualiza tema no <html> e localStorage
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
              Desenvolvedor de Software | Python | Java | Dados | Interesse em Frontend e Backend
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
          ["Habilidades", "#habilidades"],
          ["Projetos", "#projetos"],
          ["Certificações", "#certificacoes"],
          ["Timeline", "#timeline"],
          ["Contato", "#contato"],
        ].map(([label, link], i) => (
          <a
            key={i}
            href={link}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            {label}
          </a>
        ))}
      </nav>

      {/* MAIN */}
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
            Sou recém-graduado em Ciência da Computação pela UniFil e estou em início de carreira
            na área de desenvolvimento de software. Durante a graduação, tive contato com
            desenvolvimento de aplicações, análise de dados e programação utilizando
            Python, Java e PHP. Atualmente, estou focado em aprender e aprimorar meus conhecimentos
            em <strong>Frontend</strong>, estudando <strong>HTML, CSS, JavaScript</strong> e
            o framework <strong>React</strong>, buscando criar interfaces simples, modernas
            e responsivas, enquanto continuo evoluindo boas práticas de programação.
          </p>
        </motion.section>

        {/* HABILIDADES */}
        <motion.section
          id="habilidades"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 border dark:border-gray-700 p-6 rounded-xl shadow mb-8"
        >
          <h2 className="text-2xl font-bold mb-3">Habilidades</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Linguagens:</strong> Python, Java, PHP, JavaScript</li>
            <li><strong>Frontend:</strong> HTML, CSS, JavaScript, React, Vite</li>
            <li><strong>Frameworks:</strong> Django, React, Vue</li>
            <li><strong>Bancos de Dados:</strong> MySQL, PostgreSQL</li>
            <li><strong>Bibliotecas:</strong> Pandas, NumPy, Matplotlib</li>
            <li><strong>Versionamento:</strong> Git, GitHub</li>
            <li><strong>Ambiente:</strong> Node.js, npm</li>
            <li><strong>Deploy:</strong> Docker</li>
          </ul>
        </motion.section>

        {/* PROJETOS */}
        <motion.section
          id="projetos"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 border dark:border-gray-700 p-6 rounded-xl shadow mb-8"
        >
          <h2 className="text-2xl font-bold mb-4">Projetos</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                nome: "Easy Chess",
                desc: "Jogo de xadrez 2D em Python com Pygame.",
                link: "https://github.com/computacao-aplicada/link-RVsilva21",
              },
              {
                nome: "Deploy com Docker",
                desc: "Projeto acadêmico focado em conteinerização e deploy.",
                link: null,
              },
              {
                nome: "Portal de Compras",
                desc: "Sistema web em PHP desenvolvido durante estágio.",
                link: "https://github.com/Estagio-UniFil/Portal_de_Compras",
              },
            ].map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="p-4 bg-gray-100 dark:bg-gray-700 rounded-xl shadow"
              >
                <h3 className="text-lg font-bold">{p.nome}</h3>
                <p className="text-sm mt-2 mb-3">{p.desc}</p>

                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Ver repositório no GitHub
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CERTIFICAÇÕES */}
        <motion.section
          id="certificacoes"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 border dark:border-gray-700 p-6 rounded-xl shadow mb-8"
        >
          <h2 className="text-2xl font-bold mb-4">Certificações & Estudos</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Em andamento:</strong> The Odin Project — Foundations</li>
            <li><strong>Planejado:</strong> The Odin Project — Full Stack JavaScript</li>
          </ul>
        </motion.section>

        {/* TIMELINE */}
        <motion.section
          id="timeline"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 border dark:border-gray-700 p-6 rounded-xl shadow mb-8"
        >
          <h2 className="text-2xl font-bold mb-3">Linha do Tempo</h2>
          <ul className="border-l-4 border-gray-400 dark:border-gray-600 pl-6 space-y-4">
            <li><strong>2024:</strong> Sistemas web em PHP e estudos com Docker</li>
            <li><strong>2025:</strong> Projetos acadêmicos em Python</li>
            <li><strong>2025:</strong> Estágio e estudos em Frontend (React)</li>
          </ul>
        </motion.section>

        {/* CONTATO */}
        <motion.section
          id="contato"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 border dark:border-gray-700 p-6 rounded-xl shadow mb-8"
        >
          <h2 className="text-2xl font-bold mb-3">Contato</h2>
          <p>
            Email:
            <a
              className="text-blue-600 dark:text-blue-400 underline ml-1"
              href="mailto:mathpdalmeida3@gmail.com"
            >
              mathpdalmeida3@gmail.com
            </a>
          </p>
          <p>
            LinkedIn:
            <a
              className="text-blue-600 dark:text-blue-400 underline ml-1"
              href="https://linkedin.com/in/matheuspais0b22a2327"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/matheuspais0b22a2327
            </a>
          </p>
          <p>
            GitHub:
            <a
              className="text-blue-600 dark:text-blue-400 underline ml-1"
              href="https://github.com/gpdax"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/gpdax
            </a>
          </p>
        </motion.section>

      </main>

      <footer className="text-center py-6 opacity-70 text-sm">
        © 2025 Matheus Pais de Almeida — Portfólio em evolução
      </footer>

    </div>
  );
}




