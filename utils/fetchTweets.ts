import axios from "axios";
import { Tweet } from "../typings";

export const fetchTweets = async () => {
	const res = await axios.get(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/getTweets`
	);

	const tweets: Tweet[] = res.data.tweets;

	return tweets;
};
