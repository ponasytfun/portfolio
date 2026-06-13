export const portfolioData = {
  navItems: [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Screenshots', href: '#screenshots' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    badge: 'Developer Portfolio',
    title: "Hi, I'm Glitch.",
    profileImage: {
      src: '/profile/glitch-pfp.png',
      alt: 'Glitch profile avatar',
    },
    subtitle:
      'I build Minecraft plugins, server systems, automation tools, and UI experiments.',
    support:
      'I have worked with server projects like Prism SMP, Unstable SMP, Vortex SMP, Primal SMP, Anchor SMP, and Reality SMP, focusing on custom gameplay features, admin tools, progression systems, and practical coding projects.',
    actions: [
      { label: 'View Projects', href: '#projects', variant: 'primary' },
      { label: 'View Screenshots', href: '#screenshots', variant: 'secondary' },
      { label: 'See Skills', href: '#skills', variant: 'ghost' },
    ],
  },
  projects: [
    {
      name: 'Minecraft Plugin Systems',
      description:
        'Custom server-side systems built for Paper / Java Minecraft servers, including gameplay mechanics, admin tools, events, and progression features.',
      tech: ['Java', 'Paper API', 'Maven', 'Minecraft 1.21.x'],
      status: 'In progress',
      links: { details: '#experience', screenshots: '#screenshots' },
    },
    {
      name: 'Discord / Server Tools',
      description:
        'Tools and integrations for server communities, moderation workflows, logging, and automation.',
      tech: ['Java', 'JavaScript', 'APIs', 'Discord bots'],
      status: 'Concepts and tools',
      links: { details: '#experience' },
    },
    {
      name: 'Automation Experiments',
      description:
        'Local tools and experiments focused on automating repetitive workflows and improving development speed.',
      tech: ['Python', 'JavaScript', 'Desktop automation'],
      status: 'Experimental',
      links: { details: '#experience' },
    },
    {
      name: 'Web / UI Experiments',
      description:
        'Frontend experiments focused on clean UI, animated effects, and interactive layouts.',
      tech: ['HTML', 'CSS', 'JavaScript', 'React'],
      status: 'Growing',
      links: { details: '#skills', screenshots: '#screenshots' },
    },
  ],
  gallery: [
    {
      src: '/screenshots/prism-smp-lore.png',
      alt: 'Prism SMP lore plugin interface in Minecraft',
      caption: 'Prism SMP lore plugin UI',
    },
  ],
  skillGroups: [
    {
      title: 'Programming',
      skills: [
        { name: 'Java', level: 'Strong' },
        { name: 'JavaScript', level: 'Comfortable' },
        { name: 'TypeScript', level: 'Learning' },
        { name: 'Python', level: 'Comfortable' },
        { name: 'Lua / Luau', level: 'Learning' },
      ],
    },
    {
      title: 'Minecraft Development',
      skills: [
        { name: 'Paper API', level: 'Strong' },
        { name: 'Maven', level: 'Comfortable' },
        { name: 'Plugin architecture', level: 'Strong' },
        { name: 'Config systems', level: 'Comfortable' },
        { name: 'Event listeners', level: 'Strong' },
        { name: 'Commands', level: 'Strong' },
        { name: 'Permissions', level: 'Comfortable' },
        { name: 'Server tools', level: 'Comfortable' },
      ],
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'HTML', level: 'Strong' },
        { name: 'CSS', level: 'Strong' },
        { name: 'Responsive UI', level: 'Comfortable' },
        { name: 'Animations', level: 'Comfortable' },
        { name: 'React / Vite', level: 'Learning' },
      ],
    },
    {
      title: 'Tools',
      skills: [
        { name: 'VS Code', level: 'Comfortable' },
        { name: 'IntelliJ IDEA', level: 'Comfortable' },
        { name: 'Git / GitHub', level: 'Comfortable' },
        { name: 'Maven', level: 'Comfortable' },
        { name: 'Server hosting', level: 'Strong' },
      ],
    },
    {
      title: 'Soft / Practical',
      skills: [
        { name: 'Debugging', level: 'Strong' },
        { name: 'Refactoring', level: 'Comfortable' },
        { name: 'Testing', level: 'Learning' },
        { name: 'Reading logs', level: 'Strong' },
        { name: 'Turning ideas into systems', level: 'Strong' },
      ],
    },
  ],
  experience: [
    'Built custom Minecraft server plugins and gameplay systems.',
    'Worked on server features such as abilities, events, admin tools, and progression.',
    'Debugged Java / Maven plugin errors and adapted code for newer Minecraft versions.',
    'Designed community tools and automation ideas for Discord and local workflows.',
    'Created UI and gameplay concepts for interactive projects.',
  ],
  contacts: [
    { label: 'GitHub', value: 'Coming soon', href: null },
    { label: 'Discord', value: 'mr.zap', href: null },
    { label: 'Email', value: 'Add contact email here', href: null },
    { label: 'Projects', value: 'Selected development work', href: '#projects' },
  ],
}
