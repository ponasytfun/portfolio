const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`

export const portfolioData = {
  navItems: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Current', href: '#staff-experience' },
    { label: 'Past Experience', href: '#past-roles' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact Me', href: '#contact' },
  ],
  hero: {
    badge: 'Staff & Community Portfolio',
    name: 'Glitch',
    title: 'Minecraft Staff, Community Support & Server Operations',
    profileImage: {
      src: assetPath('profile/glitch-pfp-round.png'),
      alt: 'Glitch profile avatar',
    },
    subtitle:
      'Manager at Shield Development with experience in Minecraft server leadership, community operations, staff coordination, and technical systems.',
    support:
      'A focused look at the communities I have managed, the staff responsibilities I have handled, and the technical systems I understand when a server needs practical help.',
    primaryAction: { label: 'Contact Me', href: '#contact' },
    secondaryAction: { label: 'Staff Experience', href: '#staff-experience' },
  },
  discordHero: {
    displayName: 'Glitch',
    label: 'LIVE DISCORD',
    kicker: 'Minecraft Staff & Community Manager',
    location: 'Discord & Minecraft communities',
    intro:
      'I manage communities, coordinate staff teams, support players, and keep server operations clean, calm, and organized.',
    scrollLabel: 'Explore Portfolio',
    scrollTarget: '#portfolio-intro',
    backgroundImage: {
      src: assetPath('backgrounds/discord-hero-bg.jpg'),
      alt: 'Purple sci-fi mountain landscape used as the Discord hero background',
    },
  },
  about: {
    heading: 'ABOUT ME',
    text:
      "Hi, I'm Glitch. I currently work as a Manager at Shield Development, a 650+ member community. I also have past experience helping Minecraft communities through ownership, management, moderation, community operations, server organization, player support, and technical support when needed. I previously supported Prism SMP, Unstable SMP, Vortex SMP, Primal SMP, Anchor SMP, and Reality SMP, with a focus on keeping communities fair, active, organized, and clear for players.",
    stats: [
      { value: '650+', label: 'Current Community' },
      { value: '12K+', label: 'Combined Community Size' },
      { value: 'Manager', label: 'Current Role' },
    ],
  },
  featuredRoles: [
    {
      name: 'Shield Development',
      role: 'Current Manager',
      description:
        'Managing Shield Development with a focus on staff coordination, member support, internal organization, and reliable community workflows.',
      icon: '650+',
      stats: [
        { label: 'Community', value: '650+ members' },
        { label: 'Focus', value: 'Management' },
      ],
    },
  ],
  pastRoles: [
    {
      name: 'Vortex SMP',
      role: 'Former Owner',
      description:
        'Owned Vortex SMP and handled high-level direction, community standards, staff decisions, and the server expectations players followed.',
      stats: [
        { label: 'Community', value: '2K+ members' },
        { label: 'Focus', value: 'Ownership' },
      ],
    },
    {
      name: 'Prism SMP',
      role: 'Former Co-Owner',
      description:
        'Co-led Prism SMP with a focus on staff communication, player-facing updates, server organization, and practical technical coordination.',
      stats: [
        { label: 'Community', value: '1K+ members' },
        { label: 'Focus', value: 'Leadership & ops' },
      ],
    },
    {
      name: 'Unstable SMP',
      role: 'Former Manager',
      description:
        'Managed day-to-day staff work in a larger SMP environment, including moderation workflows, events, player escalations, and operational follow-through.',
      stats: [
        { label: 'Community', value: '6K+ members' },
        { label: 'Focus', value: 'Staff coordination' },
      ],
    },
    {
      name: 'Primal SMP',
      role: 'Former Manager',
      description:
        'Managed Primal SMP by keeping moderation expectations clear, organizing staff work, and helping maintain player activity and server order.',
      stats: [
        { label: 'Community', value: '500+ members' },
        { label: 'Focus', value: 'Management' },
      ],
    },
    {
      name: 'Anchor SMP',
      role: 'Former Manager',
      description:
        'Coordinated Anchor SMP staff communication, internal organization, player-facing support, and the moderation flow around routine issues.',
      stats: [
        { label: 'Community', value: '2K+ members' },
        { label: 'Focus', value: 'Staff management' },
      ],
    },
    {
      name: 'Reality SMP',
      role: 'Former Staff Member',
      description:
        'Handled Reality SMP staff duties around reports, rule enforcement, moderation consistency, and direct player support.',
      stats: [
        { label: 'Community', value: '700+ members' },
        { label: 'Focus', value: 'Staff support' },
      ],
    },
  ],
  specializedSkills: [
    {
      title: 'Community Moderation',
      description: 'Rule enforcement, conflict handling, player reports, and fair staff decisions.',
      label: 'MOD',
    },
    {
      title: 'Staff Communication',
      description: 'Coordinating with staff teams, sharing context, and keeping decisions clear.',
      label: 'TEAM',
    },
    {
      title: 'Server Operations',
      description: 'Ranks, permissions, server organization, event support, and routine checks.',
      label: 'OPS',
    },
    {
      title: 'Discord Operations',
      description:
        'Role architecture, moderation workflows, staff channels, announcements, verification systems, bot integrations, and community structure.',
      label: 'DISC',
    },
    {
      title: 'Event Support',
      description: 'Helping plan, run, and support Minecraft community events.',
      label: 'EVNT',
    },
    {
      title: 'Player Support',
      description: 'Answering questions, handling issues, and helping players understand expectations.',
      label: 'HELP',
    },
    {
      title: 'Minecraft Plugin & Backend Development',
      description:
        'Java, Paper API, custom gameplay systems, server integrations, webhooks, configuration design, debugging, and operational tooling.',
      label: 'TECH',
    },
    {
      title: 'Server Tooling & Integrations',
      description:
        'Persistent player data, GUI systems, Discord integrations, staff panels, Vercel-based tools, authenticated plugin webhooks, and backend APIs.',
      label: 'CFG',
    },
  ],
  contact: {
    heading: 'REACH OUT ON DISCORD',
    text: 'Reach out for Minecraft staff work, community management, server operations, technical systems, moderation workflows, or questions about past server experience.',
    discordUsername: 'mr. zap',
    socials: [
      {
        label: 'Discord',
        handle: 'Glitch',
        href: 'https://discord.com/users/609018871264968710',
        icon: 'D',
      },
      {
        label: 'TikTok',
        handle: 'Add your TikTok link',
        href: '#contact',
        icon: 'T',
        placeholder: true,
      },
      {
        label: 'YouTube',
        handle: 'Add your YouTube link',
        href: '#contact',
        icon: 'Y',
        placeholder: true,
      },
    ],
    profileImage: {
      src: assetPath('profile/glitch-pfp.png'),
      alt: 'Glitch profile avatar',
    },
    lanyard: {
      enabled: true,
      userId: '609018871264968710',
      pollIntervalMs: 30000,
      kvKeys: ['status', 'role', 'availability', 'location'],
    },
  },
}
