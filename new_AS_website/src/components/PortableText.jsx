import { PortableText as PortableTextReact } from '@portabletext/react';

const components = {
  block: {
    h1: ({children}) => <h1 className="text-display" style={{marginBottom: '1rem', marginTop: '2.5rem', fontSize: '2.5rem'}}>{children}</h1>,
    h2: ({children}) => <h2 className="text-h2" style={{marginBottom: '1rem', marginTop: '2.5rem', fontSize: '2rem'}}>{children}</h2>,
    h3: ({children}) => <h3 className="text-h3" style={{marginBottom: '1rem', marginTop: '2rem', fontSize: '1.5rem'}}>{children}</h3>,
    normal: ({children}) => <p style={{fontSize: '1.15rem', lineHeight: '1.7', marginBottom: '1.5rem', color: 'var(--gray-dark)'}}>{children}</p>,
    blockquote: ({children}) => <blockquote style={{borderLeft: '4px solid var(--neon)', paddingLeft: '1.5rem', fontStyle: 'italic', margin: '2rem 0', fontSize: '1.3rem', color: 'var(--black)'}}>{children}</blockquote>,
  },
  list: {
    bullet: ({children}) => <ul style={{marginBottom: '2rem', paddingLeft: '1.5rem', fontSize: '1.15rem', lineHeight: '1.7', color: 'var(--gray-dark)'}}>{children}</ul>,
    number: ({children}) => <ol style={{marginBottom: '2rem', paddingLeft: '1.5rem', fontSize: '1.15rem', lineHeight: '1.7', color: 'var(--gray-dark)'}}>{children}</ol>,
  },
  listItem: {
    bullet: ({children}) => <li style={{marginBottom: '0.8rem'}}>{children}</li>,
    number: ({children}) => <li style={{marginBottom: '0.8rem'}}>{children}</li>,
  },
  marks: {
    strong: ({children}) => <strong style={{fontWeight: '800', color: 'var(--black)'}}>{children}</strong>,
    em: ({children}) => <em style={{fontStyle: 'italic'}}>{children}</em>,
    link: ({value, children}) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
      return (
        <a href={value?.href} target={target} rel={target === '_blank' ? 'noopener noreferrer nofollow' : undefined} style={{color: 'var(--black)', textDecoration: 'underline', textDecorationThickness: '2px', textDecorationColor: 'var(--neon)', fontWeight: '700'}}>
          {children}
        </a>
      )
    },
  },
};

export default function PortableText({ value }) {
    if (!value) return null;
    return <PortableTextReact value={value} components={components} />;
}
