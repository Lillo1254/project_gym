interface FeatureProps {
  title: string;
  desc: string;
}

export function FeatureCard({ title, desc }: FeatureProps) {
  return (
    <div className=" shadow-[0_0_10px_0px_var(--color-secondary)] hover:shadow-[0px_10px_10px_5px_var(--color-tertiary)] hover:scale-110 hover:-translate-y-3 bg-primary/5 border border-quarto/90 p-8 hover:border-secondary/50 hover:bg-secondary/30 transition-all group rounded-sm ">
      <div className="w-12 h-0.5 bg-secondary mb-6 group-hover:w-full transition-all duration-500" />
      <h3 className="text-2xl font-bold mb-4 text-secondary">{title}</h3>
      <p className="text-quarto/70 font-semibold">{desc}</p>
    </div>
  );
}