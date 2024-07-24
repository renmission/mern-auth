import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 w-full py-4 bg-white flex justify-center items-center">
       <div className='flex flex-col items-center space-y-2'>
        <div className='flex justify-center'>
                <Link to={{ pathname: "https://github.com/renmission/mern-auth" }} target="_blank" className="mr-2">
                    <FaGithub size={24} className="text-slate-400" />
                </Link>
                <Link to={{ pathname: "https://www.linkedin.com/in/renmission/" }} target="_blank" className="mr-2">
                    <FaLinkedin size={24} className="text-slate-400" />
                </Link>
            </div>
            <p className="text-center text-slate-400">
            Copyright &copy; {currentYear} Renato Mission
            </p>
       </div>
    </footer>
  );
}

export default Footer;