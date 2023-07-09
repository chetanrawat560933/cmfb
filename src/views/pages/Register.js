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
import axios from 'axios'

const Register = () => {
  const history = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    address: '',
    phone: '',
    role: '',
    name: '',
    password: '',
    confirmPassword: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault() //synthetic event

    if (formData.password !== formData.confirmPassword) {
      console.error('Password and Confirm Password do not match')
      return
    }

    try {
      const requestData = {
        email: formData.email,
        address: formData.address,
        phone: formData.phone,
        role: formData.role,
        name: formData.name,
        password: formData.password,
      }
      axios.post('http://localhost:5040/food-bank/register', requestData).then((response) => {
        console.log('User registered succesfully' + response)
        if (response) {
          history('/home')
        }
      })
    } catch (error) {
      console.error('Error registering user', error)
    }
  }

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
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
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    {/* onChange={(e) => setEmail(e.target.value)} */}
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilText} />
                    </CInputGroupText>
                    <CFormInput
                      type="text"
                      placeholder="Name"
                      autoComplete="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
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
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
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
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </CInputGroup>
                  {formData.password === formData.confirmPassword ? null : formData.password !==
                      '' && formData.confirmPassword !== '' ? (
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
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
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
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>

                    <CFormSelect
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      placeholder="Role"
                      required
                    >
                      <option value="1">Volunteer</option>
                      <option value="2">User</option>
                      <option value="3">Admin</option>
                    </CFormSelect>
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton type="submit" className="btn-dark btn btn-custom">
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
