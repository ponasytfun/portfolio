import { MessageCircle, Music2, Play } from 'lucide-react'

const icons = {
  Discord: MessageCircle,
  TikTok: Music2,
  YouTube: Play,
}

export default function SocialIcon({ label, size = 18 }) {
  const Icon = icons[label] ?? MessageCircle

  return <Icon aria-hidden="true" size={size} strokeWidth={1.8} />
}
