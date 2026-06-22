const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`

export const portfolioData = {
  navItems: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Current', href: '#current-roles' },
    { label: 'Past', href: '#past-roles' },
    { label: 'Skills', href: '#skills' },
    { label: 'Proof', href: '#screenshots' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    badge: 'Minecraft Staff Portfolio',
    name: 'Glitch',
    title: 'Minecraft Developer & Community Manager',
    profileImage: {
      src: assetPath('profile/glitch-pfp-round.png'),
      alt: 'Glitch profile avatar',
    },
    subtitle: 'Building servers • Managing communities • Crafting experiences',
    support:
      'I build and support Minecraft servers, Discord communities, plugin systems, staff teams, events, and server operations with a practical community-first mindset.',
    primaryAction: { label: 'Join Community', href: '#contact' },
    secondaryAction: { label: 'View Staff Work', href: '#current-roles' },
  },
  about: {
    heading: 'ABOUT ME',
    text:
      "Hi, I'm Glitch. I am a Minecraft developer and experienced staff member focused on building, managing, and improving online communities. I work with Minecraft servers, Discord communities, plugin systems, staff teams, and server operations.",
    stats: [
      { value: '6+', label: 'Servers Worked With' },
      { value: '3+', label: 'Years Experience' },
      { value: '1.21+', label: 'Minecraft Development' },
    ],
  },
  currentRoles: [
    {
      name: 'Prism SMP',
      role: 'Developer',
      description:
        'Custom gameplay systems, server management, and community features.',
      icon: 'DEV',
      stats: [
        { label: 'Status', value: 'Active' },
        { label: 'Members', value: '500+ members' },
      ],
    },
    {
      name: 'Unstable SMP',
      role: 'Staff / Developer',
      description:
        'Staff support, events, server systems, and community management.',
      icon: 'OPS',
      stats: [
        { label: 'Status', value: 'Active' },
        { label: 'Members', value: '1k+ members' },
      ],
    },
  ],
  pastRoles: [
    {
      name: 'Vortex SMP',
      role: 'Staff',
      description: 'Server moderation, player support, and event assistance.',
    },
    {
      name: 'Primal SMP',
      role: 'Staff',
      description: 'Community support and server operations.',
    },
    {
      name: 'Anchor SMP',
      role: 'Staff',
      description: 'Staff work, management support, and player communication.',
    },
    {
      name: 'Reality SMP',
      role: 'Staff',
      description: 'Server staff experience and community moderation.',
    },
  ],
  gallery: [
    {
      src: assetPath('screenshots/prism-smp-lore.png'),
      alt: 'Prism SMP lore plugin interface in Minecraft',
      caption: 'Prism SMP lore plugin UI',
    },
    {
      src: assetPath('screenshots/prism-plugin-ability-visuals-flame-ring.png'),
      alt: 'Prism plugin flame ability visual in a snowy Minecraft biome',
      caption: 'Prism plugin ability visuals - flame ring',
    },
    {
      src: assetPath('screenshots/prism-plugin-ability-visuals-snowfield.png'),
      alt: 'Prism plugin ability visual preview in a snowy Minecraft biome',
      caption: 'Prism plugin ability visuals - snowfield preview',
    },
  ],
  galleryIntro: {
    eyebrow: 'Project evidence',
    heading: 'Screenshots and Systems',
    text:
      'Visual proof from plugin work, server systems, and Minecraft development experiments.',
  },
  specializedSkills: [
    {
      title: 'Staff Management',
      description:
        'Building hierarchies, training moderation teams, and enforcing rules across servers.',
      label: 'TEAM',
    },
    {
      title: 'Discord Development',
      description: 'Bot integrations, automations, and server configuration.',
      label: 'DISC',
    },
    {
      title: 'Minecraft Plugin Development',
      description: 'Custom Java plugin systems, gameplay mechanics, and server tools.',
      label: 'JAVA',
    },
    {
      title: 'Server Architecture',
      description: 'Designing channel layouts, permissions, ranks, and staff structures.',
      label: 'ARCH',
    },
    {
      title: 'Bot Configuration',
      description: 'Setting up moderation bots, welcome systems, tickets, and automation.',
      label: 'BOT',
    },
    {
      title: 'Community Building',
      description:
        'Growing active communities through events, engagement, and player interaction.',
      label: 'GROW',
    },
    {
      title: 'MC Server Ops',
      description:
        'Managing Survival, Network, and Event servers with plugins at scale.',
      label: 'OPS',
    },
    {
      title: 'Plugin Configuration',
      description:
        'Custom YAML configs for EssentialsX, LuckPerms, TAB, WorldGuard, and other plugins.',
      label: 'YAML',
    },
    {
      title: 'Event Coordination',
      description: 'Planning and running live community events with real-time logistics.',
      label: 'LIVE',
    },
  ],
  contact: {
    heading: 'CONNECT & CONTACT',
    text: 'Contact me on Discord:',
    discordUsername: '.glitch',
    // Placeholder until a real Discord invite is added.
    communityHref: '#',
    communityLabel: 'My Community',
  },
}
