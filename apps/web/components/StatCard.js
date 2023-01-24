import FeatherIcon from 'feather-icons-react';

export const StatCard = ({ title, value, icon }) => {
	  return (
		<div className="flex flex-col items-center justify-center w-full h-full p-4 border-indigo-500 border-4 rounded-lg shadow-lg">
		  <div className="flex items-center justify-center w-16 h-16 mb-4 text-white rounded-lg bg-gradient-to-r from-indigo-400 to-indigo-600">
			<FeatherIcon icon={icon} />
		  </div>
		  <div className="text-2xl font-bold text-white">{value}</div>
		  <div className="text-sm font-medium text-white">{title}</div>
		</div>
	  );
	};