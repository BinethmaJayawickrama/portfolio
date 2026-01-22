import Section from "../components/Section";
import AutoScrollRow from "../components/AutoScrollRow";

import { FaJava, FaFileExcel } from "react-icons/fa";
import {
  SiPython,
  SiHtml5,
  SiCss3,
  SiReact,
  SiGithub,
  SiGnubash,
  SiXml,
  SiJquery,
  SiMysql,
  SiPhp,
  SiJavascript,
  SiVite,
  SiNodedotjs,
  SiBootstrap,
  SiMongodb,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const row1 = [
  { key: "python", label: "Python", icon: <SiPython />, color: "#3776AB" },
  { key: "java", label: "Java", icon: <FaJava />, color: "#E76F00" },
  { key: "html", label: "HTML", icon: <SiHtml5 />, color: "#E34F26" },
  { key: "css", label: "CSS", icon: <SiCss3 />, color: "#1572B6" },
  { key: "react", label: "React", icon: <SiReact />, color: "#61DAFB" },
  { key: "github", label: "GitHub", icon: <SiGithub />, color: "#9CA3AF" },
  { key: "gitbash", label: "Git Bash", icon: <SiGnubash />, color: "#4EAA25" },
  { key: "xml", label: "XML", icon: <SiXml />, color: "#F59E0B" },
  { key: "jquery", label: "jQuery", icon: <SiJquery />, color: "#0769AD" },
];

const row2 = [
  { key: "mysql", label: "MySQL", icon: <SiMysql />, color: "#4479A1" },
  { key: "php", label: "PHP", icon: <SiPhp />, color: "#777BB4" },
  { key: "javascript", label: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  { key: "vite", label: "Vite", icon: <SiVite />, color: "#646CFF" },
  { key: "api", label: "API", icon: <TbApi />, color: "#22C55E" },
  { key: "node", label: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
  { key: "bootstrap", label: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" },
  { key: "mongodb", label: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { key: "excel", label: "Excel", icon: <FaFileExcel />, color: "#217346" },
];

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" centerHeader>
      <div className="skillsRows">
        <AutoScrollRow items={row1} speed={50} ariaLabel="Frontend Skills" />
        <AutoScrollRow items={row2} speed={50} ariaLabel="Backend Skills" />
      </div>
    </Section>
  );
}
