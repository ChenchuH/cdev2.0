export default function ResumePage() {
  return (
    <article className="max-w-4xl p-4">
      <h1 className="mb-4 font-mono text-xl font-bold text-neutral-200">
        Chenchu Yakasiri Saravanan
      </h1>

      <p className="leading-relaxed text-neutral-400">
        US Permanent Resident ·{" "}
        <a
          className="text-blue-500 hover:underline"
          href="mailto:ynchenchuh@icloud.com"
        >
          ynchenchuh@icloud.com
        </a>
      </p>

      <h2 className="mb-3 mt-7 font-mono text-xl font-bold text-neutral-200">
        Education
      </h2>
      <p className="leading-relaxed text-neutral-400">
        California State University, Long Beach — B.S. Physics, expected Dec 2027
      </p>
      <p className="leading-relaxed text-neutral-400">
        Concentration: Experimental Condensed Matter Physics
      </p>

      <h2 className="mb-3 mt-7 font-mono text-xl font-bold text-neutral-200">
        Experience
      </h2>

      <h3 className="mb-1 mt-4 font-mono text-xl font-bold text-neutral-200">
        Undergraduate Researcher — CSULB Nanoelectronics Group
      </h3>
      <p className="leading-relaxed text-neutral-400">
        Jun 2024–Present · Long Beach, California
      </p>
      <ul className="list-disc pl-6 leading-relaxed text-neutral-400">
        <li>Adapted a hemispherical PC/PDMS dome stamp for precise dry transfer of PtTe₂ crystals.</li>
        <li>Refined stamp fabrication and transfer parameters to improve pickup consistency and target smaller flakes.</li>
        <li>Started adapting the method to CrₓPt₁₋ₓTe₂ and developing bottom-contact Hall bars.</li>
        <li>Wrote CSULB’s updated Raman spectroscopy SOP and operated the Raman instrument.</li>
      </ul>

      <h3 className="mb-1 mt-4 font-mono text-xl font-bold text-neutral-200">
        ADCS Engineer — CSULB Shark-Sat 1
      </h3>
      <p className="leading-relaxed text-neutral-400">
        Aug 2023–Nov 2024 · Long Beach, California
      </p>
      <ul className="list-disc pl-6 leading-relaxed text-neutral-400">
        <li>Led the initial ADCS design draft with vendors and industry advisors.</li>
        <li>Helped design detumble simulations for avionics software development.</li>
      </ul>

      <h2 className="mb-3 mt-7 font-mono text-xl font-bold text-neutral-200">
        Projects
      </h2>
      <ul className="list-disc pl-6 leading-relaxed text-neutral-400">
        <li>
          <strong>WeatherCLI</strong> — Python weather CLI using Open-Meteo,
          Geopy, and Rich; includes location search, unit conversion, and
          GitHub Actions CI. Mar 2026–Present.
        </li>
        <li>
          <strong>Raman Spectra Visualization Tool</strong> — Jupyter tools to
          visualize and compare PtTe₂ Raman spectra. May 2025.
        </li>
        <li>
          <strong>5 mW Laser Pointer PCB</strong> — Designing a KiCad schematic
          and AAA-powered PCB for a 5 mW red laser module. Oct 2026–Present.
        </li>
        <li>
          <strong>KSP Orbital Relay Calculators</strong> — Python calculations
          for orbital period, eclipse duration, power, and satellite spacing.
          2025.
        </li>
      </ul>

      <h2 className="mb-3 mt-7 font-mono text-xl font-bold text-neutral-200">
        Presentations
      </h2>
      <ul className="list-disc pl-6 leading-relaxed text-neutral-400">
        <li>APS Global Summit — Poster Presenter, 2025</li>
        <li>APS Far West — Poster Presenter, 2026</li>
        <li>APS Global Summit — Scheduled Oral Presenter, Apr 2027</li>
      </ul>

      <h2 className="mb-3 mt-7 font-mono text-xl font-bold text-neutral-200">
        Activities
      </h2>
      <ul className="list-disc pl-6 leading-relaxed text-neutral-400">
        <li>Western Museum of Flight — Model Restoration Technician and Docent, Feb 2024–Jul 2025</li>
        <li>CSULB Astronomy Club — Treasurer, Aug 2024–Sep 2025</li>
      </ul>

      <h2 className="mb-3 mt-7 font-mono text-xl font-bold text-neutral-200">
        Skills
      </h2>
      <p className="leading-relaxed text-neutral-400">
        Python, Bash, TypeScript/JavaScript, HTML/CSS, MATLAB, LaTeX
      </p>
      <p className="leading-relaxed text-neutral-400">
        Next.js, Cloudflare, AWS, Git/GitHub, Jupyter Notebooks
      </p>
      <p className="leading-relaxed text-neutral-400">
        KiCad, 3D printing, SolidWorks, cryostat control, Raman spectroscopy,
        AFM, EDS, WiTec Suite, AGI Toolkit
      </p>

      <p className="mt-7 leading-relaxed text-neutral-400">
        <a
          className="text-blue-500 hover:underline"
          href="/Chenchu_Resume_2027.pdf"
          download
        >
          Download PDF resume
        </a>
      </p>
    </article>
  );
}
