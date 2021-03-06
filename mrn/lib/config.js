import { typography,color } from 'react-native-material-design-styles';
import { glyphMap } from './Icon';

/**
 * Paper style color
 * @type {object}
 */
export const COLOR = color;

/**
 * Paper style typography
 * @type {object}
 */
export const TYPO = typography;

/**
 * Primary color name
 * @type {string}
 */
export const PRIMARY = 'paperBlue';

/**
 * Paper style color names
 * @type {string[]}
 */
export const COLOR_NAME = ["googleBlue", "googleGreen", "googleGrey", "googleRed", "googleYellow", "paperAmber",
    "paperBlue", "paperBlueGrey", "paperBrown", "paperCyan", "paperDeepOrange", "paperDeepPurple", "paperGreen",
    "paperGrey", "paperIndigo", "paperLightBlue", "paperLightGreen", "paperLime", "paperOrange", "paperPink",
    "paperPurple", "paperRed", "paperTeal", "paperYellow"];

/**
 * Themes
 * @type {string[]}
 */
export const THEME_NAME = ['light', 'dark'];

/**
 * All Icon name
 * @type {Array}
 */
export const ICON_NAME = Object.keys(glyphMap);