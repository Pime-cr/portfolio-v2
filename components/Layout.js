import NavBar from "./NavBar"
import { useEffect } from "react"
import { useRouter } from "next/router"
import NProgress from "nProgress"
import Classnames from 'classNames'

const Layout = ({ children ,footer=true , dark , title}) => {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url) => {
          console.log(url);
          NProgress.start();
        };
    
        router.events.on("routeChangeStart", handleRouteChange);
    
        router.events.on("routeChangeComplete", () => NProgress.done());
    
        return () => {
          router.events.off("routeChangeStart", handleRouteChange);
        };
      }, []);

    return (
        <div className={Classnames({'bg-dark':dark })}>  
            <NavBar />
            <main className="container py-4">
                {title && (<h1 className={Classnames('text-center',{'text-light':dark})}>{title}</h1>)}
                {children}
    
            </main>
            {footer&&(<footer className="bg-dark text-light text-center">
                <div className="container p-4">
                    <h1>&copy; Cristian Pimentel Portfolio</h1>
                    <p>2022 - {new Date().getFullYear()}</p>
                </div>
    
            </footer>)}
        </div >
    )
}

export default Layout