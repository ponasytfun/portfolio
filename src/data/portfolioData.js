const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`

export const portfolioData = {
  navItems: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Current', href: '#current-roles' },
    { label: 'Past', href: '#past-roles' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact Me', href: '#contact' },
  ],
  hero: {
    badge: 'About Me Portfolio',
    name: 'Glitch',
    title: 'Minecraft Developer & Community Builder',
    profileImage: {
      src: assetPath('profile/glitch-pfp-round.png'),
      alt: 'Glitch profile avatar',
    },
    subtitle: 'Minecraft plugins, server systems, communities, and UI experiments',
    support:
      'This site is a quick look at what I enjoy making, what I am learning, and the server/community projects I like spending time on.',
    primaryAction: { label: 'Contact Me', href: '#contact' },
    secondaryAction: { label: 'About Me', href: '#about' },
  },
  about: {
    heading: 'ABOUT ME',
    text:
      "Hi, I'm Glitch. I like building Minecraft plugins, server systems, Discord tools, UI experiments, and community features. I have spent time around Prism SMP, Unstable SMP, Vortex SMP, Primal SMP, Anchor SMP, and Reality SMP, mostly focused on custom systems, server operations, staff work, and practical coding projects.",
    stats: [
      { value: '6+', label: 'Server Projects' },
      { value: '1.21+', label: 'Minecraft Versions' },
      { value: 'Java', label: 'Main Plugin Stack' },
    ],
  },
  currentRoles: [
    {
      name: 'Prism SMP',
      role: 'Developer',
      description:
        'Plugin systems, custom gameplay ideas, server tools, and community-focused features.',
      icon: 'DEV',
      stats: [
        { label: 'Focus', value: 'Plugins' },
        { label: 'Style', value: 'Custom systems' },
      ],
    },
    {
      name: 'Unstable SMP',
      role: 'Staff / Developer',
      description:
        'Staff support, server systems, events, and community management work.',
      icon: 'OPS',
      stats: [
        { label: 'Focus', value: 'Staff work' },
        { label: 'Style', value: 'Server ops' },
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
  specializedSkills: [
    {
      title: 'Minecraft Plugin Development',
      description: 'Java plugin systems, gameplay mechanics, commands, configs, and server tools.',
      label: 'JAVA',
    },
    {
      title: 'Server Operations',
      description: 'Working with ranks, permissions, staff workflows, events, and server setup.',
      label: 'OPS',
    },
    {
      title: 'Discord Tools',
      description: 'Bot ideas, moderation workflows, logging, automations, and community setup.',
      label: 'DISC',
    },
    {
      title: 'Automation Experiments',
      description: 'Small tools that reduce repetitive work and make testing ideas faster.',
      label: 'AUTO',
    },
    {
      title: 'UI Experiments',
      description: 'Dark interfaces, motion, responsive layout, and personal web pages.',
      label: 'UI',
    },
    {
      title: 'Debugging',
      description: 'Reading logs, fixing plugin errors, testing changes, and adapting code.',
      label: 'FIX',
    },
    {
      title: 'Server Hosting',
      description: 'Hosting basics, server setup, deployment checks, and practical maintenance.',
      label: 'HOST',
    },
    {
      title: 'Community Building',
      description: 'Events, player support, staff communication, and keeping servers organized.',
      label: 'COMM',
    },
  ],
  contact: {
    heading: 'FIND ME ON DISCORD',
    text: 'Discord is the best way to contact me right now.',
    discordUsername: 'mr. zap',
  },
}
