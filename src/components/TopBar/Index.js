import React from 'react'
import './TopBar.css'
import Logo from '../../assets/images/logo.svg'
import SelectFont from './SelectFont/Index'
import ThemeHandle from './ThemeHandle/Index'

const Index = () => {
  return (
    <div className='topbar'>

      <div className="topbar_content">
        <div className="brand">
          <img src={Logo} alt='dictionary logo'/>
        </div>
        <div className="topbar_actions">
          <SelectFont />
          <ThemeHandle />
        </div>
      </div>
    </div>
  )
}

export default Index