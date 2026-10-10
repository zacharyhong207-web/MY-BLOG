import { LiquidGlassCard } from "@/components/ui/LiquidGlassCard";
import { ArrowUpRight, Sparkles, Smartphone, Layers } from "lucide-react";

export const FeaturedProject = () => {
  return (
    <section className="my-16">
      <div className="flex items-center gap-2 mb-4 text-xs font-mono uppercase tracking-widest text-zinc-400">
        <Sparkles className="text-amber-400" size={13} />
        <span>精选交互工程</span>
      </div>
      <LiquidGlassCard className="p-8 md:p-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 border border-white/10 text-[11px] text-zinc-300 mb-4">
              <Layers size={12} />
              <span>Apple Wallet 自定义工坊</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
              CardCraft
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              深度复刻 iOS 拟真玻璃微曲折射与全息反光算法。集成移动端设备陀螺仪硬件响应、银联/Visa/Mastercard 矢量标识合成，以及本地持久化卡包。
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-zinc-400 mb-8">
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5">Gyroscope API</span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5">IndexedDB</span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5">Liquid Shader</span>
            </div>
            <a
              href="https://cardcraft.zacharyhong.dpdns.org"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-colors shadow-lg"
            >
              <span>体验在线工程</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-zinc-800/50 to-black/80 flex items-center justify-center p-6">
            <div className="w-56 h-36 rounded-xl border border-white/20 bg-gradient-to-tr from-white/10 to-white/5 backdrop-blur-xl shadow-2xl flex flex-col justify-between p-4 rotate-3 group-hover:rotate-0 transition-transform duration-500">
              <div className="flex justify-between items-center">
                <div className="w-6 h-6 rounded-full bg-white/20" />
                <span className="text-[10px] font-mono text-zinc-300">CARDCRAFT</span>
              </div>
              <div className="text-[11px] font-mono tracking-widest text-zinc-200">
                •••• •••• •••• 2026
              </div>
            </div>
          </div>
        </div>
      </LiquidGlassCard>
    </section>
  );
};
