export default {
	name: "tweet",
	title: "Tweet",
	type: "document",
	fields: [
		{
			name: "text",
			title: "Text in Tweet",
			type: "string",
		},
		{
			name: "blockTweet",
			title: "Block Tweet",
			description:
				"ADMIN controls: Toggle is Tweet is deemed inappropriate",
			type: "boolean",
		},
		{
			name: "username",
			title: "Username",
			type: "string",
		},
		{
			name: "profileImg",
			title: "Profile Image",
			type: "string",
		},
		{
			name: "image",
			title: "Tweet Image",
			type: "string",
		},
	],
};
