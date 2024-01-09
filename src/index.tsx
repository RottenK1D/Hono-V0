import { Hono } from "hono";
import { jsxRenderer, useRequestContext } from "hono/jsx-renderer";

import {
	Button,
	Label,
	ListBox,
	ListBoxItem,
	Popover,
	Select,
	SelectValue,
} from "react-aria-components";

const app = new Hono();

app.get(
	"/page/*",
	jsxRenderer(({ children }) => {
		return (
			<html lang="en">
				<body>
					<header>Menu</header>
					<div>{children}</div>
				</body>
			</html>
		);
	}),
);

app.get("/page/about", (c) => {
	return c.render(
		<Select>
			<Label>Favorite Animal</Label>
			<Button>
				<SelectValue />
				<span aria-hidden="true">▼</span>
			</Button>
			<Popover>
				<ListBox>
					<ListBoxItem>Cat</ListBoxItem>
					<ListBoxItem>Dog</ListBoxItem>
					<ListBoxItem>Kangaroo</ListBoxItem>
				</ListBox>
			</Popover>
		</Select>,
	);
});

export default app;
