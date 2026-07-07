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
    subtitle: 'Current Shield Development manager with past Minecraft server staff and community operations experience',
    support:
      'A focused look at the Minecraft communities I have supported, the staff responsibilities I have handled, and the technical understanding I bring when a server needs practical help.',
    primaryAction: { label: 'Contact Me', href: '#contact' },
    secondaryAction: { label: 'Staff Experience', href: '#staff-experience' },
  },
  about: {
    heading: 'ABOUT ME',
    text:
      "Hi, I'm Glitch. I currently work as a Manager at Shield Development, a 650+ member community. I also have past experience helping Minecraft communities through ownership, management, moderation, community operations, server organization, player support, and technical support when needed. I previously supported Prism SMP, Unstable SMP, Vortex SMP, Primal SMP, Anchor SMP, and Reality SMP, with a focus on keeping communities fair, active, organized, and clear for players.",
    stats: [
      { value: '650+', label: 'Current Community' },
      { value: '12K+', label: 'Past Community Reach' },
      { value: 'Manager', label: 'Current Role' },
    ],
  },
  featuredRoles: [
    {
      name: 'Shield Development',
      role: 'Current Manager',
      description:
        'Currently managing Shield Development, supporting staff coordination, community operations, member support, and organized server workflows.',
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
      description: 'Owned and helped run Vortex SMP, covering server direction, staff decisions, community standards, and player-facing support.',
      stats: [
        { label: 'Community', value: '2K+ members' },
        { label: 'Focus', value: 'Ownership' },
      ],
    },
    {
      name: 'Prism SMP',
      role: 'Former Co-Owner',
      description:
        'Previously helped lead Prism SMP as co-owner, supporting staff coordination, player communication, server organization, and practical technical support.',
      stats: [
        { label: 'Community', value: '1K+ members' },
        { label: 'Focus', value: 'Leadership & ops' },
      ],
    },
    {
      name: 'Unstable SMP',
      role: 'Former Manager',
      description:
        'Managed staff-side community work for Unstable SMP, including event support, moderation workflows, player issues, and day-to-day server operations.',
      stats: [
        { label: 'Community', value: '6K+ members' },
        { label: 'Focus', value: 'Staff coordination' },
      ],
    },
    {
      name: 'Primal SMP',
      role: 'Former Manager',
      description: 'Managed Primal SMP and supported community operations, server organization, moderation expectations, staff coordination, and player activity.',
      stats: [
        { label: 'Community', value: '500+ members' },
        { label: 'Focus', value: 'Management' },
      ],
    },
    {
      name: 'Anchor SMP',
      role: 'Former Manager',
      description: 'Managed Anchor SMP staff coordination and community support, helping with player communication, organization, and moderation flow.',
      stats: [
        { label: 'Community', value: '2K+ members' },
        { label: 'Focus', value: 'Staff management' },
      ],
    },
    {
      name: 'Reality SMP',
      role: 'Former Staff Member',
      description: 'Supported Reality SMP with community moderation, rule enforcement, player support, and staff-side organization.',
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
      title: 'Discord Management',
      description: 'Moderation channels, announcements, report workflows, and community structure.',
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
      title: 'Minecraft Technical Knowledge',
      description: 'Reading logs, checking configs, understanding permissions, and testing changes when needed.',
      label: 'TECH',
    },
    {
      title: 'Plugin / Config Understanding',
      description: 'Basic Java, Paper, and config knowledge used as a support skill for staff operations.',
      label: 'CFG',
    },
  ],
  contact: {
    heading: 'REACH OUT ON DISCORD',
    text: 'Reach out for Minecraft staff, community support, server operations, moderation-related work, or questions about past server experience.',
    discordUsername: 'mr. zap',
    lanyard: {
      enabled: true,
      userId: '609018871264968710',
      pollIntervalMs: 30000,
      kvKeys: ['status', 'role', 'availability', 'location'],
    },
  },
}
