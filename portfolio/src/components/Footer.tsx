import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { profile } from '../data/portfolio';

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
          <div>
            <a href="#top" className="font-display font-semibold text-xl">
              RIYAZ<span className="text-signal">.</span>
            </a>
            <p className="text-muted text-sm mt-3 max-w-xs">{profile.tagline}</p>
          </div>

          <div className="flex gap-16">
            <div>
              <h4 className="font-mono text-xs text-muted uppercase tracking-widest mb-3">Quick Links</h4>
              <ul className="space-y-2">
                {LINKS.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-sm text-muted hover:text-signal transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-xs text-muted uppercase tracking-widest mb-3">Connect</h4>
              <div className="flex gap-4 text-lg text-muted">
                <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-signal">
                  <FiGithub />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-signal">
                  <FiLinkedin />
                </a>
                <a href={`mailto:${profile.email}`} className="hover:text-signal">
                  <FiMail />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6">
          <p className="text-xs text-muted font-mono">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <a
            href="#top"
            className="flex items-center gap-2 text-xs font-mono text-muted hover:text-signal transition-colors"
          >
            Back to top <FiArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}
