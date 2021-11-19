import Link , {LinkProps} from 'next/link';
import { ReactElement,cloneElement } from 'react';
import { useRouter } from 'next/router';

interface ActiveLinkProps extends LinkProps{
  children:ReactElement
  shouldMatchExactHref?:boolean 
}
export function ActiveLink ({children,shouldMatchExactHref = false,...rest}:ActiveLinkProps){
  let isActive = false
  const {asPath}  = useRouter();
   
  if(shouldMatchExactHref && (asPath === rest.href || asPath === rest.as))
  {
    isActive=true
  }
  if(!shouldMatchExactHref && 
    (asPath.startsWith( String(rest.href))
    || asPath.startsWith(String(rest.as)))){
      isActive=true
    }
  return (
      <Link {...rest}>
        {cloneElement(children,{
          color:isActive? 'gray.50':'pink.500'
        })}
      </Link>
  );
}