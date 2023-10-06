import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
    children,
}) {
    return (
        <section>
                <div style={{ display: "grid", gridTemplateColumns: "20% 1fr", width: "100%" }}>
                    <nav style={{ width: "300px", height: "100%", backgroundColor: "#dddddd"}}>
                        <div style={{display:"flex",justifyContent:"center" }}>
                            <div style={{marginTop:"50px"}} >
                                <Link href={"/admin"}><Image alt="" src={'/headerlogo.png'} height={100} width={100} style={{width:"100%"}} /></Link>
                            </div>
                        </div>
                            <div style={{marginTop:"80px",display:"flex",flexDirection:"column",justifyContent:"center"}}>
                                <ul style={{display:"flex",flexDirection:"column",gap:"20px",justifyContent:"center",textTransform:"uppercase",fontSize:"18px"}}>
                                    <li>
                                        <Link href={"/admin"}>dashboard</Link>
                                    </li>
                                    <li>
                                        <Link href={"/loads/allloads"}>all loads</Link>
                                    </li>
                                    <li>
                                        <Link href={"/addLoad"}>add loads</Link>
                                    </li>
                                    <li>
                                        <Link href={"/userActiveForm"}>Active User</Link>
                                    </li>
                                </ul>
                            </div>
                    </nav>
                    <div style={{padding:"0 50px"}}>
                        {children}
                    </div>
                </div>

        </section>
    )
}