import Link from "next/link"
import  MainLayout  from "@/Componenets/Layouts/MainLayout"





export default function Contact() {
  return (
    <MainLayout>
      <h1>Contact Page</h1>
      <h1 className={"title"}>
        Go to <Link href={"/"}>Home</Link> 
      </h1>
      <div className={"description"}>
        <p>
          Get started by editing&nbsp;
          <code className={"code"}>pages/contact/index.tsx</code>
        </p>
          
      </div>
    </MainLayout>
  )
}