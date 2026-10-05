import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight, Download, Github, Linkedin, Mail, MapPin, ExternalLink,
  Cloud, Boxes, Workflow, ShieldCheck, Activity, Terminal, Database,
  GitBranch, Server, Sparkles, CheckCircle2, Menu, X
} from "lucide-react";
import { useState } from "react";
import { portfolio } from "./data/portfolio";
import profileImage from "./assets/harish-profile.png";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: .65, ease: "easeOut" } }
};

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="mb-2 text-sm font-semibold uppercase tracking-[.24em] text-cyan-400">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">{title}</h2>
      <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
    </div>
  );
}

function PipelineVisual() {
  const nodes = [
    ["GitHub", Github], ["CI/CD", Workflow], ["Security", ShieldCheck],
    ["ECR", Boxes], ["Terraform", Terminal], ["EKS", Cloud], ["Monitoring", Activity]
  ] as const;
  return (
    <div className="relative mx-auto h-[430px] max-w-xl">
      <div className="absolute inset-10 rounded-full bg-cyan-500/10 blur-3xl" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/15 border-dashed"
      />
      <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_35px_12px_rgba(34,211,238,.3)]" />
      {nodes.map(([label, Icon], i) => {
        const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
        const x = 50 + Math.cos(angle) * 39;
        const y = 50 + Math.sin(angle) * 39;
        return (
          <motion.div
            key={label}
            initial={{ opacity: 0, scale: .8 }}
            animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
            transition={{ delay: .15 * i, duration: .5 }}
            whileHover={{ scale: 1.08 }}
            className="absolute w-28 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-slate-950/75 p-3 text-center shadow-xl backdrop-blur-xl"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 text-cyan-300">
              <Icon size={19} />
            </div>
            <p className="text-xs font-semibold text-white">{label}</p>
            <p className="mt-1 text-[10px] text-slate-500">DevOps</p>
          </motion.div>
        );
      })}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full border border-orange-400/20 bg-orange-400/5 px-5 py-2 text-xs text-orange-200">
        AWS • Scalable • Secure • Automated
      </div>
    </div>
  );
}

function App() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "55%"]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#020711] text-slate-200">
      <motion.div style={{ top: glowY }} className="pointer-events-none fixed left-1/2 z-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[.14]" style={{ backgroundImage: "linear-gradient(rgba(56,189,248,.22) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,.22) 1px, transparent 1px)", backgroundSize: "55px 55px", maskImage: "linear-gradient(to bottom, black, transparent 75%)" }} />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#020711]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <span className="text-xl font-black tracking-tight text-cyan-400">VKH</span>
            <span className="hidden border-l border-white/10 pl-3 sm:block">
              <span className="block text-sm font-bold text-white">V K Harish Bodapati</span>
              <span className="block text-[11px] text-slate-500">DevOps Engineer</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-slate-300 lg:flex">
            {["Home","About","Skills","Experience","Projects","Architecture","Certifications","Contact"].map(x => (
              <a key={x} href={`#${x.toLowerCase()}`} className="transition hover:text-cyan-300">{x}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a aria-label="GitHub" href={portfolio.github} target="_blank" rel="noreferrer" className="hidden rounded-lg p-2 text-slate-300 hover:bg-white/5 hover:text-white sm:block"><Github size={18}/></a>
            <a aria-label="LinkedIn" href={portfolio.linkedin} target="_blank" rel="noreferrer" className="hidden rounded-lg p-2 text-slate-300 hover:bg-white/5 hover:text-white sm:block"><Linkedin size={18}/></a>
            <a href="/Harish_Bodapati_DevOps.pdf" download className="hidden rounded-lg bg-gradient-to-r from-blue-500 to-violet-600 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-blue-500/20 sm:block">Download Resume <Download className="ml-1 inline" size={14}/></a>
            <button onClick={() => setOpen(!open)} className="rounded-lg p-2 text-slate-200 lg:hidden">{open ? <X/> : <Menu/>}</button>
          </div>
        </div>
        {open && <div className="border-t border-white/10 bg-[#020711]/95 px-5 py-4 lg:hidden">{["Home","About","Skills","Experience","Projects","Architecture","Certifications","Contact"].map(x => <a onClick={() => setOpen(false)} className="block py-2 text-sm" key={x} href={`#${x.toLowerCase()}`}>{x}</a>)}</div>}
      </header>

      <main className="relative z-10">
        <section id="home" className="mx-auto grid max-w-7xl items-center gap-8 px-5 pb-14 pt-14 lg:grid-cols-[1.02fr_.98fr] lg:px-8 lg:pt-20">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <p className="mb-3 text-sm font-medium text-slate-400">Hi, I'm</p>
            <h1 className="text-5xl font-black tracking-tight text-white md:text-6xl">
              V K Harish <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">Bodapati</span>
            </h1>
            <h2 className="mt-3 text-2xl font-bold text-slate-200 md:text-3xl">DevOps Engineer</h2>
            <p className="mt-4 text-sm font-medium text-cyan-300">AWS Cloud Infrastructure · Kubernetes · Terraform · CI/CD · DevSecOps</p>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400">{portfolio.summary}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#projects" className="rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 px-5 py-3 text-sm font-bold text-white shadow-xl shadow-blue-500/20 transition hover:-translate-y-0.5">View My Projects <ArrowRight className="ml-2 inline" size={16}/></a>
              <a href="/Harish_Bodapati_DevOps.pdf" download className="rounded-xl border border-cyan-400/40 bg-cyan-400/5 px-5 py-3 text-sm font-bold text-white transition hover:bg-cyan-400/10">Download Resume <Download className="ml-2 inline" size={16}/></a>
            </div>
            <div className="mt-7 flex flex-wrap gap-5 text-sm text-slate-400">
              <a href={portfolio.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-300"><Linkedin className="mr-2 inline" size={16}/>LinkedIn</a>
              <a href={portfolio.github} target="_blank" rel="noreferrer" className="hover:text-cyan-300"><Github className="mr-2 inline" size={16}/>GitHub</a>
              <a href={`mailto:${portfolio.email}`} className="hover:text-cyan-300"><Mail className="mr-2 inline" size={16}/>Email Me</a>
              <span><MapPin className="mr-2 inline text-rose-400" size={16}/>{portfolio.location}</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8 }}>
            <div className="relative">
              <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl"/>
              <img src={profileImage} alt="V K Harish Bodapati" className="relative z-10 mx-auto w-[72%] max-w-md rounded-[2.5rem] object-cover object-top drop-shadow-[0_0_45px_rgba(59,130,246,.18)]" />
              <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 rounded-2xl border border-white/10 bg-slate-950/80 px-5 py-3 shadow-2xl backdrop-blur-xl">
                <div className="text-2xl font-black text-white">6+</div><div className="text-xs text-slate-400">Years DevOps Experience</div>
              </div>
            </div>
            <PipelineVisual/>
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-white/[.025] sm:grid-cols-3 lg:grid-cols-5">
            {portfolio.stats.map(([value, label], i) => <div key={label} className="border-white/10 p-5 text-center sm:border-r last:border-r-0"><div className="text-2xl font-black text-white">{value}</div><div className="mt-1 text-xs text-slate-500">{label}</div></div>)}
          </div>
        </section>

        <section id="about" className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: .25 }} variants={fadeUp}>
            <SectionTitle eyebrow="Profile" title="About Me" />
            <p className="leading-8 text-slate-400">I am a DevOps Engineer with strong hands-on experience in AWS, Kubernetes, Terraform, CI/CD, DevSecOps and observability. I enjoy building scalable, secure and automated systems, working on production environments, solving complex problems and improving deployment and operational efficiency.</p>
          </motion.div>
          <motion.div id="skills" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .15 }} variants={fadeUp}>
            <SectionTitle eyebrow="Toolbox" title="Core Skills" />
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {portfolio.skills.map((skill, i) => <motion.div whileHover={{ y: -5, scale: 1.02 }} transition={{ duration: .2 }} key={skill} className="rounded-xl border border-white/10 bg-white/[.035] px-4 py-3 text-sm font-semibold text-slate-200 shadow-lg shadow-black/10">{skill}</motion.div>)}
            </div>
          </motion.div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
          <SectionTitle eyebrow="Career" title="Experience" />
          <div className="relative ml-3 border-l border-cyan-400/20 pl-8">
            {portfolio.experience.map((job, i) => (
              <motion.article initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }} variants={fadeUp} key={job.company} className="relative mb-12">
                <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-[#020711] bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,.6)]"/>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div><h3 className="text-xl font-bold text-white">{job.role}</h3><p className="mt-1 text-cyan-300">{job.company}</p></div>
                  <span className="rounded-full border border-white/10 bg-white/[.035] px-3 py-1 text-xs text-slate-400">{job.dates}</span>
                </div>
                <ul className="mt-5 grid gap-2 text-sm leading-6 text-slate-400">{job.bullets.map(b => <li key={b}><CheckCircle2 className="mr-2 inline text-cyan-400" size={15}/>{b}</li>)}</ul>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <SectionTitle eyebrow="Selected Work" title="Featured Projects" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {portfolio.projects.map((project, i) => (
              <motion.article initial="hidden" whileInView="visible" viewport={{ once: true, amount: .15 }} variants={fadeUp} whileHover={{ y: -8 }} transition={{ duration: .25 }} key={project.title} className="group flex min-h-[270px] flex-col rounded-2xl border border-white/10 bg-gradient-to-br from-white/[.055] to-white/[.015] p-6 shadow-2xl shadow-black/10">
                <div className="mb-5 flex items-start justify-between gap-3"><span className="rounded-full bg-cyan-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-cyan-300">{project.status}</span><Sparkles className="text-violet-400" size={18}/></div>
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="rounded-md border border-white/10 bg-black/20 px-2 py-1 text-[10px] text-slate-300">{tag}</span>)}</div>
                <a href={portfolio.github} target="_blank" rel="noreferrer" className="mt-5 text-sm font-semibold text-cyan-300 hover:text-white">View Project <ArrowRight className="ml-1 inline" size={15}/></a>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="architecture" className="border-y border-white/10 bg-white/[.02]">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
            <div>
              <SectionTitle eyebrow="Built With DevOps" title="This Portfolio Is the Application" />
              <p className="leading-8 text-slate-400">This portfolio is being built as the workload for the DevSecOps project: containerized, scanned, delivered through CI/CD, deployed to AWS/EKS and monitored with production-style observability. The AI layer will later analyze pipeline and runtime evidence and propose human-approved remediation.</p>
              <div className="mt-7 grid grid-cols-2 gap-3 text-sm">
                {["GitHub Actions", "Docker", "Terraform", "AWS ECR", "Amazon EKS", "Prometheus", "Grafana", "Loki"].map(x => <div key={x} className="rounded-lg border border-white/10 bg-black/20 p-3 text-slate-300">{x}</div>)}
              </div>
            </div>
            <PipelineVisual/>
          </div>
        </section>

        <section id="certifications" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <SectionTitle eyebrow="Credentials" title="Certifications" />
          <div className="grid gap-4 sm:grid-cols-2">{portfolio.certifications.map(x => <div key={x} className="rounded-2xl border border-white/10 bg-white/[.035] p-5"><ShieldCheck className="mb-3 text-cyan-400"/><span className="font-semibold text-white">{x}</span></div>)}</div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
          <div className="rounded-3xl border border-cyan-400/15 bg-gradient-to-br from-cyan-400/[.07] via-white/[.02] to-violet-500/[.07] p-8 text-center md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[.25em] text-cyan-300">Let's Connect</p>
            <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">Building reliable, secure cloud delivery systems.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-400">Open to DevOps and Cloud Engineering opportunities.</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a href={`mailto:${portfolio.email}`} className="rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950"><Mail className="mr-2 inline" size={16}/>Email Me</a>
              <a href={portfolio.linkedin} target="_blank" rel="noreferrer" className="rounded-xl border border-white/15 px-5 py-3 text-sm font-bold text-white"><Linkedin className="mr-2 inline" size={16}/>LinkedIn</a>
              <a href={portfolio.github} target="_blank" rel="noreferrer" className="rounded-xl border border-white/15 px-5 py-3 text-sm font-bold text-white"><Github className="mr-2 inline" size={16}/>GitHub</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-7 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} V K Harish Bodapati · DevOps Engineer
      </footer>
    </div>
  );
}

export default App;
