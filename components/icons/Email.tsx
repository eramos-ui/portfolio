interface EmailProps {
  className?: string;
}

const EmailIcon: React.FC<EmailProps> = ({ className = '' }) => (
  <svg
    className={`${className} w-5 h-5`} 
    width="1em" 
    height="1em" 
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid" 
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 12.713l11.985-8.713h-23.97l11.985 8.713zm0 2.574l-12-8.812v13.525h24v-13.525l-12 8.812z" />
  </svg>
);

export default EmailIcon;
