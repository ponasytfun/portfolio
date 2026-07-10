import { MessageCircle, Play } from 'lucide-react'

const icons = {
  Discord: MessageCircle,
  YouTube: Play,
}

export default function SocialIcon({ label, size = 18 }) {
  const Icon = icons[label] ?? MessageCircle

  return <Icon aria-hidden="true" size={size} strokeWidth={1.8} />
}
