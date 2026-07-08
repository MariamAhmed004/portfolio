import { motion } from 'framer-motion';
import { AiOutlineCode, AiOutlineTeam } from 'react-icons/ai';
import { RiToolsLine } from 'react-icons/ri';
import { FaServer, FaLayerGroup, FaGithub } from 'react-icons/fa';

function Skills() {
  return (
    <motion.section
      id="skills"
      className="p-5 container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-4">
        <h2 className="display-6">Skills</h2>
        <p className="text-muted">Technical skills, tools, and soft skills — ready to replace placeholders with images or examples.</p>
        <div className="col-12 col-lg-8">
          <motion.div className="card shadow-sm mb-3" whileHover={{ y: -3 }} transition={{ duration: 0.15 }}>
            <div className="card-body">
              <h5 className="card-title">Technologies & Tools</h5>
              <p className="text-muted">Grouped by type — each group has an icon for quick scanning.</p>

              <div className="mb-3">
                <div className="d-flex align-items-center mb-2"><AiOutlineCode className="me-2" size={20} /> <strong>Programming Languages</strong></div>
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge bg-light text-dark p-2">Swift</span>
                  <span className="badge bg-light text-dark p-2">Java</span>
                  <span className="badge bg-light text-dark p-2">C#</span>
                  <span className="badge bg-light text-dark p-2">Python</span>
                  <span className="badge bg-light text-dark p-2">MySQL</span>
                  <span className="badge bg-light text-dark p-2">PHP</span>
                  <span className="badge bg-light text-dark p-2">HTML</span>
                  <span className="badge bg-light text-dark p-2">CSS</span>
                  <span className="badge bg-light text-dark p-2">JavaScript</span>
                  <span className="badge bg-light text-dark p-2">ReactJS</span>
                </div>
              </div>

              <div className="mb-3">
                <div className="d-flex align-items-center mb-2"><RiToolsLine className="me-2" size={20} /> <strong>IDE / Development Tools</strong></div>
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge bg-light text-dark p-2">Visual Studio</span>
                  <span className="badge bg-light text-dark p-2">NetBeans</span>
                  <span className="badge bg-light text-dark p-2">Xcode</span>
                </div>
              </div>

              <div className="mb-3">
                <div className="d-flex align-items-center mb-2"><FaServer className="me-2" size={20} /> <strong>Software & Platforms</strong></div>
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge bg-light text-dark p-2">Oracle SQL Developer</span>
                  <span className="badge bg-light text-dark p-2">SSMS</span>
                  <span className="badge bg-light text-dark p-2">AWS</span>
                  <span className="badge bg-light text-dark p-2">Enterprise Architect</span>
                  <span className="badge bg-light text-dark p-2">Microsoft Office</span>
                </div>
              </div>

              <div className="mb-3">
                <div className="d-flex align-items-center mb-2"><FaGithub className="me-2" size={20} /> <strong>Source Control</strong></div>
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge bg-light text-dark p-2">GitHub</span>
                  <span className="badge bg-light text-dark p-2">Azure DevOps</span>
                </div>
              </div>

              <div className="mb-0">
                <div className="d-flex align-items-center mb-2"><FaLayerGroup className="me-2" size={20} /> <strong>Frameworks & Web Technologies</strong></div>
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge bg-light text-dark p-2">.NET Framework</span>
                  <span className="badge bg-light text-dark p-2">ASP.NET (MVC, Web API)</span>
                  <span className="badge bg-light text-dark p-2">EF Core</span>
                  <span className="badge bg-light text-dark p-2">Bootstrap</span>
                  <span className="badge bg-light text-dark p-2">ReactJS</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Soft Skills Separator */}
      <div className="d-flex align-items-center my-4">
        <hr className="flex-grow-1" />
        <span className="mx-3 text-muted d-flex align-items-center"><AiOutlineTeam className="me-2" size={20} />Soft Skills</span>
        <hr className="flex-grow-1" />
      </div>

      <motion.div className="card shadow-sm mb-3" whileHover={{ y: -2 }} transition={{ duration: 0.15 }}>
        <div className="card-body">
          <ul>
            <li><strong>Teamwork & collaboration:</strong> Works effectively in cross-functional and diverse teams.</li>
            <li><strong>Pressure resilience:</strong> Maintains focus and delivers results under tight deadlines.</li>
            <li><strong>Time management:</strong> Prioritizes tasks and consistently meets deadlines.</li>
            <li><strong>Communication:</strong> Clear technical and non-technical communication, documentation, and presentations.</li>
            <li><strong>Problem solving:</strong> Analytical approach, debugging, and designing maintainable solutions.</li>
          </ul>
        </div>
      </motion.div>

      <div className="text-center mt-3">
        <small className="text-muted">Tip: Replace placeholder image(s) with real screenshots or upload assets to <code>public/</code> and point the `src` to `/projects/your-image.png`.</small>
      </div>
    </motion.section>
  );
}

export default Skills;