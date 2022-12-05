const Logo = () => {
	return (
		<>
			<a className="normal-case text-xl">
				<span className="flex justify-center items-center gap-2 font-bold text-indigo-900">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					fill="none"
					viewBox="0 0 24 24"
					className="w-10 h-10"
				>
					<path
						fill="#030D45"
						d="M20.163 22c.919 0 1.735-.816 1.735-1.735v-4.081h-4.694V22h2.96zM22 9.04h-4.694v5.817H22V9.041zM20.163 2h-2.959v5.918h4.694V3.837C22 2.817 21.184 2 20.163 2zM16.082 2H7.918v19.898h8.164V2zM2 20.163A1.83 1.83 0 003.837 22h2.959v-5.918H2v4.081zM6.694 9.04H2v5.817h4.694V9.041zM2 3.837v4.081h4.694V2H3.837A1.83 1.83 0 002 3.837z"
					></path>
				</svg>
				Movie Database
				</span>
				
			</a>
		</>
	);
};

export default Logo;
