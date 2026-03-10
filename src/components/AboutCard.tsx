import BentoCard from './BentoCard';

export function AboutCard({ className }: { className?: string }) {
  return (
    <BentoCard className={className}>
      <h1 className="text-xl text-slate-200 font-bold mb-2">About Me</h1>

      <p className="text-sm leading-relaxed text-muted-foreground">
        Hello there!
      </p>

      <p className="text-sm leading-relaxed text-muted-foreground">
        I'm Luis Alvarez, and I’m a frontend engineer focused on building
        accessible, pixel-perfect interfaces where design meets clean and
        scalable code. I enjoy crafting thoughtful user experiences and turning
        complex ideas into simple, intuitive products.
      </p>

      <p className="text-sm leading-relaxed text-muted-foreground">
        Outside of work, I love staying active and competitive — I play tennis
        regularly and enjoy all kinds of video games, from{' '}
        <strong className="text-slate-200">Resident Evil</strong> and{' '}
        <strong className="text-slate-200">Marvel Rivals</strong> to{' '}
        <strong className="text-slate-200">EA FC</strong>.
      </p>

      <p className="text-sm leading-relaxed text-muted-foreground">
        I’m also a passionate trading card gamer, especially{' '}
        <strong className="text-slate-200">Pokémon TCG</strong> and{' '}
        <strong className="text-slate-200">Yu-Gi-Oh!</strong>.
      </p>
    </BentoCard>
  );
}
