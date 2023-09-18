export type LinksType = {
	id: number;
	url: string;
	title: string;
};

export const leftLinks: LinksType[] = [
	{ id: 1, url: "/", title: "Home" },
	{ id: 2, url: "/menu", title: "Menu" },
];

export const rightLinks: LinksType[] = [
	{ id: 1, url: "/#locations", title: "Locations" },
	{ id: 2, url: "/contacts", title: "Contact Us" },
];
