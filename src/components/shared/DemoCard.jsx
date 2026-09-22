import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import Card, { CardContent } from '../ui/Card';

const DemoCard = ({ demo }) => {
  const { title, category, status, updated, description, highlights = [], tags = [], href, external } = demo;

  const body = (
    <Card className="h-full flex flex-col group-hover:border-primary/50 group-hover:-translate-y-1 group-hover:shadow-[0_0_40px_rgba(37,99,235,0.15)]">
      <CardContent className="flex-1 space-y-5">
        <div className="flex items-start justify-between gap-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-heading font-bold text-[10px] tracking-widest uppercase">
            {category}
          </span>
          {status && (
            <span className="inline-flex items-center gap-2 text-[10px] font-heading font-bold tracking-widest uppercase text-text-muted whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              {status}
            </span>
          )}
        </div>

        <div className="space-y-3">
          <h3 className="text-2xl font-heading font-bold leading-tight text-text-primary group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-text-secondary leading-relaxed">{description}</p>
        </div>

        {highlights.length > 0 && (
          <ul className="space-y-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                <Check size={16} className="mt-0.5 shrink-0 text-secondary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-surface-dim border border-border text-xs text-text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </CardContent>

      <div className="px-6 py-5 border-t border-border flex items-center justify-between">
        <span className="text-xs text-text-muted font-heading tracking-wide uppercase">
          {updated ? `Updated ${updated}` : ''}
        </span>
        <span className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-3 transition-all">
          Open Demo
          <ArrowUpRight size={16} />
        </span>
      </div>
    </Card>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block h-full rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        aria-label={`${title} - opens in a new tab`}
      >
        {body}
      </a>
    );
  }

  return (
    <Link
      to={href}
      className="group block h-full rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      {body}
    </Link>
  );
};

export default DemoCard;
