import { createFileRoute } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  Building2,
  Check,
  Clock3,
  FlaskConical,
  HeartPulse,
  MapPin,
  Menu,
  MessageCircle,
  Microscope,
  Phone,
  ScanLine,
  ShieldCheck,
  Star,
  Stethoscope,
  X,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-clinica.jpg";
import clinicReception from "@/assets/exame-checkup.jpg";
import clinicLab from "@/assets/exame-hemograma.jpg";
import clinicExam from "@/assets/exame-ultrassom.jpg";

const whatsappBase = "https://wa.me/5596988010530";

const specialties = [
  ["PSIQUIATRIA", "MASTOLOGIA", "GINECOLOGIA", "OBSTETRÍCIA", "OFTALMOLOGIA", "OTORRINOLARINGOLOGISTA", "GASTROENTEROLOGIA", "DERMATOLOGIA", "ORTOPEDIA"],
  ["CARDIOLOGIA", "CIRURGIA GERAL", "CIRURGIA ONCOLÓGICA", "CLÍNICO GERAL", "ANESTESIOLOGISTA", "PEDIATRIA", "NUTRIÇÃO", "UROLOGIA", "ENDOCRINOLOGIA"],
];

const exams = [
  { name: "Ultrassom", description: "Imagens nítidas e avaliação cuidadosa.", icon: ScanLine },
  { name: "Raio-X", description: "Diagnóstico por imagem com agilidade.", icon: Activity },
  { name: "Laboratório", description: "Coletas e análises em um só lugar.", icon: Microscope },
  { name: "Eletrocardiograma", description: "Avaliação segura da atividade cardíaca.", icon: HeartPulse },
];

const reviews = [
  { name: "Maria Silva", text: "Atendimento acolhedor, rápido e muito organizado. Fui bem orientada em todas as etapas." },
  { name: "João Pereira", text: "Consegui marcar pelo WhatsApp e fui atendido no horário. Equipe muito atenciosa." },
  { name: "Ana Costa", text: "Ótima estrutura e profissionais cuidadosos. Minha família inteira se sente segura aqui." },
];

const navItems = [
  ["Início", "inicio"],
  ["Especialidades", "especialidades"],
  ["Exames", "exames"],
  ["Nossa Clínica", "clinica"],
  ["Convênios", "convenios"],
  ["Contato / Agendar", "agendar"],
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clínica Saúde Integrada | Clínica Popular em Macapá" },
      { name: "description", content: "Consultas médicas, especialidades e exames com atendimento humanizado na R. Prof. Tostes, 761, Macapá." },
      { property: "og:title", content: "Clínica Saúde Integrada — Saúde acessível em Macapá" },
      { property: "og:description", content: "Especialidades médicas e exames com atendimento humanizado. Agende pelo WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function WhatsAppLink({ message, children, className = "", variant = "default", size = "xl" }: {
  message: string;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "lg" | "xl" | "icon";
}) {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a href={`${whatsappBase}?text=${encodeURIComponent(message)}`} target="_blank" rel="noreferrer">{children}</a>
    </Button>
  );
}

function Logo() {
  return (
    <a href="#inicio" className="flex min-w-0 items-center gap-2.5" aria-label="Clínica Saúde Integrada - início">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground"><HeartPulse className="h-6 w-6" /></span>
      <span className="min-w-0 leading-none">
        <strong className="block truncate text-base font-black text-foreground sm:text-lg">CLÍNICA SAÚDE</strong>
        <small className="block truncate pt-1 text-[9px] font-bold uppercase text-primary">Integrada · Clínica Popular</small>
      </span>
    </a>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="inicio" className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 shadow-sm backdrop-blur-md">
        <div className="container-site grid min-h-18 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 lg:flex">
          <Logo />
          <nav className="ml-auto hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
            {navItems.map(([label, target]) => (
              <a key={target} href={`#${target}`} className="px-3 py-2 text-sm font-bold text-muted-foreground transition-colors hover:text-primary">{label}</a>
            ))}
          </nav>
          <WhatsAppLink message="Olá! Quero agendar uma consulta na Clínica Saúde Integrada." size="default" className="hidden shrink-0 lg:inline-flex">
            <MessageCircle /> Agendar
          </WhatsAppLink>
          <Button variant="ghost" size="icon" className="shrink-0 lg:hidden" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}>
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <nav id="mobile-menu" className="border-t border-border bg-background px-4 pb-5 pt-2 lg:hidden" aria-label="Navegação móvel">
            <div className="container-site flex flex-col">
              {navItems.map(([label, target]) => (
                <a key={target} href={`#${target}`} onClick={() => setMenuOpen(false)} className="border-b border-border py-3 text-sm font-bold text-foreground last:border-0">{label}</a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main className="pt-18">
        <section className="relative min-h-[620px] overflow-hidden bg-foreground sm:min-h-[680px]">
          <img src={heroImage} alt="Equipe da Clínica Saúde Integrada em ambiente moderno" width={1920} height={840} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-[64%_center]" />
          <div className="absolute inset-0 bg-linear-to-r from-foreground via-foreground/90 to-foreground/15" />
          <div className="container-site relative flex min-h-[620px] items-center py-16 sm:min-h-[680px]">
            <div className="max-w-2xl text-primary-foreground">
              <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-background px-4 py-2 text-xs font-black uppercase text-primary"><ShieldCheck className="h-4 w-4" /> Cuidado acessível e humanizado</span>
              <h1 className="max-w-2xl text-4xl font-black leading-[1.05] sm:text-6xl lg:text-7xl">Sua saúde em primeiro lugar em Macapá</h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-xl">Consultas, especialidades e exames com acolhimento, praticidade e valores populares para toda a família.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <WhatsAppLink message="Olá! Quero agendar um atendimento na Clínica Saúde Integrada." className="w-full sm:w-auto"><MessageCircle className="h-5 w-5" /> Agendar no WhatsApp</WhatsAppLink>
                <Button asChild variant="outline" size="xl" className="w-full border-primary-foreground/30 bg-background/10 text-primary-foreground hover:bg-background hover:text-primary sm:w-auto"><a href="#especialidades">Ver especialidades <ArrowRight /></a></Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-primary-foreground/80">
                <span className="flex items-center gap-2"><Check className="h-4 w-4 text-primary-soft" /> Atendimento de segunda a sábado</span>
                <span className="flex items-center gap-2"><Check className="h-4 w-4 text-primary-soft" /> Fácil agendamento</span>
              </div>
            </div>
          </div>
        </section>

        <section id="especialidades" className="scroll-mt-18 bg-primary py-16 text-primary-foreground sm:py-24">
          <div className="container-site">
            <div className="mb-10 max-w-2xl">
              <p className="mb-3 text-sm font-black uppercase text-primary-soft">Cuidado completo</p>
              <h2 className="text-3xl font-black sm:text-5xl">ESPECIALIDADES MÉDICAS</h2>
              <p className="mt-4 text-primary-foreground/80">Selecione uma especialidade para seguir ao agendamento.</p>
            </div>
            <div className="grid gap-3 md:grid-cols-2 md:gap-4">
              {specialties.map((column, columnIndex) => (
                <div key={columnIndex} className="flex min-w-0 flex-col gap-3">
                  {column.map((specialty) => (
                    <a key={specialty} href="#agendar" className="group grid min-h-14 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-full bg-background px-5 py-3 font-extrabold text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary-soft hover:shadow-lg">
                      <span className="min-w-0 break-words text-sm sm:text-base">{specialty}</span><ArrowRight className="h-4 w-4 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="exames" className="scroll-mt-18 py-16 sm:py-24">
          <div className="container-site">
            <div className="mb-10 text-center"><p className="mb-3 font-black uppercase text-primary">Diagnóstico com praticidade</p><h2 className="section-title">Exames em um só lugar</h2></div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {exams.map((exam) => <article key={exam.name} className="rounded-lg border border-border bg-card p-6 shadow-sm transition-transform hover:-translate-y-1">
                <span className="mb-5 grid h-12 w-12 place-items-center rounded-md bg-primary-muted text-primary"><exam.icon className="h-6 w-6" /></span>
                <h3 className="text-xl font-black">{exam.name}</h3><p className="mt-2 min-h-12 text-sm leading-relaxed text-muted-foreground">{exam.description}</p>
                <WhatsAppLink message={`Olá! Quero agendar ${exam.name}.`} size="default" className="mt-5 w-full">Agendar exame <ArrowRight /></WhatsAppLink>
              </article>)}
            </div>
          </div>
        </section>

        <section id="clinica" className="scroll-mt-18 bg-surface-soft py-16 sm:py-24">
          <div className="container-site grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div className="grid grid-cols-2 gap-3">
              <img src={clinicReception} alt="Recepção acolhedora da clínica" className="col-span-2 aspect-[16/8] w-full rounded-lg object-cover" loading="lazy" />
              <img src={clinicLab} alt="Estrutura moderna de laboratório" className="aspect-[4/3] w-full rounded-lg object-cover" loading="lazy" />
              <img src={clinicExam} alt="Sala preparada para exames" className="aspect-[4/3] w-full rounded-lg object-cover" loading="lazy" />
            </div>
            <div><p className="mb-3 font-black uppercase text-primary">Nossa Clínica</p><h2 className="section-title">Cuidado próximo, do jeito que você merece</h2><p className="mt-6 text-lg leading-relaxed text-muted-foreground">Na Clínica Saúde Integrada, cada paciente é recebido com atenção e respeito. Reunimos profissionais qualificados e uma estrutura completa para tornar seu cuidado mais simples, seguro e acessível.</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">{["Atendimento humanizado", "Equipe multidisciplinar", "Ambiente acolhedor", "Valores populares"].map((item) => <span key={item} className="flex items-center gap-2 font-bold"><Check className="h-5 w-5 text-primary" />{item}</span>)}</div>
            </div>
          </div>
        </section>

        <section id="convenios" className="scroll-mt-18 py-16 sm:py-20">
          <div className="container-site text-center"><p className="mb-3 font-black uppercase text-primary">Facilidade para cuidar de você</p><h2 className="section-title">Convênios e atendimento popular</h2><p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Consulte a disponibilidade de cobertura para sua especialidade ou exame.</p>
            <div className="mx-auto mt-9 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-4">{["UNIMED", "GEAP SAÚDE", "CASSI", "PARTICULAR POPULAR"].map((plan) => <div key={plan} className="flex min-h-20 items-center justify-center rounded-lg border border-border bg-card px-4 font-black text-foreground shadow-sm"><Building2 className="mr-2 h-5 w-5 text-primary" />{plan}</div>)}</div>
            <small className="mt-5 block text-muted-foreground">A cobertura pode variar. Confirme as condições pelo WhatsApp.</small>
          </div>
        </section>

        <section className="bg-foreground py-16 text-primary-foreground sm:py-24">
          <div className="container-site"><div className="mb-10 text-center"><p className="mb-3 font-black uppercase text-primary-soft">Quem conhece, recomenda</p><h2 className="text-3xl font-black sm:text-5xl">Histórias de quem confia</h2></div>
            <div className="grid gap-4 md:grid-cols-3">{reviews.map((review) => <figure key={review.name} className="rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 p-6"><div className="mb-5 flex text-primary-soft">{[1,2,3,4,5].map((star) => <Star key={star} className="h-4 w-4 fill-current" />)}</div><blockquote className="leading-relaxed text-primary-foreground/80">“{review.text}”</blockquote><figcaption className="mt-6 flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-full bg-primary font-black">{review.name.charAt(0)}</span><strong>{review.name}</strong></figcaption></figure>)}</div>
          </div>
        </section>

        <section id="agendar" className="scroll-mt-18 bg-primary py-14 text-primary-foreground">
          <div className="container-site grid gap-6 text-center md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:text-left"><div className="min-w-0"><h2 className="text-3xl font-black sm:text-4xl">Pronto para cuidar da sua saúde?</h2><p className="mt-2 text-primary-foreground/80">Fale com nossa equipe e encontre o melhor horário para você.</p></div><WhatsAppLink message="Olá! Quero agendar uma consulta na Clínica Saúde Integrada." className="w-full shrink-0 bg-background text-primary hover:bg-primary-soft md:w-auto"><MessageCircle /> Agendar agora</WhatsAppLink></div>
        </section>
      </main>

      <footer className="bg-footer py-12 text-footer-foreground">
        <div className="container-site grid gap-10 md:grid-cols-3">
          <div><Logo /><p className="mt-5 max-w-sm text-sm leading-relaxed text-footer-muted">Saúde acessível, atendimento humanizado e cuidado completo para toda a família em Macapá.</p></div>
          <div><h3 className="mb-4 font-black uppercase">Contato</h3><div className="space-y-3 text-sm text-footer-muted"><p className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary-soft" />R. Prof. Tostes, 761<br />Macapá — AP</p><a href="tel:+5596988010530" className="flex items-center gap-3 hover:text-primary-soft"><Phone className="h-5 w-5 text-primary-soft" />(96) 98801-0530</a><p className="flex items-center gap-3"><Clock3 className="h-5 w-5 text-primary-soft" />Segunda a Sábado</p></div></div>
          <div><h3 className="mb-4 font-black uppercase">Como chegar</h3><Button asChild variant="outline" size="lg" className="border-footer-foreground/20 bg-footer-foreground/5 text-footer-foreground hover:bg-primary hover:text-primary-foreground"><a href="https://www.google.com/maps/search/?api=1&query=R.+Prof.+Tostes,+761,+Macapá+-+AP" target="_blank" rel="noreferrer"><MapPin /> Abrir no Google Maps</a></Button></div>
        </div>
        <div className="container-site mt-10 border-t border-footer-foreground/10 pt-6 text-center text-xs text-footer-muted">© 2026 Clínica Saúde Integrada. Todos os direitos reservados.</div>
      </footer>

      <a href={`${whatsappBase}?text=${encodeURIComponent("Olá! Quero agendar um atendimento na Clínica Saúde Integrada.")}`} target="_blank" rel="noreferrer" className="fixed bottom-5 right-5 z-50 grid h-16 w-16 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-xl transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-whatsapp-ring" aria-label="Agendar pelo WhatsApp"><MessageCircle className="h-8 w-8 fill-current" /></a>
    </div>
  );
}