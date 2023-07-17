import Link from "next/link"





export default function Home() {
  return (
    <>
      <h1 className={"title"}>Home Page</h1>
      <h1 className={"title"}>
        Go to <Link href={"/about"}>About</Link> 
      </h1>
      <main className={"main"}>
        <div className={"description"}>
          <p>
            Get started by editing&nbsp;
            <code className={"code"}>pages/index.tsx</code>
          </p>
          
        </div>

        

        
      </main>
    </>
  )
}
