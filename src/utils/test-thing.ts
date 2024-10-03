async function importFromScript(what) {
    const module = await import(/* webpackIgnore: true */'../../../../../extensions.js');
    return module[what];
}

const getContext = await importFromScript('getContext');

export {
    getContext
}
