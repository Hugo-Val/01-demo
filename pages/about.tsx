import  MainLayout  from '@/Componenets/Layouts/MainLayout';
import { DarkLayout } from '@/Componenets/Layouts/DarkLayout';
import Link from 'next/link';

export default function About() {
    return (
      <>
        <h1>About Page</h1>
        <h1 className={"title"}>
          Go to <Link href={"/"}>Home</Link> 
        </h1>
        <div className={"description"}>
          <p>
            Get started by editing&nbsp;
            <code className={"code"}>pages/about.tsx</code>
          </p>
            
        </div>
      </>
    )
}

About.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
        <DarkLayout>
            {page}
        </DarkLayout>
    </MainLayout> 
  )
}