import { Hero } from "@/components/home/Hero";
import { FeaturedProject } from "@/components/home/FeaturedProject";

export default function Home() {
  return (
    <div className="space-y-32">
      <Hero />
      
      <section className="space-y-12">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-medium tracking-tight">Selected Works</h2>
          <p className="text-zinc-400">Engineering excellence and industrial design.</p>
        </div>
        
        <div className="flex flex-col gap-6">
          <FeaturedProject />
        </div>
      </section>
    </div>
  );
}
