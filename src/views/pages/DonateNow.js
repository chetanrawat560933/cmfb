import { CCol, CContainer, CHeader, CHeaderNav, CNavItem, CNavLink } from '@coreui/react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AppFooter } from 'src/components'

const DonateNow = () => {
    return (
        <>
            <CHeader position="sticky" className='bg-black'>
                <CContainer fluid>
                    <CHeaderNav className="d-none d-md-flex me-auto">
                        <CNavItem>
                            <CNavLink to="/home" component={NavLink} className='logo font-bold font-white'>
                                CMFB
                            </CNavLink>
                        </CNavItem>
                    </CHeaderNav>
                    <CHeaderNav>
                        <Link to="/find-food-bank">
                            <a className="btn btn-custom font-bold font-white" href="/">
                                Find Food Bank
                            </a>
                        </Link>
                        <a className="btn btn-custom font-bold font-white" href="/#/login">
                            Login
                        </a>
                    </CHeaderNav>
                </CContainer>
            </CHeader>
            <CCol xs={12} className='bg-black p-0'>
                <div className="donate m-0" data-parallax="scroll" data-image-src="img/donate.jpg">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div className="donate-content">
                                    <div className="section-header">
                                        <p>Donate Now</p>
                                        <h2>Change Lives, Donate Today!</h2>
                                    </div>
                                    <div className="donate-text">
                                        <p>
                                            Your generosity can make a difference. Support Canada Mobile Food Bank in
                                            providing essential resources to those in need. Together, we can build a
                                            brighter future for all. Click the button on the right to donate and create
                                            positive change. Thank you for your support!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="donate-form">
                                    <form>
                                        <div className="control-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Name"
                                                required="required"
                                            />
                                        </div>
                                        <div className="control-group">
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Email"
                                                required="required"
                                            />
                                        </div>
                                        <div className="btn-group" data-toggle="buttons">
                                            <label className="btn btn-custom active">
                                                <input type="radio" name="options" checked /> $10
                                            </label>
                                            <label className="btn btn-custom">
                                                <input type="radio" name="options" /> $20
                                            </label>
                                            <label className="btn btn-custom">
                                                <input type="radio" name="options" /> $30
                                            </label>
                                        </div>
                                        <div>
                                            <button className="btn btn-custom" type="submit">
                                                Donate Now
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CCol>
            <AppFooter className={'m-0 borderNone'} isAdmin={false} />
        </>)
}

export default DonateNow
