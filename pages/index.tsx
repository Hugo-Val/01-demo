import Link from "next/link"
import  MainLayout  from "@/Componenets/Layouts/MainLayout"





export default function Home() {
  return (
    <MainLayout>
      <h1>Home Page</h1>
      <h1 className={"title"}>
        Go to <Link href={"/about"}>About</Link> 
      </h1>
      <div className={"description"}>
        <p>
          Get started by editing&nbsp;
          <code className={"code"}>pages/index.tsx</code>
        </p>
          
      </div>
    </MainLayout>
  )
}
