import {
	DrawerToggle,
	EditMode,
	GrammarCheck,
	LocaleController,
	ThemeController,
} from "./_action";

export default function (props: { sidebarId: string }) {
	return (
		<div class="navbar gap-1 w-full">
			<div class="flex items-center xl:hidden">
				<DrawerToggle sidebarId={props.sidebarId} />
			</div>
			<div class="navbar-start">
				<h2 class="text-xl font-bold max-sm:hidden">TextTool</h2>
				<h2 class="text-xl font-bold sm:hidden">TT</h2>
			</div>
			<div class="navbar-end gap-1">
				<GrammarCheck />
				<EditMode />
				<ThemeController />
				<LocaleController />
			</div>
		</div>
	);
}
