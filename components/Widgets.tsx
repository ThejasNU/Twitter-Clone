import { SearchIcon } from "@heroicons/react/outline";
import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const Widgets = () => {
	return (
		<div className="mt-2 px-2 col-span-2 hidden lg:inline">
			{/* Searchbar */}
			<div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-full mt-2">
				<SearchIcon className="h-5 w-5 text-gray-400" />
				<input
					type="text"
					placeholder="Search Twitter"
					className="flex-1 bg-transparent outline-none"
				/>
			</div>
			<TwitterTimelineEmbed
				sourceType="profile"
				screenName="__TNU_"
				options={{ height: 1000 }}
			/>
		</div>
	);
};

export default Widgets;
