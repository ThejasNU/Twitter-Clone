import axios from "axios";
import { Comment } from "../typings";

export const fetchComments = async (tweetId: string) => {
	const res = await axios.get(`/api/getComments?tweetId=${tweetId}`);

	const comments: Comment[] = res.data;

	return comments;
};
