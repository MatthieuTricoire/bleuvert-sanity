import { MaxWidthContainer } from '@/components/max-width-container'
import { Typography } from '@/components/typography'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export default function NotFound() {
  return (
    <MaxWidthContainer className='flex flex-col justify-center items-center flex-1'>
      <Typography component='h1' variant='h1'>Page non trouvée</Typography>

      <Typography component='p' variant='body'>La page que vous recherchez n&apos;existe pas.</Typography>

      <Link className={cn("mt-5", buttonVariants())} href="/">Retour sur la page d&apos;accueil</Link>
    </MaxWidthContainer>
  )
}
