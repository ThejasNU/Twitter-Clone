import { RefreshIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Tweet } from "../typings";
import { fetchTweets } from "../utils/fetchTweets";
import TweetBox from "./TweetBox";
import TweetComponent from "./TweetComponent";

interface Props {
	tweets: Tweet[];
}

const Feed = ({ tweets: tweetsProp }: Props) => {
	const [tweets, setTweets] = useState<Tweet[]>(tweetsProp);

	const handleRefresh = async () => {
		const refreshToast = toast.loading("Refreshing...");
		const newTweets: Tweet[] = await fetchTweets();
		setTweets(newTweets);
		toast.success("Feed Updated!", {
			id: refreshToast,
		});
	};

	return (
		<div className="col-span-7 border-x lg:col-span-5 overflow-scroll max-h-screen scrollbar-hide">
			<div className="flex items-center justify-between">
				<h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
				<RefreshIcon
					className="h-8 w-8 cursor-pointer text-twitter mr-5 mt-5 transition-all duration-500 ease-out hover:rotate-180 active:scale-125"
					onClick={handleRefresh}
				/>
			</div>

			<div>
				<TweetBox setTweets={setTweets} />
			</div>

			<div>
				{tweets.map((tweet) => (
					<TweetComponent key={tweet._id} tweet={tweet} />
				))}
			</div>
		</div>
	);
};

export default Feed;
