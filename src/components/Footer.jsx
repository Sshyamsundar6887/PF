/**
 * @copyright 2025 SHYAM
 * @license Apache-2.0
 */

/**
 * Components
 */
import { ButtonPrimary } from "./Button";


const sitemap = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Experience',
      href: '#experience'
    },
    {
      label: 'Projects',
      href: '#work'
    },
    {
      label: 'Contact',
      href: '#contact'
    }
  ];
  
  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/Sshyamsundar6887'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/shyam-sundar-s-sdn'
    },
    {
      label: 'Twitter X',
      href: 'https://x.com/Ace_6887'
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/trafalgar_d_law6887/'
    },
    {
      label: 'CodePen',
      href: 'https://codepen.io/shyam_sundar_6887/'
    }
  ];


const Footer = () => {
  return (
    <footer className="section">
        <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">

                <div className="mb-6">
                    <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
                     Let&apos;s work together today!
                    </h2>
                    <ButtonPrimary
                        href="mailto:shyamsriperumbuduru@gmail.com"
                        label="Get in Touch"
                        icon="chevron_right"
                        classes="reveal-up"
                    />
                </div>

                <div className="grid grid-cols-2 gap-8 lg:pl-20">
                    <div>
                        <p className="mb-3 text-sm font-semibold tracking-wider uppercase reveal-up" style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.1em' }}>Sitemap</p>

                        <ul className="flex flex-col gap-1">
                            {sitemap.map(({ label, href }, key)=>(
                                <li key={key}>
                                    <a
                                     href={href}
                                     className="block text-sm py-1.5 transition-colors reveal-up footer-link"
                                     style={{ color: 'var(--color-text-secondary)' }}
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="mb-3 text-sm font-semibold tracking-wider uppercase reveal-up" style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.1em' }}>Socials</p>

                        <ul className="flex flex-col gap-1">
                            {socials.map(({ label, href }, key)=>(
                                <li key={key}>
                                    <a
                                     href={href}
                                     target="_blank"
                                     className="block text-sm py-1.5 transition-colors reveal-up footer-link"
                                     style={{ color: 'var(--color-text-secondary)' }}
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

            </div>

            <div className="flex items-center justify-between pt-12 mb-8">
                <a
                 href="/"
                 className="logo reveal-up"
                >
                    <img
                     src={`${import.meta.env.BASE_URL}logo.ico`}
                     width={36}
                     height={36}
                     alt="Logo"
                    />      
                </a>

                <p className="text-sm reveal-up" style={{ color: 'var(--color-text-tertiary)' }}>
                    &copy; 2025 <span style={{ color: 'var(--color-text-primary)' }}>Shyam Sundar Sriperumbuduru</span>
                </p>
            </div>

        </div>
    </footer>
  )
}

export default Footer
