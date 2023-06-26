import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilAddressBook, cilLockLocked, cilPhone, cilText, cilUser } from '@coreui/icons'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [email, setEmail] = useState()
  const [address, setAddress] = useState()
  const [phone, setPhone] = useState()
  const [role, setRole] = useState()
  const [name, setName] = useState()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const history = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (email && password && confirmPassword && name && address && phone && role) {
      history('/dashboard')
    }
  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={handleSubmit}>
                  <h1>Register</h1>
                  <p className="text-medium-emphasis">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput
                      type="email"
                      placeholder="Email"
                      autoComplete="email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilText} />
                    </CInputGroupText>
                    <CFormInput
                      type="text"
                      placeholder="Name"
                      autoComplete="name"
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                      minLength={6}
                      maxLength={12}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-2">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      style={{ padding: '10px' }}
                      type="password"
                      placeholder="Confirm password"
                      autoComplete="new-password"
                      minLength={6}
                      maxLength={12}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </CInputGroup>
                  {password === confirmPassword ? null : password !== '' &&
                    confirmPassword !== '' ? (
                    <div className="mb-2">
                      <span style={{ color: 'red' }}>Confirm password must match password.</span>
                    </div>
                  ) : null}
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilAddressBook} />
                    </CInputGroupText>
                    <CFormInput
                      type="text"
                      placeholder="Address"
                      autoComplete="address"
                      onChange={(e) => setAddress(e.target.value)}
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilPhone} />
                    </CInputGroupText>
                    <CFormInput
                      type="text"
                      placeholder="Phone"
                      autoComplete="phone"
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>

                    <CFormSelect
                      id="role"
                      onChange={(e) => setRole(e.target.value)}
                      placeholder="Role"
                      required
                    >
                      <option>Select Role</option>
                      <option value="1">Volunteer</option>
                      <option value="2">User</option>
                      <option value="3">Admin</option>
                    </CFormSelect>
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton type="submit" color="primary">
                      Create Account
                    </CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
