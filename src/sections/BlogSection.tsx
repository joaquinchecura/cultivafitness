import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const articles = [
  {
    title: 'Neuroplasticidad y ejercicio: cómo el movimiento remodela tu cerebro',
    category: 'NEUROCIENCIA',
    categoryColor: '#60A5FA',
    excerpt: 'Descubre cómo la actividad física genera nuevas conexiones neuronales y mejora la función cognitiva a largo plazo.',
    readTime: '8 min',
    image: '/images/article-neuro.jpg',
  },
  {
    title: 'Periodización del entrenamiento: la ciencia detrás del progreso sostenible',
    category: 'FISIOLOGÍA',
    categoryColor: '#a78bfa',
    excerpt: 'Entiende cómo estructurar tus ciclos de entrenamiento para maximizar adaptaciones y minimizar el estancamiento.',
    readTime: '12 min',
    image: '/images/article-period.jpg',
  },
  {
    title: 'Micronutrientes que optimizan la recuperación muscular',
    category: 'NUTRICIÓN',
    categoryColor: '#4ADE80',
    excerpt: 'Más allá de proteínas y carbohidratos: los vitaminas y minerales clave para una recuperación eficiente.',
    readTime: '6 min',
    image: '/images/article-micro.jpg',
  },
];

export function BlogSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const validCards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
      if (validCards.length === 0) return;
      gsap.fromTo(
        validCards,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="blog"
      ref={sectionRef}
      className="relative py-28 lg:py-36 px-6 bg-cultiva-bg"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <span className="font-mono-label text-cultiva-teal tracking-[0.2em] block mb-4">
            CONOCIMIENTO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cultiva-text mb-4 tracking-tight">
            Artículos científicos que transforman
          </h2>
          <p className="text-cultiva-secondary text-base sm:text-lg max-w-[640px] mx-auto">
            Traducimos la ciencia en acción. Sin charlatanería, sin simplificaciones absurdas. Solo evidencia aplicada.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {articles.map((article, i) => (
            <div
              key={article.title}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="group bg-cultiva-surface rounded-2xl border border-cultiva-blue/[0.08] overflow-hidden hover:border-cultiva-blue/25 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-[180px] overflow-hidden m-4 rounded-xl">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cultiva-surface/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5 pt-2">
                <span
                  className="inline-block px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase mb-3"
                  style={{ backgroundColor: `${article.categoryColor}15`, color: article.categoryColor }}
                >
                  {article.category}
                </span>

                <h3 className="text-lg font-semibold text-cultiva-text mb-2 leading-snug group-hover:text-cultiva-green transition-colors duration-300">
                  {article.title}
                </h3>

                <p className="text-cultiva-secondary text-sm leading-relaxed mb-4 line-clamp-2">
                  {article.excerpt}
                </p>

                <div className="flex items-center gap-2 text-cultiva-muted">
                  <Clock className="w-3.5 h-3.5" />
                  <span className="font-mono text-xs">{article.readTime} de lectura</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="inline-flex items-center gap-2 text-cultiva-blue hover:text-cultiva-blue/80 text-sm font-medium transition-colors duration-300 hover:gap-3">
            Ver todos los artículos
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
