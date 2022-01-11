import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Navbar = ({ siteTitle }) => (
  <div style={{
      background: `#333`,
      paddingTop: `10px`
  }}>

      <ul style ={{
         listStyle:`none`,
         display: 'flex',
         justifyContent: 'space-evenly',
      
         
        }}>
        <li > <Link to ='/' >Home </Link></li>
        <li> <Link to ='/page-2' >Page 2 </Link></li>
        <li><Link to ='/using-typescript' > TypeScript</Link></li>
        <li><Link to ='/using-ssr' > SSR</Link></li>
        <li><Link to ='/using-dsg' > DSG</Link> </li>   


      </ul>

    </div>
  )

  export default Navbar