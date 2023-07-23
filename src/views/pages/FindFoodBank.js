/* eslint-disable react/no-unescaped-entities */
import { CCard, CCardBody, CCol, CContainer, CForm, CHeader, CHeaderNav, CNavItem, CNavLink } from '@coreui/react'
import { useEffect, useState, React } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AppFooter } from 'src/components'
import axios from 'axios';

const FindFoodBank = () => {
  const [value, setValue] = useState(''); // Here we'll store the value of the search bar's text input
  const [suggestions, setSuggestions] = useState([]); // This is where we'll store the retrieved suggestions
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5040/cmfb/foodBank/getAllFoodBanks`);
        const suggestion = data?.filter((element)=> element.details.includes(value))
        setSuggestions(suggestion);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [value]);


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
            <Link to="/donate-now">
              <a className="btn btn-custom font-bold font-white" href="/">
                Donate Now
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
                    <p>Find a Food Bank Near You</p>
                    <h2>Support and Nourishment for Those in Need!</h2>
                  </div>
                  <div className="donate-text">
                    <p>
                      Discover nearby food banks through our user-friendly platform, ensuring no one goes hungry. Whether you need assistance or want to contribute, join us in building a caring community together.                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="donate-form p-0">
                  <CForm>
                    <div className="control-group">
                      <input
                        type="text"
                        className="form-control"
                        value={value}
                        placeholder="Search food banks..."
                        onChange={(e) => {
                          setValue(e.target.value);
                        }}
                      />
                    </div>
                  </CForm>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
        </div>
        <div className='bg-black borderNone'>
          {
            suggestions.length === 0 ? null :
              suggestions?.map((suggestion, i) => {
                return (<CCard key={i} className='foodBankCard'>
                  <CCardBody>
                    {suggestion.details}
                  </CCardBody>
                </CCard>
                )
              }
              )}
        </div>
      </CCol>
      <AppFooter className={'m-0 borderNone'} isAdmin={false} />
    </>)
}

export default FindFoodBank
