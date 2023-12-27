//* -----------------------[Collapse Product Filter]----------------------------
if (isMobile.any()) {
	const collapse = new ItcCollapse(document.querySelector(
		'.filter__body'));
	document.querySelector('.filter__title').onclick = () => {
		collapse.toggle();
	};
}
//* -----------------------[Collapse filter elements]---------------------------
const sectionFilters = document.querySelectorAll('._filterToggle');
sectionFilters.forEach((sectionFilter) => {
	const trigger = sectionFilter.querySelector('.section-filter__title');
	trigger.addEventListener('click', () => {
		const opened_item = document.querySelector('._open');
		_toggleFilter(sectionFilter); // Переключить текущий элемент
		if (opened_item && opened_item !== sectionFilter) {
			_toggleFilter(opened_item);
		}
	});
});
const _toggleFilter = (sectionFilter) => {
	const collapse = new ItcCollapse(sectionFilter.querySelector('._collapse'));
	if (sectionFilter.classList.contains('_open')) {
		sectionFilter.classList.remove('_open');
		collapse.toggle();
	} else {
		sectionFilter.classList.add('_open');
		collapse.toggle();
	}
};