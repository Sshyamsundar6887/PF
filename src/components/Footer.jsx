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
      label: 'Work',
      href: '#work'
    },
    {
      label: 'Reviews',
      href: '#reviews'
    },
    {
      label: 'Contact me',
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
      href: 'https://www.linkedin.com/in/shyam-sundar-s-166b2619b/'
    },
    {
      label: 'Twitter X',
      href: 'https://x.com/law6887'
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
            <div className="lg:grid lg:grid-cols-2">

                <div className="mb-10">
                    <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
                     Let&apos;s work together today!
                    </h2>
                    <ButtonPrimary
                        href="mailto:shyamsriperumbuduru@gmail.com"
                        label="Contact me"
                        icon="chevron_right"
                        classes="reveal-up"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4 lg:pl-20">
                    <div>
                        <p className="mb-2 reveal-up">Sitemap</p>

                        <ul>
                            {sitemap.map(({ label, href }, key)=>(
                                <li key={key}>
                                    <a
                                     href={href}
                                     className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="mb-2 reveal-up">Socials</p>

                        <ul>
                            {socials.map(({ label, href }, key)=>(
                                <li key={key}>
                                    <a
                                     href={href}
                                     target="_blank"
                                     className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

            </div>

            <div className="flex items-center justify-between pt-10 mb-8">
                <a
                 href="/"
                 className="logo reveal-up"
                >
                    <img
                     src="./logo.ico"
                     width={40}
                     height={40}
                     alt="Logo"
                    />      
                </a>

                <p className="text-zinc-500 text-sm reveal-up">
                    &copy; 2025 <span className="text-zinc-200">S.SHYAM SUNDAR</span>
                </p>
            </div>

        </div>
    </footer>
  )
}

export default Footer
