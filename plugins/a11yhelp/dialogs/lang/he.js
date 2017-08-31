/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.plugins.setLang( 'a11yhelp', 'he', {
	title: 'הוראות נגישות',
	contents: 'הוראות נגישות. לסגירה לחץ אסקייפ (ESC).',
	legend: [
		{
		name: 'כללי',
		items: [
			{
			name: 'סרגל הכלים',
			legend: 'לחץ על ${toolbarFocus} כדי לנווט לסרגל הכלים. עבור לכפתור הבא עם מקש הטאב (TAB) או חץ שמאלי. עבור לכפתור הקודם עם מקש השיפט (SHIFT) + טאב (TAB) או חץ ימני. לחץ רווח או אנטר (ENTER) כדי להפעיל את הכפתור הנבחר.'
		},

			{
			name: 'דיאלוגים (חלונות תשאול)',
			legend:
				'Inside a dialog, press TAB to navigate to the next dialog element, press SHIFT+TAB to move to the previous dialog element, press ENTER to submit the dialog, press ESC to cancel the dialog. When a dialog has multiple tabs, the tab list can be reached either with ALT+F10 or with TAB as part of the dialog tabbing order. With tab list focused, move to the next and previous tab with RIGHT and LEFT ARROW, respectively.'  // MISSING
		},

			{
			name: 'תפריט ההקשר (Context Menu)',
			legend: 'לחץ ${contextMenu} או APPLICATION KEYכדי לפתוח את תפריט ההקשר. עבור לאפשרות הבאה עם טאב (TAB) או חץ למטה. עבור לאפשרות הקודמת עם שיפט (SHIFT) + טאב (TAB) או חץ למעלה. לחץ רווח או אנטר (ENTER) כדי לבחור את האפשרות. פתח את תת התפריט (Sub-menu) של האפשרות הנוכחית עם רווח או אנטר (ENTER) או חץ שמאלי. חזור לתפריט האב עם אסקייפ (ESC) או חץ שמאלי. סגור את תפריט ההקשר עם אסקייפ (ESC).'
		},

			{
			name: 'תפריטים צפים (List boxes)',
			legend: 'Inside a list-box, move to next list item with TAB OR DOWN ARROW. Move to previous list item with SHIFT+TAB or UP ARROW. Press SPACE or ENTER to select the list option. Press ESC to close the list-box.' // MISSING
		},

			{
			name: 'עץ אלמנטים (Elements Path)',
			legend: 'לחץ ${elementsPathFocus} כדי לנווט לעץ האלמנטים. עבור לפריט הבא עם טאב (TAB) או חץ ימני. עבור לפריט הקודם עם שיפט (SHIFT) + טאב (TAB) או חץ שמאלי. לחץ רווח או אנטר (ENTER) כדי לבחור את האלמנט בעורך.'
		}
		]
	}
	],
	tab: 'Tab',
	pause: 'Pause',
	capslock: 'Caps Lock',
	escape: 'Escape',
	pageUp: 'Page Up',
	pageDown: 'Page Down',
	leftArrow: 'חץ שמאלה',
	upArrow: 'חץ למעלה',
	rightArrow: 'חץ ימינה',
	downArrow: 'חץ למטה',
	insert: 'הכנס',
	leftWindowKey: 'Left Windows key', // MISSING
	rightWindowKey: 'Right Windows key', // MISSING
	selectKey: 'בחר מקש',
	numpad0: 'Numpad 0', // MISSING
	numpad1: 'Numpad 1', // MISSING
	numpad2: 'Numpad 2', // MISSING
	numpad3: 'Numpad 3', // MISSING
	numpad4: 'Numpad 4', // MISSING
	numpad5: 'Numpad 5', // MISSING
	numpad6: 'Numpad 6', // MISSING
	numpad7: 'Numpad 7', // MISSING
	numpad8: 'Numpad 8', // MISSING
	numpad9: 'Numpad 9', // MISSING
	multiply: 'Multiply', // MISSING
	add: 'הוסף',
	subtract: 'Subtract', // MISSING
	decimalPoint: 'Decimal Point', // MISSING
	divide: 'Divide', // MISSING
	f1: 'F1',
	f2: 'F2',
	f3: 'F3',
	f4: 'F4',
	f5: 'F5',
	f6: 'F6',
	f7: 'F7',
	f8: 'F8',
	f9: 'F9',
	f10: 'F10',
	f11: 'F11',
	f12: 'F12',
	numLock: 'Num Lock',
	scrollLock: 'Scroll Lock',
	semiColon: 'Semicolon', // MISSING
	equalSign: 'Equal Sign', // MISSING
	comma: 'Comma', // MISSING
	dash: 'Dash', // MISSING
	period: 'Period', // MISSING
	forwardSlash: 'סלאש',
	graveAccent: 'Grave Accent', // MISSING
	openBracket: 'Open Bracket', // MISSING
	backSlash: 'סלאש הפוך',
	closeBracket: 'Close Bracket', // MISSING
	singleQuote: 'ציטוט יחיד',
	keystrokesTable: {
		commandsHeader: 'Commands', // MISSING
		keystrokesHeader: 'Keystrokes' // MISSING
	},
	tabLabels: {
		general: 'Accessibility Help', // MISSING
		keystrokes: 'Keystrokes list' // MISSING
	}
} );
