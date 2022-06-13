import React, { SVGProps } from "react";

interface Props {
	Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
	title: string;
	onClick?: () => {};
}

const SidebarRow = ({ Icon, title, onClick }: Props) => {
	return (
		<div
			onClick={() => onClick?.()}
			className="group flex max-w-fit cursor-pointer items-center space-x-2 px-4 py-3 rounded-full transition-all duration-200 hover:bg-gray-100"
		>
			<Icon className="h-6 w-6 " />
			<p className=" group-hover:text-twitter hidden text-base font-light md:inline-flex lg:text-xl">
				{title}
			</p>
		</div>
	);
};

export default SidebarRow;
