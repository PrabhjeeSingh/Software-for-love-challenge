import * as React from "react"

import { Link } from "gatsby"

const Navbar = ({ siteTitle }) => (
  <div style={{
      background: `#333`,
      paddingTop: `10px`
  }}>

      <ul style ={{
         listStyle:`none`,
         overflow:'hidden',
         margin: `0 auto`,
        maxWidth: 960,
        fontSize:'1.4rem'
        
        
         
        }}>
        <li id='dat'> <Link to ='/' >Home </Link></li>
        <li id='dat'> <Link to ='/page-2' >Page 2 </Link></li>
        <li id='dat'><Link to ='/using-typescript' > TypeScript</Link></li>
        <li id='dat'><Link to ='/using-ssr' > SSR</Link></li>
        <li id='dat'><Link to ='/using-dsg' > DSG</Link> </li>   


     

      </ul>

    </div>
  )

  export default Navbar