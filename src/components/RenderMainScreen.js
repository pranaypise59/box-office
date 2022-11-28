import Navbar from "./Navbar";

export default function RenderMainScreen (children){
    return <>
    <Navbar/>
    {children}
    </>
}