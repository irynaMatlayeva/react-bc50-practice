import universityImg from '../assets/images/university-icon.svg';
import departmentsImg from '../assets/images/faculties-icon.svg';
import { HiBookOpen, HiAcademicCap } from 'react-icons/hi';
export const menuConfig = [
  {
    name: 'University',
    link: '/',
    icon: <HiBookOpen color="#FF6B0A" size={24} />,
  },

  {
    name: 'Departments',
    link: '/',
    icon: <HiAcademicCap color="#FF6B0A" size={24} />,
  },
];
