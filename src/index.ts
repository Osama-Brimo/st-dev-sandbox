async function importFromScript(what) {
    const module = await import(/* webpackIgnore: true */'../../../../extensions.js');
    return module[what];
}

jQuery(async () => {
    const getContext = await importFromScript('getContext');
    try {
        console.log('FUUUUUUUUCK!!!')
        console.log('[SANDBOX]: Extensions loaded!');
        console.log('[SANDBOX]: Context...', getContext());
    } catch (error) {
        console.error('[SANDBOX] ERROR:', error);
    }
});
