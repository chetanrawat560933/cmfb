/* eslint-disable react/style-prop-object */
import { cilBell } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
  CButton,
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderNav,
  CNavItem,
  CNavLink,
} from '@coreui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { logo } from 'src/assets/brand/logo'
import { AppHeaderDropdown } from 'src/components'

const Home = () => {
  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <CIcon icon={logo} height={48} alt="Logo" />
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
            <CNavLink to="/home" component={NavLink}>
              Home
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav>
          <CButton color="primary">Donate</CButton>
          <CNavItem>
            <CNavLink href="/#/home">
              <CIcon icon={cilBell} size="lg" />
            </CNavLink>
          </CNavItem>
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
    </CHeader>
  )
}

export default Home
