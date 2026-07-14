const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`

export const portfolioData = {
  hero: {
    badge: 'Glitch / Portfolio 2026',
    name: 'Glitch',
    title: 'Minecraft Developer & Community Manager',
    profileImage: {
      src: assetPath('profile/glitch-pfp-round.png'),
      alt: 'Glitch profile avatar',
    },
    subtitle:
      'Manager at Shield Development, working across Minecraft systems, staff teams, and community operations.',
    support:
      'Java and Paper development, Discord operations, moderation systems, events, and practical server leadership.',
    primaryAction: { label: 'Contact Me', href: '#contact' },
    secondaryAction: { label: 'View Experience', href: '#past-roles' },
  },
  minecraft: {
    username: 'Glitch_xz',
    skinUrl: 'https://minotar.net/skin/Glitch_xz',
    label: 'Minecraft identity',
    fallbackImage: {
      src: assetPath('profile/glitch-pfp.png'),
      alt: 'Glitch profile avatar',
    },
  },
  discordHero: {
    displayName: 'Glitch',
    label: 'LIVE DISCORD',
    kicker: 'Minecraft Developer & Community Manager',
    location: 'Minecraft servers / Discord communities',
    intro:
      'I build the systems behind the server, help teams make clear decisions, and keep the player experience from becoming an afterthought.',
    scrollLabel: 'Explore Portfolio',
    scrollTarget: '#portfolio-intro',
    backgroundImage: {
      src: assetPath('backgrounds/discord-hero-bg.jpg'),
      alt: 'Purple sci-fi mountain landscape used as the Discord hero background',
    },
  },
  about: {
    heading: 'ABOUT ME',
    lead: 'I currently work as a Manager at Shield Development, where server development and community operations overlap.',
    text:
      "That means writing and configuring Minecraft systems, structuring Discord servers, coordinating staff, handling player issues, and planning events. I care about clear rules, useful tools, and communities that feel organized without feeling corporate.",
    stats: [
      { value: '650+', label: 'Current Community' },
      { value: '3+', label: 'Years Experience' },
      { value: '1.21+', label: 'Minecraft Development' },
    ],
    principles: ['Clear staff structure', 'Player-first decisions', 'Systems that stay maintainable'],
  },
  currentRole: {
    name: 'Shield Development',
    role: 'Current Manager',
    description:
      'Managing Shield Development with a focus on staff coordination, member support, internal organization, and reliable community workflows.',
    stats: [
      { label: 'Community', value: '650+ members' },
      { label: 'Focus', value: 'Management' },
    ],
  },
  pastRoles: [
    {
      name: 'Vortex SMP',
      role: 'Former Owner',
      description:
        'Led the server direction, staff decisions, community standards, and the day-to-day player experience.',
      focus: ['Ownership', 'Staff leadership', 'Server direction'],
    },
    {
      name: 'Primal SMP',
      role: 'Former Developer / Co-Owner',
      description:
        'Combined development work with co-ownership, supporting server systems, technical decisions, staff organization, and operations.',
      focus: ['Development', 'Co-ownership', 'Operations'],
    },
    {
      name: 'Anchor SMP',
      role: 'Former Owner',
      description:
        'Owned the server and handled leadership, team organization, player communication, and operational priorities.',
      focus: ['Ownership', 'Team organization', 'Player support'],
    },
    {
      name: 'Reality SMP',
      role: 'Former Owner',
      description:
        'Owned Reality SMP and managed the standards, moderation direction, staff responsibilities, and community communication.',
      focus: ['Ownership', 'Moderation direction', 'Community standards'],
    },
  ],
  skillsIntro: {
    eyebrow: 'Capabilities',
    heading: 'SPECIALIZED SKILLS',
    text:
      'The useful work behind a stable server: the code, configuration, staff systems, and community decisions players usually only notice when they go wrong.',
  },
  specializedSkills: [
    {
      title: 'Staff Leadership',
      description: 'Team structure, staff expectations, training, escalation paths, and consistent decisions.',
      label: 'TEAM',
    },
    {
      title: 'Discord Operations',
      description: 'Roles, permissions, tickets, moderation workflows, announcements, and bot integrations.',
      label: 'DISC',
    },
    {
      title: 'Plugin Development',
      description: 'Java and Paper systems, custom mechanics, server tools, debugging, and integrations.',
      label: 'TECH',
    },
    {
      title: 'Server Architecture',
      description: 'Permissions, ranks, network structure, operational workflows, and maintainable setups.',
      label: 'ARCH',
    },
    {
      title: 'Automation & Bots',
      description: 'Welcome flows, moderation automation, tickets, webhooks, and reliable bot configuration.',
      label: 'BOT',
    },
    {
      title: 'Community Building',
      description: 'Engagement, feedback loops, player communication, events, and long-term retention.',
      label: 'GROW',
    },
    {
      title: 'Minecraft Server Ops',
      description: 'Survival, event, and network operations with practical monitoring and support.',
      label: 'OPS',
    },
    {
      title: 'Plugin Configuration',
      description: 'Clean YAML setups for LuckPerms, TAB, WorldGuard, EssentialsX, and related tooling.',
      label: 'YAML',
    },
    {
      title: 'Event Coordination',
      description: 'Planning, staffing, live logistics, player communication, and post-event follow-through.',
      label: 'EVNT',
    },
  ],
  contact: {
    heading: 'START A CONVERSATION',
    text: 'For Minecraft development, server operations, staff leadership, or community work, Discord is the quickest way to reach me.',
    discordUsername: 'mr. zap',
    socials: [
      {
        label: 'Discord',
        handle: 'Glitch',
        href: 'https://discord.com/users/609018871264968710',
        icon: 'D',
      },
      {
        label: 'YouTube',
        handle: '@not_famous14',
        href: 'https://www.youtube.com/@not_famous14',
        icon: 'Y',
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
