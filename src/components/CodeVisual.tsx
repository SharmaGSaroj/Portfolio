import React from 'react';
import { motion } from 'framer-motion';

type Segment = { t: string; c: string };

const lines: Segment[][] = [
  [{ t: 'class ', c: 'text-[#ff7ab2]' }, { t: 'DeveloperService', c: 'text-[#4fc1ff]' }],
  [{ t: '{', c: 'text-white/30' }],
  [
    { t: '  public function ', c: 'text-[#ff7ab2]' },
    { t: 'build', c: 'text-[#dcdcaa]' },
    { t: '(): Product', c: 'text-white/50' },
  ],
  [{ t: '  {', c: 'text-white/30' }],
  [{ t: '    return Product::make()', c: 'text-[#ce9178]' }],
  [{ t: '      ->withCare()', c: 'text-[#9cdcfe]' }],
  [{ t: '      ->test(true)', c: 'text-[#9cdcfe]' }],
  [{ t: '      ->ship();', c: 'text-[#9cdcfe]' }],
  [{ t: '  }', c: 'text-white/30' }],
  [{ t: '}', c: 'text-white/30' }],
];

const lineVariants = {
  hidden: { opacity: 0, x: -8 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const CodeVisual: React.FC = () => {
  return (
    <div className="relative w-full aspect-square">
      {/* Ambient drifting glow orbs */}
      <motion.div
        animate={{ x: [0, 18, 0], y: [0, -14, 0], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-accent/25 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -16, 0], y: [0, 16, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -bottom-10 -right-6 w-56 h-56 rounded-full bg-purple-500/20 blur-3xl"
      />

      {/* Dot grid texture */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '18px 18px',
          maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black, transparent)',
        }}
      />

      {/* Editor card */}
      <div className="relative w-full h-full rounded-3xl border border-white/10 bg-[#0a0a0c]/90 backdrop-blur-xl flex flex-col overflow-hidden">
        <div className="flex items-center gap-2 px-5 py-4 border-b border-white/10 flex-shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 text-xs text-muted font-mono">DeveloperService.php</span>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="flex-1 flex flex-col justify-center px-6 py-6 font-mono text-[13px] sm:text-sm leading-[1.9]"
        >
          {lines.map((line, i) => (
            <motion.div key={i} variants={lineVariants} className="whitespace-pre">
              {line.map((seg, j) => (
                <span key={j} className={seg.c}>
                  {seg.t}
                </span>
              ))}
              {i === lines.length - 1 && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="inline-block w-[7px] h-[15px] bg-accent align-middle ml-1 translate-y-[1px]"
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 pointer-events-none" />
    </div>
  );
};

export default CodeVisual;
