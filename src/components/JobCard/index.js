import {Link} from 'react-router-dom'
import {MdLocationOn} from 'react-icons/md'
import {BsFillBriefcaseFill, BsStarFill} from 'react-icons/bs'
import './index.css'

const JobCard = props => {
  const {jobData} = props
  const {
    companyLogoUrl,
    employmentType,
    id,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
  } = jobData
  return (
    <>
      <Link to={`/jobs/${id}`} className="link-item">
        <li className="job-item">
          <div className="logo-title-location-container">
            <div className="logo-title-container">
              <img
                className="company-logo"
                src={companyLogoUrl}
                alt="company logo"
              />
              <div className="title-rating-container">
                <h1 className="title-heading">{title}</h1>
                <div className="rating-container">
                  <BsStarFill className="rating-icon" />
                  <p className="rating-heading">{rating}</p>
                </div>
              </div>
            </div>
            <div className="location-package-container">
              <div className="location-employee-container">
                <div className="location-container">
                  <MdLocationOn className="location-icon" />
                  <p className="location-heading">{location}</p>
                </div>
                <div className="employment-type-container">
                  <BsFillBriefcaseFill className="brief-case-icon" />
                  <p className="job-type">{employmentType}</p>
                </div>
              </div>
              <div>
                <p className="package-heading">{packagePerAnnum}</p>
              </div>
            </div>
          </div>
          <hr className="line" />
          <h1 className="description-heading">Description</h1>
          <p className="description-text">{jobDescription}</p>
        </li>
      </Link>
    </>
  )
}

export default JobCard
