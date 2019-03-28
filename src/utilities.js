/**
 *
 * @param arr - array of objects to be sorted
 * @param key - name of key to be sorted by
 * @returns {*}
 */
export const sort = (arr, key) =>
    arr.sort((a, b) => (a[key].toLowerCase() > b[key].toLowerCase() ? 1 : -1));

/**
 *
 * @param arr - array of objects to sort
 * @param key - function key which is executed before being sorted. Defaults to 'question'
 * @returns {*}
 */
export const sortArticles = (arr, key = 'question') =>
    arr.sort((a, b) =>
        a[key]().props.children.toLowerCase() >
        b[key]().props.children.toLowerCase()
            ? 1
            : -1
    );
