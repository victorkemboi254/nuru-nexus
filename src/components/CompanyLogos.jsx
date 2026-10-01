import { memo } from 'react'

export const DltooLogo = memo(({ mode = 'dark', className = '', alt = 'DLTOO Advocates', ...props }) => (
  <img
    src={mode === 'dark' ? '/logos/dltoo-white.png' : '/logos/dltoo.png'}
    alt={alt}
    className={`company-brand-logo ${className}`}
    loading="eager"
    decoding="async"
    {...props}
  />
))

export const SildaLogo = memo(({ mode = 'dark', className = '', alt = 'SILDA EduTech', ...props }) => (
  <img
    src={mode === 'dark' ? '/logos/silda-white.png' : '/logos/silda.png'}
    alt={alt}
    className={`company-brand-logo ${className}`}
    loading="eager"
    decoding="async"
    {...props}
  />
))

export const JemnetLogo = memo(({ mode = 'dark', className = '', alt = 'JEMNET', ...props }) => (
  <img
    src={mode === 'dark' ? '/logos/jemnet-white.png' : '/logos/jemnet-dark.png'}
    alt={alt}
    className={`company-brand-logo ${className}`}
    loading="eager"
    decoding="async"
    {...props}
  />
))

export const PentapathLogo = memo(({ mode = 'dark', className = '', alt = 'Pentapath Group', ...props }) => (
  <img
    src={mode === 'dark' ? '/logos/pentapath-white.png' : '/logos/pentapath.png'}
    alt={alt}
    className={`company-brand-logo ${className}`}
    loading="eager"
    decoding="async"
    {...props}
  />
))

export default {
  DltooLogo,
  SildaLogo,
  JemnetLogo,
  PentapathLogo,
}
