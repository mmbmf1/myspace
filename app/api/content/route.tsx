const posts = [
  {
    title: 'How to make the perfect omelette',
    slug: 'perfect-omelette',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at eros mauris. Aliquam congue ex eu ipsum commodo, a bibendum enim suscipit. Vestibulum condimentum purus at nulla elementum.',
  },
  {
    title: '10 tips for better sleep',
    slug: 'better-sleep-tips',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at eros mauris. Aliquam congue ex eu ipsum commodo, a bibendum enim suscipit. Vestibulum condimentum purus at nulla elementum.',
  },
  {
    title: 'Why meditation is important for your mental health',
    slug: 'meditation-mental-health',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at eros mauris. Aliquam congue ex eu ipsum commodo, a bibendum enim suscipit. Vestibulum condimentum purus at nulla elementum.',
  },
]

import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json(posts)
}
