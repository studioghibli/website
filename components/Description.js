import ReactMarkdown from 'react-markdown';

/*
 * Renders an entry's `description`, which the content schema specifies as
 * markdown. Isolated here so markdown stays a swappable detail of one
 * component rather than something the renderers know about.
 *
 * Deliberately does NOT pass `target="_blank"` to links (C12) — react-markdown
 * doesn't add it, and inline links should behave like every other link.
 */
export default function Description({ children }) {
  if (!children) return null;

  return <ReactMarkdown>{children}</ReactMarkdown>;
}
