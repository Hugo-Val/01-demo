import Link from "next/link"
import  MainLayout  from "@/Componenets/Layouts/MainLayout"





export default function Pricing() {
  return (
    <MainLayout>
      <h1>Pricing Page</h1>
      <h1 className={"title"}>
        Go to <Link href={"/"}>Home</Link> 
      </h1>
      <div className={"description"}>
        <p>
          Get started by editing&nbsp;
          <code className={"code"}>pages/pricing/index.tsx</code>
        </p>
          
      </div>
    </MainLayout>
  )
}