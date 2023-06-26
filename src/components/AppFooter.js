import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="javascript:void(0);" rel="noopener noreferrer">
          Canada Mobile Food Bank Online
        </a>
        <span className="ms-1">&copy; 2023</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
