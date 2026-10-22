import ReactMarkdown from 'react-markdown';

import ExternalLinkMark from './ExternalLinkMark';
import entryStyles from '../styles/entry.module.css';

/* Renders markdown description with outbound link icons for accessibility. */
const COMPONENTS = {
  /* Destructure node to prevent passing unknown attributes to DOM. */
  // eslint-disable-next-line no-unused-vars
  a({ node, children, ...props }) {
    return (
      <a {...props} target="_blank" rel="noopener noreferrer">
        {children}
        <ExternalLinkMark className={entryStyles.inlineIcon} size={12} />
      </a>
    );
  },
};

export default function Description({ children }) {
  if (!children) return null;

  return <ReactMarkdown components={COMPONENTS}>{children}</ReactMarkdown>;
}
