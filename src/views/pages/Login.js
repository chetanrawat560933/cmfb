/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const history = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (email && password) {
      if (email === 'user@gmail.com' && password === 'user12') {
        history('/home')
      } else if (email === 'admin@gmail.com' && password === 'admin12') {
        history('/dashboard')
      } else {
        history('/dashboard')
      }
    }
  }
  return (
    <div className="bg-black min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        type="email"
                        placeholder="Email"
                        autoComplete="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required="true"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        minLength={6}
                        maxLength={12}
                        onChange={(e) => setPassword(e.target.value)}
                        required="true"
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton type="submit" className="btn-dark login btn btn-custom">
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 bg-yellow" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div className="createAccount">
                    <h2 className="font-white">Create Account!</h2>
                    <h6 className="font-white">Sign up if you still don't have an account.</h6>
                    <Link to="/register">
                      <CButton
                        className="mt-3 registerBtn btn-dark-yellow btn btn-custom"
                        active
                        tabIndex={-1}
                      >
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
