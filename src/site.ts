export const SITE = {
  title: 'Latents & Logs',
  author: 'Wanning He',
  description:
    'A public study garden on diffusion & video generation, agentic systems, and the systems that serve them.',
  github: 'https://github.com/maxx1031',
} as const;

export const TRACKS = {
  generative: {
    label: 'Latents',
    sub: 'Generative Models',
    blurb: 'Diffusion, image & video generation — mechanisms, conditioning, efficiency.',
    color: 'iris',
  },
  systems: {
    label: 'Logs',
    sub: 'Systems',
    blurb: 'MIT 6.824, Designing ML Systems — how large things stay up and get fast.',
    color: 'amber',
  },
  agents: {
    label: 'Loops',
    sub: 'Agentic Systems',
    blurb: 'Agents, tools, orchestration — programs that decide what to do next.',
    color: 'teal',
  },
} as const;

export type TrackId = keyof typeof TRACKS;

export const STATUS = {
  seed: { emoji: '🌱', label: 'Seed', hint: 'a fresh, unpolished note' },
  growing: { emoji: '🌿', label: 'Growing', hint: 'taking shape, still evolving' },
  evergreen: { emoji: '🌲', label: 'Evergreen', hint: 'stable and worth citing' },
} as const;
