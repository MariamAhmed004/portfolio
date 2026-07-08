import { motion } from 'framer-motion';
import { AiOutlineGlobal } from 'react-icons/ai';
import { GiGamepad } from 'react-icons/gi';
import { FiMonitor } from 'react-icons/fi';
import { IoMdPhonePortrait } from 'react-icons/io';

function Projects() {
  return (
    <motion.section
      id="projects"
      className="p-5 container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-4">
        <h2 className="display-6">Projects</h2>
        <p className="text-muted">Selected work across Web, Game, Desktop and Mobile development</p>
      </div>

      <div className="row g-4">
        {/* Web Development Separator */}
        <div className="col-12">
          <div className="d-flex align-items-center my-3">
            <hr className="flex-grow-1" />
            <span className="mx-3 text-muted d-flex align-items-center"><AiOutlineGlobal className="me-2" size={20} />Web Development</span>
            <hr className="flex-grow-1" />
          </div>
        </div>

        <div className="col-12">
          <div className="row g-3">
            <div className="col-12 col-lg-6">
              <motion.div className="card h-100 shadow-sm" whileHover={{ scale: 1.02 }} transition={{ duration: 0.18 }}>
                <div className="row g-0 align-items-stretch">
                  <div className="col-12 col-sm-5 d-flex align-items-center justify-content-center bg-light p-2">
                    <AiOutlineGlobal size={60} className="text-secondary" />
                  </div>
                  <div className="col-12 col-sm-7">
                    <div className="card-body">
                      <h5 className="card-title">LedgerLink</h5>
                      <p className="card-text">Web-based SaaS platform for SMEs in Bahrain enabling centralized management of multiple stores and operational data.</p>
                      <p className="mb-1"><strong>Stack:</strong> ReactJS, ASP.NET Core, Azure SQL, ASP.NET Identity, EF Core, HighCharts.</p>
                      <div className="mt-2"><small className="text-muted">Replace the icon with a screenshot or embed a video using a <code>video</code> tag.</small></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="col-12 col-lg-6">
              <motion.div className="card h-100 shadow-sm" whileHover={{ scale: 1.02 }} transition={{ duration: 0.18 }}>
                <div className="row g-0 align-items-stretch">
                  <div className="col-12 col-sm-5 d-flex align-items-center justify-content-center bg-light p-2">
                    <AiOutlineGlobal size={60} className="text-secondary" />
                  </div>
                  <div className="col-12 col-sm-7">
                    <div className="card-body">
                      <h5 className="card-title">RentOps (Website)</h5>
                      <p className="card-text">Equipment rental website built with ASP.NET Core (MVC) and a shared class library for models and business logic.</p>
                      <p className="mb-1"><strong>Stack:</strong> ASP.NET Core, MVC, .NET class libraries.</p>
                      <div className="mt-2"><small className="text-muted">Add screenshots, component diagrams, or a screen recording here.</small></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="col-12 col-lg-6">
              <motion.div className="card h-100 shadow-sm" whileHover={{ scale: 1.02 }} transition={{ duration: 0.18 }}>
                <div className="row g-0 align-items-stretch">
                  <div className="col-12 col-sm-5 d-flex align-items-center justify-content-center bg-light p-2">
                    <AiOutlineGlobal size={60} className="text-secondary" />
                  </div>
                  <div className="col-12 col-sm-7">
                    <div className="card-body">
                      <h5 className="card-title">Borrow My Charger</h5>
                      <p className="card-text">Platform for EV charging spots implemented with HTML, CSS, PHP and JavaScript, connected to PhpMyAdmin.</p>
                      <p className="mb-1"><strong>Stack:</strong> PHP, MySQL, JS, HTML/CSS.</p>
                      <div className="mt-2"><small className="text-muted">Drop screenshots here or link to live demo / repo.</small></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Game Development Separator */}
        <div className="col-12">
          <div className="d-flex align-items-center my-3">
            <hr className="flex-grow-1" />
            <span className="mx-3 text-muted d-flex align-items-center"><GiGamepad className="me-2" size={20} />Game Development</span>
            <hr className="flex-grow-1" />
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <motion.div className="card h-100 shadow-sm" whileHover={{ scale: 1.02 }} transition={{ duration: 0.18 }}>
            <div className="row g-0 align-items-stretch">
              <div className="col-12 col-sm-5 d-flex align-items-center justify-content-center bg-dark p-2">
                <GiGamepad size={60} className="text-light" />
              </div>
              <div className="col-12 col-sm-7">
                <div className="card-body">
                  <h5 className="card-title">OperationExoQuest</h5>
                  <p className="card-text">PC game developed with Unity and C#. Add gameplay screenshots or a short gameplay clip below.</p>
                  <div className="mt-2"><small className="text-muted">Use a <code>video</code> tag for clips or embed a hosted video link.</small></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Desktop Development Separator */}
        <div className="col-12">
          <div className="d-flex align-items-center my-3">
            <hr className="flex-grow-1" />
            <span className="mx-3 text-muted d-flex align-items-center"><FiMonitor className="me-2" size={20} />Desktop Applications</span>
            <hr className="flex-grow-1" />
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <motion.div className="card h-100 shadow-sm" whileHover={{ scale: 1.02 }} transition={{ duration: 0.18 }}>
            <div className="row g-0 align-items-stretch">
              <div className="col-12 col-sm-5 d-flex align-items-center justify-content-center bg-light p-2">
                <FiMonitor size={60} className="text-secondary" />
              </div>
              <div className="col-12 col-sm-7">
                <div className="card-body">
                  <h5 className="card-title">RentOps Desktop</h5>
                  <p className="card-text">.NET Framework Windows application sharing the same database as RentOps website for managers and admins.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="col-12 col-lg-6">
          <motion.div className="card h-100 shadow-sm" whileHover={{ scale: 1.02 }} transition={{ duration: 0.18 }}>
            <div className="row g-0 align-items-stretch">
              <div className="col-12 col-sm-5 d-flex align-items-center justify-content-center bg-light p-2">
                <FiMonitor size={60} className="text-secondary" />
              </div>
              <div className="col-12 col-sm-7">
                <div className="card-body">
                  <h5 className="card-title">Happy Journey</h5>
                  <p className="card-text">Flight management system built with .NET Framework and a local SQL database.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="col-12 col-lg-6">
          <motion.div className="card h-100 shadow-sm" whileHover={{ scale: 1.02 }} transition={{ duration: 0.18 }}>
            <div className="row g-0 align-items-stretch">
              <div className="col-12 col-sm-5 d-flex align-items-center justify-content-center bg-light p-2">
                <FiMonitor size={60} className="text-secondary" />
              </div>
              <div className="col-12 col-sm-7">
                <div className="card-body">
                  <h5 className="card-title">Premier League</h5>
                  <p className="card-text">Java desktop app for managing a sports league — teams, players, and fixtures.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Development Separator */}
        <div className="col-12">
          <div className="d-flex align-items-center my-3">
            <hr className="flex-grow-1" />
            <span className="mx-3 text-muted d-flex align-items-center"><IoMdPhonePortrait className="me-2" size={20} />Mobile Applications</span>
            <hr className="flex-grow-1" />
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <motion.div className="card h-100 shadow-sm" whileHover={{ scale: 1.02 }} transition={{ duration: 0.18 }}>
            <div className="row g-0 align-items-stretch">
              <div className="col-12 col-sm-5 d-flex align-items-center justify-content-center bg-light p-2">
                <IoMdPhonePortrait size={60} className="text-secondary" />
              </div>
              <div className="col-12 col-sm-7">
                <div className="card-body">
                  <h5 className="card-title">Jobify (iOS)</h5>
                  <p className="card-text">iOS app that allows companies to post jobs and candidates to apply. Built in Xcode, integrated with Firebase and Cloudinary.</p>
                  <div className="mt-2"><small className="text-muted">Design suggestion: replace icon with screenshots or short demo video.</small></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;