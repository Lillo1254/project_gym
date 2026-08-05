interface FeatureProps {
  title: string;
  desc: string;
}

export function FeatureCard({ title, desc }: FeatureProps) {
  return (
    <div className="bg-primary/5 border border-quarto/90 p-8 hover:border-secondary/50 hover:bg-secondary/30 transition-all group ">
      <div className="w-12 h-[2px] bg-secondary mb-6 group-hover:w-full transition-all duration-500" />
      <h3 className="text-2xl font-bold mb-4 text-secondary">{title}</h3>
      <p className="text-quarto/70 font-semibold">{desc}</p>
    </div>
  );
}