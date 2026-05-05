import { Linkedin, Facebook, Slack, X, AtSign } from "lucide-react";

export type shareConfig = {
    url: string,
    title?: string,
    text?: string
}

export type SocialProviders = 'linkedin' | 'facebook' | 'slack' | 'x' | 'threads'

export const SOCIAL_PROVIDERS = {
    linkedin: {
        name: 'LinkedIn',
        icon: <Linkedin className="h-4 w-4"></Linkedin>,
        shareUrl: (config: shareConfig) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(config.url)}`
    },
    facebook: {
        name: 'Facebook',
        icon: <Facebook className="h-4 w-4" />,
        shareUrl: (config: shareConfig) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(config.url)}`
    },
    slack: {
        name: 'Slack',
        icon: <Slack className="h-4 w-4" />,
        shareUrl: (config: shareConfig) => `https://slack.com/share?url=${encodeURIComponent(config.url)}&text=${encodeURIComponent(config.title || '')}`
    },
    x: {
        name: 'X',
        icon: <X className="h-4 w-4" />,
        shareUrl: (config: shareConfig) => `https://x.com/intent/tweet?url=${encodeURIComponent(config.url)}&text=${encodeURIComponent(config.title || '')}`
    },
    threads: {
        name: 'Threads',
        icon: <AtSign className="h-4 w-4" />,
        shareUrl: (config: shareConfig) => `https://threads.net/intent/post?text=${encodeURIComponent(config.url)}&text=${encodeURIComponent(config.title || '')}`
    },
}