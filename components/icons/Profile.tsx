interface ProfileProps {
    className?: string;
  }
  
  const ProfileIcon: React.FC<ProfileProps> = ({ className = '' }) => (
    <svg  
    className={`${className} w-5 h-5 icon icon-tabler icons-tabler-outline icon-tabler-user-check`} 
    width="1em" 
    height="1em" 
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid" 
    fill="currentColor"
    viewBox="0 0 20 20"
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
          <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
          <path d="M15 19l2 2l4 -4" 
          />
    </svg>
  );
  export default ProfileIcon;